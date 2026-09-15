import { Poppins, Fraunces } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import { EVENT, TICKET_URL } from "@/lib/config";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const GtaScript = `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NNNXV5XK65');`;

const GtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K32G2W58');`;

const pageTitle = "BHAV, Bharatha’s 5th Vedha | Padma Bhushan Shobana | Auckland";
const pageDescription =
  "Padma Bhushan Shobana in BHAV, Bharatha’s 5th Vedha. Saturday, 17 October 2026, 6:00 PM, Bruce Mason Centre, Takapuna, Auckland.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    siteName: "BHAV by SHOBANA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT.name,
  description:
    "Experience an extraordinary celebration of Indian classical arts with Shobana in BHAV, Bharatha’s 5th Vedha.",
  startDate: EVENT.startDateISO,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Bruce Mason Centre",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Takapuna, Auckland",
      addressCountry: "NZ",
    },
  },
  performer: [
    { "@type": "Person", name: "Shobana" },
    { "@type": "Person", name: "Abhishek Raghuram" },
  ],
  organizer: { "@type": "Organization", name: "Auckland Tamil Association" },
  sponsor: { "@type": "Organization", name: "Kripa Financial Solutions" },
  ...(TICKET_URL && TICKET_URL !== "#"
    ? { offers: { "@type": "Offer", url: TICKET_URL } }
    : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NZ" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/amerigo-bt/AmerigoBT-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <Script id="gtm" strategy="afterInteractive">
          {GtmScript}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NNNXV5XK65"
        />
        <Script id="ga" strategy="afterInteractive">
          {GtaScript}
        </Script>
        <Script
          id="event-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${fraunces.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K32G2W58"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
