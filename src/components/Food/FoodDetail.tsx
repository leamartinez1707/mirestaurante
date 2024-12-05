import React, { useState } from 'react'
import { Navigate, useParams } from "react-router-dom"
import { foodList } from "../../data/db"
import { Dialog, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { StarIcon, ClockIcon, FireIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon, InformationCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Food } from '../../types'
import ConfirmDeleteDialog from './ConfirmDeleteDialog'

const FoodDetail = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)


    const { id } = useParams()
    const food: Food = foodList.find((item) => item.id === Number(id))!

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const deleteFood = (id: Food['id']) => {
        console.log('deleting food...' + id)
    }

    if (!food) return <Navigate to="/food" />
    return (
        <div className='flex flex-col justify-center min-h-screen'>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto">
                <img className="h-48 object-contain mx-auto" src={`/food/${food.image}`} alt={food.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{food.name}</div>
                    <p className="text-gray-700 text-base mb-2">{food.description}</p>
                    <div className="flex items-center mb-2">
                        <CurrencyDollarIcon className="size-5 text-green-500 mr-1" />
                        <span className="font-bold">{food.price.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <StarIcon className="size-5 text-yellow-400 mr-1" />
                        <span>{food.rating?.toFixed(1)}</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <ClockIcon className="size-5 text-blue-500 mr-1" />
                        <span>{food.preparationTime} min</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        {food.isVegetarian && <CheckCircleIcon className="size-5 text-green-500" title="Vegetariano" />}
                        {food.isVegan && <CheckCircleIcon className="size-5 text-green-700" title="Vegano" />}
                        {food.isGlutenFree && <CheckCircleIcon className="size-5 text-yellow-500" title="Sin gluten" />}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={openModal}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                        >
                            <InformationCircleIcon className="h-5 w-5 mr-2" />
                            Más detalles
                        </button>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => console.log(food.id)}
                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                                aria-label={`Editar ${food.name}`}
                            >
                                <PencilIcon className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setIsDeleteDialogOpen(true)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                                aria-label={`Eliminar ${food.name}`}
                            >
                                <TrashIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <Transition appear show={isOpen} as={React.Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <TransitionChild
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </TransitionChild>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={React.Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <DialogTitle
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Detalles adicionales
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500 mb-2">
                                                <span className="font-bold">Categoría:</span> {food.category}
                                            </p>
                                            <p className="text-sm text-gray-500 mb-2">
                                                <span className="font-bold">Disponibilidad:</span>{' '}
                                                {food.availability ? (
                                                    <CheckCircleIcon className="size-5 text-green-500 inline" />
                                                ) : (
                                                    <XCircleIcon className="size-5 text-red-500 inline" />
                                                )}
                                            </p>
                                            <p className="text-sm text-gray-500 mb-2">
                                                <span className="font-bold">Ingredientes:</span>{' '}
                                                {food.ingredients.join(', ')}
                                            </p>
                                            <p className="text-sm text-gray-500 mb-2">
                                                <span className="font-bold">Calorías:</span> {food.calories}
                                            </p>
                                            <div className="flex items-center mb-2">
                                                <span className="text-sm text-gray-500 font-bold mr-2">Nivel de picante:</span>
                                                {[...Array(5)].map((_, index) => (
                                                    <FireIcon
                                                        key={index}
                                                        className={`size-5 ${index < food.spicyLevel! ? 'text-red-500' : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Cerrar
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
                <ConfirmDeleteDialog item={food} isOpen={isDeleteDialogOpen} setIsOpen={setIsDeleteDialogOpen} onDelete={(id) => deleteFood(+id)} title='Eliminar comida' description='¿Está seguro/a que desea eliminar esta comida? No se puede volver atrás luego de eliminada.' />
            </div>
        </div>
    )
}

export default FoodDetail