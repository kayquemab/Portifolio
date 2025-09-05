import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Kayque | Portifólio",

};

export default function RootLayout({ children }) {
  return (  
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
