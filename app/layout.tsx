

import { ChakraProvider } from '@chakra-ui/react'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarWithHeader from '@/components/Sidebar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Godot 4 - Web-Tutorial",
  description: "Web-tutorial Godot 4 by @app1e.jews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <SidebarWithHeader/>
        </ChakraProvider>
        {children}</body>
    </html>
  );
}
