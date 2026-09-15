import { Geist, Geist_Mono,Roboto,Archivo,Norican } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const engagement = Norican({
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap", // optional but recommended
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});

const GtaScript = `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NNNXV5XK65');`


const GtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K32G2W58');`


export const metadata = {
  title: "Seven Entertainment Auckland | Raagam – Naresh Iyer Live",
  description: "Experience Raagam 2026 – a Valentine’s Day live concert by Naresh Iyer in Auckland. Book tickets now. Presented by Seven Entertainment NZ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script>
          {GtmScript}
        </Script>
      </head>

          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NNNXV5XK65" />
          <Script>
            {GtaScript}
          </Script>

      <body className={`${archivo.variable} antialiased`}>
        
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K32G2W58" height="0" width="0" style={{display:"none",visibility:"hidden"}} />
          </noscript>

          <Navbar/>
        {children}
      </body>
    </html>
  );
}
