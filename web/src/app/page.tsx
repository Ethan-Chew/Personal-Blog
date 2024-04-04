'use client'
import Navbar from "@/components/navbar";
import { Main } from "next/document";
import { useState, useEffect } from "react";

export default function Home() {
  const [ userEmail, setUserEmail ] = useState("")

  return (
    <main className="px-6 text-black h-screen">
      <header className="h-[40%] md:h-[35%] flex flex-col justify-center gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-5xl">idkname</h1>
          <p className="md:max-w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe aliquam deserunt laudantium natus, inventore dolorum illum impedit laborum magnam!</p>
        </div>
        <div className="border-2 border-blue-200 pl-3 pr-1 py-1 rounded-lg file:md:w-[75%] flex flex-row items-center">
          <input
            className="outline-none w-[70%]"
            placeholder="Your email address"
            onChange={e => setUserEmail(e.target.value)}
          ></input>
          <button className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
            Subscribe
          </button>
        </div>
        <hr />
      </header>


    </main>
  );
}
