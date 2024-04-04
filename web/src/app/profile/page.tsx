'use client'

import authoriseUser from "@/helper/authorise"
import { useRouter } from "next/navigation"
import axios from "axios"
import { User } from "@/helper/types"
import { useState, useEffect } from "react"

export default function Profile() {
    const router = useRouter()
    // Check if User is already Logged In
    const [ userInfo, setUserInfo ] = useState<User | null>(null)
    useEffect(() => {
        async function checkAuth() {
            const authResponse = await authoriseUser()
            if (authResponse.status !== "success") {
                router.push("/login")
            } else {
                const getUserReq = await axios.get(`http://localhost:8080/v1/users/${authResponse.id}`, {
                    withCredentials: true
                })
        
                if (getUserReq.status === 200) {
                    setUserInfo(getUserReq.data)
                }
            }
        }

        checkAuth()
    }, [])

    async function handleLogout() {
        const logoutRequest = await axios.get("http://localhost:8080/v1/auth/logout", {
            withCredentials: true
        })

        if (logoutRequest.status === 200) {
            router.push("/")
        }
    }

    return (
        <main className="min-w-screen flex flex-col justify-center items-center">
            { userInfo ? 
                <ProfilePageContent userInfo={userInfo} handleLogout={handleLogout} /> 
            : 
                <p>lol something broke and u not logged in??</p>
            }
        </main>
    )
}

interface IProfileContent {
    userInfo: User,
    handleLogout: () => void
}

function ProfilePageContent({userInfo, handleLogout}: IProfileContent) {
    return (
        <>
            <p>{ userInfo.username }</p>
            <button className="bg-red-500 hover:bg-red-700 p-3 rounded-md" onClick={handleLogout}>
                Logout
            </button>
        </>
    )
}