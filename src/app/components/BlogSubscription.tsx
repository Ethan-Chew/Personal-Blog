"use client"

export default function BlogSubscription() {
    return (
        <div className="flex flex-row gap-4 p-2 rounded-lg border border-border dark:border-dark-border">
            <input className="flex-grow" />
            <button className="bg-accent p-2 px-5 rounded-lg cursor-pointer">Subscribe</button>
        </div>
    )
}