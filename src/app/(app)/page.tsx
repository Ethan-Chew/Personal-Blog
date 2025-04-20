import BlogPostGrid from "../components/BlogPostGrid";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="pt-16 md:pt-28">
      <Header />

      <div className="px-10 md:px-24 py-5 flex flex-col gap-10">
        <div className="text-lg py-8">
            <h2 className="text-2xl font-bold mb-2">A Short Introduction...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="flex flex-col gap-10">
          <BlogPostGrid limit={3} />
        </div>
      </div>
    </main>
  );
}
