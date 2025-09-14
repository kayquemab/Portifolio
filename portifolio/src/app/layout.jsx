import Header from "@/components/Header/Header";
import "./globals.css";
import SectionWrapper from "@/components/common/SectionWrapper";

export const metadata = {
  title: "Kayque | Portifólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <body>
        <Header />
        <SectionWrapper>
        {children}
        </SectionWrapper>
      </body>

    </html>
  );
}
