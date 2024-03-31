import Navbar from "@/components/navbar"
import Link from "next/link"

export default function Admin() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-black">
            <Navbar />

            {/* Main Content */}
            <div className="pt-3 px-6 flex items-center">
                <div className="max-w-2xl flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">somename Admin</h1>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis optio quaerat quae labore quibusdam accusamus sed tempora rem. Corrupti aut optio nihil sequi ipsam eius! Perspiciatis et architecto possimus!</p>
                    <Link href="/admin/login">
                        <button className="mt-3 shrink-0 w-32 bg-teal-600 hover:bg-teal-700 text-white rounded-lg py-2 px-5 duration-300">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

function AdminHome() {
    return (
        <>
        </>
    )
}

function AdminNotLoggedIn() {
    return (
        <>
        </>
    )
}