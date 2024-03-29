import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import ClientProvider from "./components/Hoc/ClientProvider";
import Footer from "./components/Footer";

const font = Plus_Jakarta_Sans({ 
  weight:['200', '300', '400','500', '600', '700', '800'],
  subsets: ['latin'],
   });

export const metadata: Metadata = {
  title: "GoJob | Make your career with us",
  description: "Make your career with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
    <html lang="en">
      <body className={font.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
    </ClientProvider>
  );
}
