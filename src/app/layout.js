import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        <Header/>
        {children}
        {/* Sosyal Medya Butonları (Global Component olabilir) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/905300000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.82 11.82 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.97L0 24l6.27-1.64A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.21-3.48-8.52zM12 22c-1.9 0-3.75-.5-5.37-1.44l-.38-.22-3.72.97.99-3.62-.24-.38A9.98 9.98 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.03c-.28-.14-1.64-.8-1.9-.89-.26-.1-.45-.14-.64.14s-.73.89-.9 1.07c-.17.17-.34.19-.62.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.67-1.57-1.95-.17-.28-.02-.43.12-.57.12-.12.28-.31.42-.46.14-.15.19-.25.28-.42.1-.17.05-.32-.02-.46-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.55c-.17 0-.46.07-.7.32-.24.25-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.73.14.17 1.85 2.82 4.48 3.96.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.64-.67 1.87-1.31.23-.64.23-1.18.16-1.31-.07-.13-.26-.2-.55-.34z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/gamzeyavuzbeautyvann/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg hover:opacity-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0-2h10c3.87 0 7 3.13 7 7v10c0 3.87-3.13 7-7 7H7c-3.87 0-7-3.13-7-7V7C0 3.13 3.13 0 7 0zm12 6a1 1 0 11-2 0 1 1 0 012 0zm-7 2a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14z" />
          </svg>
        </a>
      </div>
      <Footer/>
      </body>
    </html>
  );
}