import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FBacchus Finance — Finance made friendly",
  description: "Beginner-friendly investing data for stocks & ETFs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
