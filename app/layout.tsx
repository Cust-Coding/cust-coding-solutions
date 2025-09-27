import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from 'next/font/google'
import "./globals.css";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-orbitron'
})

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sharetech'
})
export const metadata = {
  title: "Cust Coding Solutions | Inovação e Tecnologia",
  description:
    "Na Cust Coding Solutions, criamos soluções digitais, softwares sob medida e soluções inovadoras para impulsionar negócios com segurança e eficiência.",
  keywords: [
    "Tecnologia",
    "Inovação",
    "Software",
    "Desenvolvimento Web",
    "Inteligência Artificial",
    "Marketing Digital",
    "Segurança da Informação",
    "Soluções Digitais",
    "Moçambique"
  ],
  authors: [{ name: "Cust Coding Solutions" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  

  icons: {
    icon: "/logoccs.svg",
    //  shortcut: "/favicon-32x32.png",
    // apple: "/apple-touch-icon.png",
   
  },

  openGraph: {
    title: "Cust Coding Solutions",
    description:
      "Soluções digitais inovadoras, desenvolvimento de softwares, segurança e marketing digital para impulsionar negócios.",
    url: "https://cust-coding-solutions.vercel.app/",
    siteName: "Cust Coding Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cust Coding Solutions - Soluções digitais inovadoras",
      },
    ],
    locale: "pt_MZ",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Cust Coding Solutions",
    description:
      "Transformamos negócios com soluções digitais, softwares sob medida e marketing digital inovador.",
    images: ["/og-image.png"],
    creator: "@custcodingsolutions",
  },

  metadataBase: new URL("https://cust-coding-solutions.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${orbitron.variable} ${shareTechMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
