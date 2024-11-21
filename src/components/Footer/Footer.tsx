
const Footer = () => {
    const date = new Date()
    return (
        <div className="bg-gray-800 text-white font-serif ">

            <div className="flex flex-col items-center justify-center p-4">
                <p className="text-lg">Made with ❤️ by <a href="#" className="underline">Leandro Martínez</a></p>
                <p className="text-lg">© {date.getFullYear()} All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer