"use client";
import { useEffect, useRef } from "react";
import { Cinzel } from "next/font/google";
import Image from "next/image";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","500","600","700"] });

export default function HeroVideo() {
  const src = "/videos/hero.mp4";
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    v.addEventListener("loadeddata", tryPlay);
    tryPlay();
    return () => v.removeEventListener("loadeddata", tryPlay);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* İçerik */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        {/* Logo */}
        <Image
          src="/images/logos/logo.png"
          alt="Gamze Yavuz Beauty Logo"
          width={180}
          height={180}
          className="w-32 h-32 md:w-44 md:h-44"
          priority
        />
        {/* Başlık */}
        <h1
          className={`${cinzel.className} mt-6 text-3xl md:text-5xl font-bold text-white drop-shadow`}
        >
          Gamze Yavuz Beauty
        </h1>
        {/* Franchise butonu */}
        <a
          href="/franchise"
          className="mt-12 inline-flex items-center rounded-xl bg-amber-400 px-6 py-3 text-base font-semibold text-neutral-900 shadow-lg hover:bg-white transition"
        >
          Franchise için tıklayın
        </a>

        {/* Sol kenar rezervasyon (yalnızca md+) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6">
          <span
            className="tracking-[0.4em] text-white/90 text-sm md:text-base font-light"
            style={{ writingMode: "vertical-rl" }}
          >
            REZERVASYON
          </span>
          <span
            className="font-semibold text-lg md:text-xl bg-gradient-to-b from-amber-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm"
            style={{ writingMode: "vertical-rl" }}
          >
            0530 000 00 00
          </span>
          <a
            href="tel:05300000000"
            className="mt-4 w-14 h-14 flex items-center justify-center rounded-full border border-white/60 text-white/90 hover:bg-white/10 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 6.18 2 2 0 0 1 4.11 4h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.18l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.18-.45c.74.35 1.53.6 2.34.72a2 2 0 0 1 1.72 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Alt yön oku */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/80 animate-bounce">
  <button
    onClick={() => {
      const section = document.querySelector("#hakkimizda");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
    aria-label="Aşağı kaydır"
  >
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </button>
</div>
    </section>
  );
}