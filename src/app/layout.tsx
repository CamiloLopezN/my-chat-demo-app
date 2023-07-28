import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ margin: 0, backgroundColor: "#f4f4f4" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
