export default function Navbar() {
    return (
        <nav className="text-black w-screen shadow-md py-2 px-6">
            <div className="flex flex-row items-center">
                <p className="font-semibold">idkname</p>
                <div className="ml-auto flex flex-row gap-6">
                    <button className="text-blue-600 hover:font-semibold">
                        Login
                    </button>
                    <button className="bg-blue-600 text-white rounded-md px-8 py-2">
                        Join
                    </button>
                </div>
            </div>
        </nav>
    )
}