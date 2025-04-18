import Image from "next/image";

export default function Header() {
    return (
        <header className="text-black dark:text-white border-b-2 border-neutral-700 p-12 px-24">
            <div className="inline-flex gap-5">
                <Image alt="icon" src="/icon-dark.svg" height={0} width={0} className="h-18 w-18" />
                <h1 className="text-7xl font-bold italic mb-3">Insights</h1>
            </div>
            <p className="text-xl">A Blog by <a href="https://ethanchew.com" className="text-accent dark:text-dark-accent hover:font-bold duration-150">Ethan Chew</a>, highlighting my day-to-day experiences, from general topics to technology and aviation.</p>
        </header>
    )
}