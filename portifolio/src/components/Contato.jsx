"use client";

import { useState } from "react";

export default function Contato() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        mensagem: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensagem enviada! (simulação)"); // Aqui você pode integrar uma API real depois
        setForm({ nome: "", email: "", mensagem: "" });
    };

    return (
        <main className="min-h-screen bg-black text-white font-sans flex flex-col items-center px-6 py-12">
            
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
                Entre em Contato
            </h1>

            <p className="mb-8 text-gray-300 text-center max-w-xl">
                Fique à vontade para enviar uma mensagem diretamente pelo formulário abaixo.
            </p>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg flex flex-col gap-4 bg-gray-900/80 p-6 rounded-xl shadow-md"
            >
                <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={handleChange}
                    className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    value={form.email}
                    onChange={handleChange}
                    className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                />
                <textarea
                    name="mensagem"
                    placeholder="Sua mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={5}
                    className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                />
                <button
                    type="submit"
                    className="bg-white text-black font-semibold py-3 rounded hover:opacity-80 transition"
                >
                    Enviar Mensagem
                </button>
            </form>

            <div className="mt-10 flex flex-col md:flex-row items-center gap-6 text-gray-300">
                <p>Email: seuemail@example.com</p>
                <p>GitHub: github.com/seuusuario</p>
                <p>LinkedIn: linkedin.com/in/seuusuario</p>
            </div>
        </main>
    );
}
