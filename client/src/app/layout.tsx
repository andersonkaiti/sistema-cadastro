import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Trabalho Mantovani",
  description: "Site criado para o trabalho do professor Mantovani",
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
