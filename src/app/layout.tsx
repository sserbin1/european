import type { Metadata } from "next"
import { Poppins, Open_Sans } from "next/font/google"
import { siteConfig } from "../../site.config"
import { generateWebsiteJsonLd, generateOrganizationJsonLd } from "@/lib/seo"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-opensans",
  display: "swap",
})

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  icons: { icon: siteConfig.favicon || "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale || "uk_UA",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    ...(siteConfig.ogImage && {
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    }),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    ...(siteConfig.ogImage && { images: [siteConfig.ogImage] }),
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <script
          defer
          src="http://46.224.111.10:3100/script.js"
          data-website-id="7e971ae5-c36e-471c-89e8-c3485b331cdc"
        />
      </head>
      <body className={`${poppins.variable} ${openSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([generateWebsiteJsonLd(), generateOrganizationJsonLd()]),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
