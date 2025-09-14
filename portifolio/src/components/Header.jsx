"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);

        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="bg-black/70">

            <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-sans">
                    Kayque Miqueias
                </h1>


                <ul className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200 font-sans">
                    <li>
                        <Link href="#apresentacao" className="hover:opacity-70">
                            Apresentação
                        </Link>
                    </li>

                    <li>
                        <Link href="#projetos" className="hover:opacity-70">
                            Projetos
                        </Link>
                    </li>

                    <li>
                        <Link href="#contato" className="hover:opacity-70">
                            Contato
                        </Link>
                    </li>
                </ul>


            </nav>

        </header>
    );
}
