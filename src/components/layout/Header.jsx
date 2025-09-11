"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import { services } from "@/data/services";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nav = [
  { label: "ANASAYFA", href: "/" },
  {
    label: "KURUMSAL",
    items: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Misyon & Vizyon", href: "/misyon-vizyon" },
    ],
  },
  {
    label: "HİZMETLER",
    items: [
      { label: "Tüm Hizmetler", href: "/hizmetler" },
      ...services.map((s) => ({
        label: s.title,
        href: `/hizmetler/${s.slug}`,
      })),
    ],
  },
  { label: "GALERİ", href: "/galeri" },
  { label: "FRANCHISE", href: "/franchise" },
  { label: "İLETİŞİM", href: "/iletisim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseText = scrolled ? "text-neutral-900" : "text-white";
  const linkHover = scrolled ? "hover:text-neutral-600" : "hover:text-white/80";
  const headerBg = scrolled
    ? "bg-white/95 backdrop-blur shadow-sm border-b border-neutral-200"
    : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 py-2 ${headerBg} transition-colors duration-300`}>
      <div className="mx-auto max-w-[1200px] px-4 lg:px-6 h-16 lg:h-20 flex items-center justify-between relative">
        {/* Sol küçük logo (her zaman) + Masaüstü hero+Beauty */}
        <Link href="/" className="flex items-center gap-3 z-20">
          <Image
            src="/images/logos/logo.png"
            width={56}
            height={56}
            alt="Logo"
            className="w-14 h-14"
            priority
          />

          {/* hero.png + Beauty → sadece MASAÜSTÜNDE */}
          <div className="leading-tight flex-col items-center hidden lg:flex">
            <Image
              src="/images/logos/hero.png"
              alt="Gamze Yavuz Logo"
              width={200}
              height={200}
              className="w-30 md:w-40 object-contain"
              priority
            />
            <div
              className={`${cinzel.className} opacity-90 font-semibold text-sm md:text-base mt-2 text-center
                bg-gradient-to-r from-[#9d7f58] to-[#e9e3ae] bg-clip-text text-transparent`}
            >
              Beauty
            </div>
          </div>
        </Link>

        {/* ORTADAKİ hero.png + Beauty → sadece MOBİLDE */}
        <div className="absolute inset-0 lg:hidden z-10 pointer-events-none flex items-center justify-center">
          <Link href="/" className="pointer-events-auto flex flex-col items-center">
            <Image
              src="/images/logos/hero.png"
              alt="Gamze Yavuz Logo"
              width={160}
              height={160}
              className="h-3 w-auto object-contain"
              priority
            />
            <div
              className={`${cinzel.className} opacity-90 font-semibold text-xs mt-1 text-center
                bg-gradient-to-r from-[#9d7f58] to-[#e9e3ae] bg-clip-text text-transparent`}
            >
              Beauty
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item, idx) =>
            item.items ? (
              <div key={idx} className="relative group">
                <button
                  className={`text-md font-sm ${baseText} ${linkHover} transition-colors inline-flex items-center gap-1`}
                  aria-haspopup="menu"
                  aria-expanded="false"
                >
                  {item.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" className={`${baseText} opacity-80`} aria-hidden>
                    <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>

                {/* Dropdown (hover) */}
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 top-full mt-3 min-w-48 rounded-xl border border-neutral-200 bg-white shadow-lg">
                  <ul className="py-2">
                    {item.items.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-neutral-800 hover:bg-neutral-50"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className={`text-md font-medium ${baseText} ${linkHover} transition-colors`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobil menü butonu */}
        <button
          className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md ${baseText} z-20`}
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Menüyü aç/kapat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobil Menü */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 py-2">
            <ul className="divide-y divide-neutral-200">
              {nav.map((item, idx) =>
                item.items ? (
                  <li key={idx} className="py-2">
                    <button
                      className="w-full flex items-center justify-between py-2 text-neutral-900 font-medium"
                      onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                      aria-expanded={openDropdown === idx}
                    >
                      {item.label}
                      <svg width="18" height="18" viewBox="0 0 24 24" className="text-neutral-700">
                        <path
                          d={openDropdown === idx ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                    {openDropdown === idx && (
                      <ul className="mt-1 mb-2 rounded-lg bg-neutral-50">
                        {item.items.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={idx} className="py-2">
                    <Link
                      href={item.href}
                      className="block py-2 text-neutral-900 font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}