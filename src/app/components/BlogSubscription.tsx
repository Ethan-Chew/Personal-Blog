"use client"

export default function BlogSubscription() {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-2 rounded-lg border border-border dark:border-dark-border">
            <input className="flex-grow" type="text" placeholder="example@example.com" />
            <button className="bg-accent p-2 px-5 rounded-lg cursor-pointer flex-grow md:flex-none">Subscribe</button>
        </div>
    )
}