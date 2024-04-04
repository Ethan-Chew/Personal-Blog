import Link from "next/link";
import authoriseUser from "@/helper/authorise";
import { cookies } from "next/headers";
import axios from "axios";

export default async function Navbar() {
    // Check if User is already Logged In
    const authResponse = await axios.get("http://localhost:8080/v1/auth", {
        headers: {
            Cookie: cookies().toString()
        }
    })
    let authStatus = false
    if (authResponse) {
        authStatus = true
    }

    return (
        <nav className="text-black w-screen shadow-md py-2 px-6 z-50">
            <div className="flex flex-row items-center">
                <p className="font-semibold">idkname</p>
                {authStatus ? 
                    <div className="ml-auto flex flex-row items-center gap-6"> 
                        <Link href="/profile">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2">
                                Profile
                            </button>
                        </Link>
                        {authResponse.data.role === "Admin" ? 
                            <Link href="/admin">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2">
                                    Admin
                                </button>
                            </Link> 
                        : <></>}
                    </div>
                : 
                    <div className="ml-auto flex flex-row items-center gap-6">
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