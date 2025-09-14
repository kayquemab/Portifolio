"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black/70 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-center items-center gap-6">

                

                <ul className="flex items-center justify-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200 font-sans">
                   
                    <li>
                        <Link href="mailto:seuemail@example.com" className="flex items-center gap-1 hover:opacity-70">
                           
                            Email
                        </Link>
                    </li>

                    <li>
                        <Link href="https://github.com/seuusuario" target="_blank" className="flex items-center gap-1 hover:opacity-70">
                            
                            GitHub
                        </Link>
                    </li>

                    <li>
                        <Link href="https://linkedin.com/in/seuusuario" target="_blank" className="flex items-center gap-1 hover:opacity-70">
                            
                            LinkedIn
                        </Link>
                    </li>

                </ul>
            </div>
        </footer>
    );
}
