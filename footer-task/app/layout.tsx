import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Daramis Footer",
    description: "Test task frontend developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="cs" className="font-arial">
        <head>
            {/* connecting fonts from the task */}
            <link rel="stylesheet" href="https://use.typekit.net/gsb0toh.css" />
        </head>
        {/* setting cream background and black text for the whole page */}
        <body className="antialiased bg-daramis-creamy text-daramis-darkest">D
        {children}
        </body>
        </html>
    );
}