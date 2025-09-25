import "./globals.css";
import SectionWrapper from "@/components/common/SectionWrapper";

export const metadata = {
  title: "Kayque | Portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>

      <head>
        <link rel="icon" href="/icondark.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/iconlight.svg" media="(prefers-color-scheme: dark)" />
      </head>
      
      <body>
        <SectionWrapper>
          {children}
        </SectionWrapper>
      </body>
    </html>
  );
}
