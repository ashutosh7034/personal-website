import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashutoshpandey34.netlify.app"),
  title: "Ashutosh Pandey — Software Developer",
  description:
    "Software Developer building full-stack applications, applied AI pipelines, and data systems. MCA @ TCET (9.14 CGPA) and BS Data Science @ IIT Madras.",
  keywords: [
    "Ashutosh Pandey",
    "Software Developer",
    "Full-Stack Developer",
    "Applied AI",
    "RAG",
    "LangChain",
    "FAISS",
    "Python",
    "Next.js",
    "FastAPI",
    "AI in Education",
    "Personalized Learning",
    "MULTICON Best Paper",
    "Mumbai",
    "TCET",
    "IIT Madras",
  ],
  authors: [{ name: "Ashutosh Pandey", url: "https://ashutoshpandey34.netlify.app" }],
  creator: "Ashutosh Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashutoshpandey34.netlify.app",
    title: "Ashutosh Pandey — Software Developer",
    description:
      "I build software that turns ideas into useful systems. Full-Stack, Applied AI, and Data.",
    siteName: "Ashutosh Pandey Portfolio",
    images: [
      {
        url: "/images/ashutosh-portrait.png",
        width: 1102,
        height: 1427,
        alt: "Ashutosh Pandey — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Pandey — Software Developer",
    description:
      "Software Developer building full-stack applications, applied AI pipelines, and data systems.",
    images: ["/images/ashutosh-portrait.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FAF8F5" />
      </head>
      <body
        className={`${jakarta.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-bg-paper text-brandText-primary selection:bg-accent/20 selection:text-brandText-primary min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
