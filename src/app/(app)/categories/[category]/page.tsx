export default async function PostCategory({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    return (
        <div>
            <header className="border-b-2 border-neutral-700 py-12 px-24 min-h-[35vh] flex flex-row items-end">
                <div>
                    <p className="font-bold capitalize text-secondary dark:text-dark-secondary mb-3">CATEGORY</p>
                    <h1 className="text-5xl font-bold mb-2">A Great Title</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </header>
        </div>
    )
}