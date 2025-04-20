"use client"
import Image from "next/image";
import BlogSubscription from "./BlogSubscription";
import { useTheme } from "next-themes";

export default function Header() {
    const { theme } = useTheme()

    return (
        <header className="text-black dark:text-white border-b-2 border-border dark:border-dark-border px-24">
            <div className="py-12">
                <div className="inline-flex gap-5">
                    <Image alt="icon" src={`${theme === "light" ? "/icon-light.svg" : "/icon-dark.svg"}`} height={0} width={0} className="h-18 w-18" />
                    <h1 className="text-7xl font-bold italic mb-3">Insights</h1>
                </div>
                <p className="text-xl">A Blog by <a href="https://ethanchew.com" className="text-accent dark:text-dark-accent hover:font-bold duration-150">Ethan Chew</a>, highlighting my day-to-day experiences, from general topics to technology and aviation.</p>
            </div>

            <div className="pb-8">
                <h2 className="text-2xl font-bold">Stay Updated</h2>
                <p className="text-secondary dark:text-dark-secondary mb-2">Subscribe to my blog to get notified whenever I post!</p>
                <BlogSubscription />
            </div>
        </header>
    )
}