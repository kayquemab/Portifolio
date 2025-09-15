import "./globals.css";
import SectionWrapper from "@/components/common/SectionWrapper";

export const metadata = {
  title: "Kayque | Portfólio",
  icons: {
    icon: "/icon.svg"
  },
};

export default function RootLayout({ children }) {
  return (

    <html lang="pt-br" suppressHydrationWarning>
      <body>

        <SectionWrapper>
          {children}
        </SectionWrapper>

      </body>

    </html>

  );
}