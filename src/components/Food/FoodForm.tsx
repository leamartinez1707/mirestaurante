const FoodForm = () => {
    const categoryOptions = ["Entrada", "Plato principal", "Postre", "Bebida"];
    return (
        <form className="w-full max-w-2xl md:mx-auto p-2 md:p-4 md:shadow-gray-500 md:shadow-lg md:mt-24">
            <h1 className="text-2xl font-semibold">Formulario de comidas</h1>
            <p className="mb-6">Desde aquí podras ingresar las comidas y sus correspondientes propiedades</p>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full  px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Nombre del plato
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Pizza, Hamburguesa vegana, etc" />
                </div>
                <div className="w-full  px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Descripción
                    </label>
                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" placeholder="Pollo grillado y ensalada verde con aceite de oliva." maxLength={200} />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Precio
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="$54" />
                </div>
            </div>
            <fieldset className="flex flex-col gap-x-2 align-middle w-full px-3 md:px-0 mb-6">
                <legend>Propiedades opcionales</legend>
                <div className="gap-x-2 flex">
                    <input type="checkbox" id="gluten" name="gluten" />
                    <label htmlFor="gluten">Gluten Free?</label>
                </div>
                <div className="gap-x-2 flex">
                    <input type="checkbox" id="vegetarian" name="vegetarian" />
                    <label htmlFor="vegetarian">Vegetariano?</label>
                </div>
                <div className="gap-x-2 flex">
                    <input type="checkbox" id="vegan" name="vegan" />
                    <label htmlFor="vegan">Vegano?</label>
                </div>
            </fieldset>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        Ingredientes
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Cebolla, ajo, adobo, etc" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Categoria
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            {categoryOptions.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Nivel de picante | Del 0 al 5
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="3" min={0} max={5} />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Calorias
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="210" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Tiempo de preparación en minutos
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="20" />
                </div>
            </div>
            <button className="w-full bg-black hover:bg-gray-900 duration-150 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Guardar
            </button>
        </form>
    )
}

export default FoodForm