import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Giphy App",
  description: "You can browse collection of Giphy's",
  keywords: "Giphy, collection, Stickers, Trending",
  authors: { name: "Ahsan Azeem", url: "github.com/ahsanreal4" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background flex flex-col items-center pt-4 pb-1 font-sans">
        <main className="flex flex-col justify-center items-center w-full">
          <div className="w-max">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
