import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "GESP India | U.S. Boarding Schools & Student-Athlete Guidance",
  description:
    "Personal guidance for Indian families exploring U.S. boarding schools, academics, athletics and student-athlete opportunities with GESP.",
  keywords: [
    "GESP India",
    "US Boarding Schools India",
    "Student Athlete USA India",
    "Prep School Admissions India",
    "High School in America Indian students",
    "NEPSAC Boarding Schools"
  ],
  openGraph: {
    title: "GESP India | U.S. Boarding Schools & Student-Athlete Guidance",
    description: "Personal guidance for Indian families exploring U.S. boarding schools, academics, athletics and student-athlete opportunities with GESP.",
    url: "https://gespeducation.com/india",
    siteName: "GESP India",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} font-sans scroll-smooth`}
    >
      <body className="bg-[#FAFAFC] text-[#111111] font-sans antialiased selection:bg-[#0D2153] selection:text-[#FAB900] min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
