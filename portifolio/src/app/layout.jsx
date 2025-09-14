import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kayque | Portifólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Header/>
      <body>
        {children}
      </body>
      <Footer/>    
    </html>
  );
}
