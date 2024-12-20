import React, { useState, useEffect, Fragment, useRef } from 'react'
import { format } from 'date-fns'
import { CalendarIcon, MagnifyingGlassIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Popover, Transition } from '@headlessui/react'
import { DayPicker } from 'react-day-picker'
import "react-day-picker/style.css";
import { Orders } from '../../types'
import { useOrderContext } from '../../hooks/useGeneralContext'
import { enqueueSnackbar } from 'notistack'
import ConfirmDeleteDialog from '../Food/ConfirmDeleteDialog'


type OrdersListProps = {
    orders: Orders[]
}

export const OrdersList = ({ orders }: OrdersListProps) => {
    const { dispatch } = useOrderContext()
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState<Orders | null>(null)
    const [ordersList, setOrdersList] = useState(orders)
    const [searchId, setSearchId] = useState<number | null>(null)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const popoverButtonRef = useRef<HTMLButtonElement>(null)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchId) {
            const filteredOrders = orders.filter(order => order.id.toString().includes(searchId.toString()))
            setOrdersList(filteredOrders)
        } else {
            setOrdersList(orders)
        }
    }

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }


    const handleDelete = (id: Orders['id']) => {
        setSearchId(null)
        dispatch({ type: 'remove-order', payload: { id } })
        enqueueSnackbar('Orden eliminada', { variant: 'success' })
        closeModal()
    }


    useEffect(() => {
        if (selectedDate) {
            const filteredOrders = orders.filter(order =>
                order.date.toDateString() === selectedDate.toDateString()
            )
            setOrdersList(filteredOrders)
        } else {
            setOrdersList(orders)
        }
    }, [selectedDate, orders])

    return (
        <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200 pb-6 md:mt-24">
                {/* <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Gestión de Órdenes</h1> */}
                <div className="min-w-0 flex-1">
                    <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Gestión de órdenes
                    </h1>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <p className="text-gray-500 py-2">Desde acá podras manejar las órdenes, ver los detalles, modificar y eliminar.</p>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <div className="relative">
                            <input
                                type="number"
                                min={0}
                                placeholder="Buscar por ID"
                                value={searchId ? searchId : undefined}
                                onChange={(e) => setSearchId(+e.target.value)}
                                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                        >
                            <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                            Buscar
                        </button>
                    </form>

                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    ref={popoverButtonRef}
                                    className={`
                  ${open ? 'text-gray-900' : 'text-gray-500'}
                  group inline-flex items-center rounded-md bg-white px-3 py-2 text-base font-medium hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                    <CalendarIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                                    <span>{selectedDate ? format(selectedDate, "PPP") : 'Filtrar por fecha'}</span>
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                            <div className="relative bg-white p-7">
                                                <DayPicker
                                                    mode="single"
                                                    selected={selectedDate}
                                                    onSelect={setSelectedDate}
                                                    footer={
                                                        selectedDate ? `Selected: ${selectedDate.toLocaleDateString()}` : "Pick a day."
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {ordersList.map((order) => (
                                <tr key={order.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customerName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{format(order.date, 'dd/MM/yyyy')}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.status}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => (
                                                setSelectedOrder(order),
                                                openModal()
                                            )}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {orders.length === 0 && (
                    <p className="text-center mt-4 text-gray-500">No se encontraron órdenes.</p>
                )}
            </div>
            <ConfirmDeleteDialog item={{ id: selectedOrder?.id, name: selectedOrder?.customerName }} isOpen={isOpen} setIsOpen={setIsOpen} onDelete={(id) => handleDelete(+id)} title='Eliminar órden' description='¿Está seguro/a que desea eliminar esta órden? No se puede volver atrás luego de eliminada.' />
        </div>
    )
}

export default OrdersList
