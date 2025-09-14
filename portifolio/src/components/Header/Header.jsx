"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-sans">
          Kayque Miqueias
        </h1>

        {/* Links */}
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200 font-sans">
          <li>
            <Link
              href="/apresentacao"
              className="hover:opacity-70 transition-opacity"
            >
              Apresentação
            </Link>
          </li>
          <li>
            <Link
              href="/projetos"
              className="hover:opacity-70 transition-opacity"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className="hover:opacity-70 transition-opacity"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
