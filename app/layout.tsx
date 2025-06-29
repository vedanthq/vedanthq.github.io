import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vedant Singh Rajput - Full Stack Developer Portfolio",
  description:
    "Portfolio of Vedant Singh Rajput, Full Stack Developer specializing in MERN Stack, DevOps, and Cloud Technologies",
  keywords: "Full Stack Developer, MERN Stack, React, Node.js, DevOps, AWS, JavaScript",
  authors: [{ name: "Vedant Singh Rajput" }],
  openGraph: {
    title: "Vedant Singh Rajput - Full Stack Developer Portfolio",
    description: "Portfolio of Vedant Singh Rajput, Full Stack Developer",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono`}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
