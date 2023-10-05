import { Footer } from "@/components/footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header/Header";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import AuthProvider from "@/components/authProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieHub Next",
  description: "This is a moviehub next page by seo moldes",
  icons: {
    icon: "/assets/img/pngwing.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <AuthProvider>
            <Header />

            {children}

            <Footer />
          </AuthProvider>
        </UserProvider>
      </body>
    </html>
  );
}
