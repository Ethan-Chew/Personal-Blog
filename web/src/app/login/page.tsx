'use client'
import axios from "axios";
import Navbar from "@/components/navbar";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ err, setErr ] = useState("")
    
    async function handleSignIn() {
        try {

        } catch (e) {

        }
    }

    return (
        <main className="h-screen bg-white text-black">
            <Navbar />

            <div className="flex flex-col justify-center items-center w-screen h-[100%] gap-6">
                <div className="flex flex-col gap-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl py-8 px-8 w-[70%] md:w-[50%]">
                    <div>
                        <h2 className="text-2xl font-semibold">Sign in</h2>
                        <p className="text-gray-800 text-sm">Login to manage blog posts</p>
                    </div>

                    <div id="login-container" className="flex flex-col gap-2">
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-900">Username</label>
                            <input type="text" 
                                onChange={e => setUsername(e.target.value)}
                                id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                placeholder="JohnDoe" 
                                required 
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-900">Password</label>
                            <input type="password"
                                onChange={e => setPassword(e.target.value)}
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                required 
                            />
                        </div>

                        <p className="text-sm text-red-800">{ err }</p>
                    </div>


                    <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white py-2 rounded-lg" onClick={handleSignIn}>
                        Sign in
                    </button>
                </div>

                <p className="text-sm">Don't have an account? <Link href="/signup" className="text-blue-500">Sign up</Link></p>
            </div>
        </main>
    )
}