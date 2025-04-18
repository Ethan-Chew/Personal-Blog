'use client'
import Image from "next/image";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export default function NavigationBar() {
    const { theme, setTheme } = useTheme()

    const links = [
        {
            "title": "Portfolio",
            "href": "https://ethanchew.com",
        }, 
        {
            "title": "Blog",
            "href": "https://blog.ethanchew.com",
        },
        {
            "title": "Photography",
            "href": "https://photography.ethanchew.com",
        },
    ]

    return (
        <div className="flex flex-row place-content-between py-8 px-24 text-black dark:text-white">
            <div className="flex flex-row gap-5">
                <Image src={theme === "light" ? "/ECLogoLight.svg" : "/ECLogoDark.svg"} alt="Logo" width={30} height={30} />
                {/* <h1 className="text-4xl font-semibold">Ethan Chew</h1> */}
            </div>

            <nav className="flex flex-row gap-5 items-center text-md md:text-lg">
                {links.map((page, i) => (
                    <div key={page.title} className="inline-flex flex-row gap-5 items-center">
                        <motion.a
                            initial={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            className="cursor-pointer"
                            href={page.href}
                        >
                            { page.title }
                        </motion.a>
                        {i !== links.length - 1 && <div className="border-l border"></div>}
                    </div>
                ))}
            </nav>

            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='hidden sm:block duration-200'>
                {theme === "dark" ? <BsFillSunFill size={23} /> : <BsFillMoonFill size={23} />}
            </button>
        </div>
    )
}