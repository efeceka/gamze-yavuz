"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","500","600","700"] });

// --- Demo veri (kendi dosyalarınla değiştir) ---
const rawItems = [
  // Görseller
  { id: "img-01", type: "image", src: "/images/galeri/cilt.jpeg", thumb: "/images/galeri/cilt.jpeg", w: 1600, h: 2000, title: "Uygulama Öncesi-Sonrası" },
  { id: "img-02", type: "image", src: "/images/galeri/cilt2.jpeg", thumb: "/images/galeri/cilt2.jpeg", w: 1600, h: 1200, title: "Cilt Bakımı" },
  { id: "img-03", type: "image", src: "/images/galeri/kolojen.jpeg", thumb: "/images/galeri/kolojen.jpeg", w: 1600, h: 1200, title: "Kolojen Bakımı" },

  // Videolar (kısa, poster ile)
  { id: "vid-01", type: "video", src: "/videos/hakkimizda.mp4", poster: "/images/galeri/gamzeyvz.jpg", title: "Salonumuz" },
  { id: "vid-02", type: "video", src: "/videos/yosun.mp4", poster: "/images/galeri/yosun.png", title: "Yosun Peeling" },
  { id: "vid-03", type: "video", src: "/videos/kirpik.mp4", poster: "/images/galeri/kirpik.png", title: "Kirpik İşlemi" },
  { id: "vid-04", type: "video", src: "/videos/g-shape.mp4", poster: "/images/galeri/g-shape.jpg", title: "Zayıflama" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all"); // all | images | videos
  const [openId, setOpenId] = useState(null);

  const items = useMemo(() => {
    if (filter === "images") return rawItems.filter(i => i.type === "image");
    if (filter === "videos") return rawItems.filter(i => i.type === "video");
    return rawItems;
  }, [filter]);

  const currentIndex = useMemo(
    () => (openId ? items.findIndex(i => i.id === openId) : -1),
    [openId, items]
  );

  const close = useCallback(() => setOpenId(null), []);
  const prev = useCallback(() => {
    if (currentIndex < 0) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    setOpenId(items[nextIdx].id);
  }, [currentIndex, items]);

  const next = useCallback(() => {
    if (currentIndex < 0) return;
    const nextIdx = (currentIndex + 1) % items.length;
    setOpenId(items[nextIdx].id);
  }, [currentIndex, items]);

  // Klavye: Esc/←/→
  useEffect(() => {
    const onKey = (e) => {
      if (!openId) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId, close, prev, next]);

  return (
    <main className="bg-white">
      {/* HERO (yarım) */}
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/anasayfa/hizmetlerimiz/gamzeyvz.jpg"
          alt="Galeri"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-end px-6 pb-10">
          <div>
            <span
              className={`block text-sm md:text-base uppercase tracking-[0.2em] text-amber-400 font-light ${cinzel.className}`}
            >
              Gamze Yavuz Beauty
            </span>
            <h1 className={`mt-2 text-white text-3xl md:text-5xl font-bold drop-shadow ${cinzel.className}`}>
              Galeri
            </h1>
          </div>
        </div>
      </section>

      {/* Filtreler */}
      <section className="mx-auto max-w-[1200px] px-6 pt-10">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <FilterButton active={filter==="all"} onClick={()=>setFilter("all")}>Hepsi</FilterButton>
          <FilterButton active={filter==="images"} onClick={()=>setFilter("images")}>Görseller</FilterButton>
          <FilterButton active={filter==="videos"} onClick={()=>setFilter("videos")}>Videolar</FilterButton>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 md:py-14">
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setOpenId(item.id)}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label={`${item.type === "image" ? "Görsel" : "Video"}: ${item.title || ""}`}
            >
              {/* Logo rozeti */}
              <div className="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow">
                  <Image src="/images/logos/logo.png" alt="" width={20} height={20} className="object-contain" />
                </span>
                {item.type === "video" && (
                  <span className="rounded-full bg-black/70 text-white text-xs px-2 py-1">Video</span>
                )}
              </div>

              {/* Thumb / Video poster */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {item.type === "image" ? (
                  <Image
                    src={item.thumb || item.src}
                    alt={item.title || "Galeri görseli"}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    priority={false}
                  />
                ) : (
                  <Image
                    src={item.poster || "/gallery/posters/fallback.jpg"}
                    alt={item.title || "Galeri videosu"}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    priority={false}
                  />
                )}

                {/* Alt gradient + başlık */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />
                {(item.title || item.type === "video") && (
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="text-white text-base md:text-lg font-medium drop-shadow">
                      {item.title || (item.type === "video" ? "Video" : "Görsel")}
                    </div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox / Modal */}
      {openId && currentIndex >= 0 && (
        <Modal onClose={close} onPrev={prev} onNext={next}>
          <LightboxContent item={items[currentIndex]} />
        </Modal>
      )}
    </main>
  );
}

/* —— küçük yardımcı bileşenler —— */

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-neutral-900 text-white border-neutral-900"
          : "bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-50"
      }`}
    >
      {children}
    </button>
  );
}

function Modal({ children, onClose, onPrev, onNext }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* İç kutu */}
      <div
        className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden bg-black/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* İçerik */}
        <div className="relative">
          {children}
        </div>

        {/* Kontroller */}
        <button
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
          aria-label="Kapat"
          onClick={onClose}
        >
          ✕
        </button>

        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
          aria-label="Önceki"
          onClick={onPrev}
        >
          ‹
        </button>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
          aria-label="Sonraki"
          onClick={onNext}
        >
          ›
        </button>
      </div>
    </div>
  );
}

function LightboxContent({ item }) {
  if (item.type === "video") {
    return (
      <video
        className="max-h-[90vh] w-full object-contain bg-black"
        src={item.src}
        poster={item.poster}
        controls
        playsInline
        autoPlay
        muted
        loop
      />
    );
  }
  return (
    <div className="relative w-full" style={{ background: "black" }}>
      <Image
        src={item.src}
        alt={item.title || "Galeri görseli"}
        width={item.w || 1600}
        height={item.h || 1200}
        className="mx-auto h-auto max-h-[90vh] w-auto object-contain"
        priority
      />
    </div>
  );
}