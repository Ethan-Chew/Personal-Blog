import Link from "next/link";

export default function Navbar() {
    // Check if User is already Logged In
    // const authStatus = await authorise()
    const authStatus = true

    return (
        <nav className="text-black w-screen shadow-md py-2 px-6">
            <div className="flex flex-row items-center">
                <p className="font-semibold">idkname</p>
                {authStatus ? 
                    <div className="ml-auto"> 
                        <Link href="/profile">
                            <button className="bg-blue-600 text-white rounded-md px-6 py-2">
                                Profile
                            </button>
                        </Link>
                    </div>
                : 
                    <div className="ml-auto flex flex-row align-center gap-6">
                        <Link href="/login">
                            <button className="text-blue-600 hover:font-semibold">
                                Login
                            </button>
                        </Link>
                        <button className="bg-blue-600 text-white rounded-md px-8 py-2">
                            Join
                        </button>
                    </div>
                }
            </div>
        </nav>
    )
}