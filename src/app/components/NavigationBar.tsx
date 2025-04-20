'use client'
import Image from "next/image";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function NavigationBar() {
    const { theme, setTheme } = useTheme()
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const linkVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-background dark:bg-dark-background">
            <div className="flex flex-row place-content-between py-8 px-10 md:px-24 text-black dark:text-white">
                <div className="flex flex-row gap-5">
                    <a href="/">
                        <Image src={theme === "light" ? "/ECLogoLight.svg" : "/ECLogoDark.svg"} alt="Logo" width={30} height={30} />
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-row gap-5 items-center text-md md:text-lg">
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

                <button className="text-3xl md:hidden" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                    { mobileNavOpen ? <RxCross2 /> : <RxHamburgerMenu /> }
                </button>

                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='hidden md:block duration-200'>
                    {theme === "dark" ? <BsFillSunFill size={23} /> : <BsFillMoonFill size={23} />}
                </button>
            </div>
            
            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileNavOpen && (
                    <motion.nav
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        className="md:hidden bg-background dark:bg-dark-background w-full flex flex-col gap-4 px-10 mb-8"
                    >
                        {links.map((page) => (
                            <motion.a
                                key={page.title}
                                href={page.href}
                                variants={linkVariants}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                }}
                                className="cursor-pointer"
                            >
                                {page.title}
                            </motion.a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    )
}