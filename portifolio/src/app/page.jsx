import Contato from "@/components/Contato/Contato";
import Habilidades from "@/components/Habilidades/Habilidades";
import Home from "@/components/Home/Home";
import Projetos from "@/components/Projetos/Projetos";
import SobreMim from "@/components/SobreMim/SobreMim";
import Head from "next/head";


export default function Page() {
  return (
    <>

      <main>
        <Home />
        <SobreMim />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      
    </>
  );
}
