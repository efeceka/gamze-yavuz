"use client";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import { services } from "@/data/services";
import { useState } from "react";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","500","600","700"] });

export default function ContactPage() {
 const [sending, setSending] = useState(false);
const WHATSAPP_NUMBER = "905011438080";

async function handleSubmit(e) {
  e.preventDefault();
  setSending(true);

  const formData = new FormData(e.currentTarget);
  const firstName = formData.get("firstName");
  const lastName  = formData.get("lastName");
  const phone     = formData.get("phone");
  const service   = formData.get("service");
  const message   = formData.get("message");

  // WhatsApp mesaj içeriği
  const text = `📩 İletişim Formu
👤 İsim: ${firstName} ${lastName}
📞 Telefon: ${phone}
💆‍♀️ Hizmet: ${service || "-"}
📝 Mesaj: ${message || "-"}`;

  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(wa, "_blank");

  setSending(false);
  e.currentTarget.reset();
}

  return (
    <main className="bg-white">
      {/* HERO (yarım) */}
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/anasayfa/hizmetlerimiz/gamzeyavuz.png" // değiştirilebilir
          alt="İletişim"
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
              İletişim
            </h1>
          </div>
        </div>
      </section>

      {/* İÇERİK: Sol bilgi / Sağ form */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
          {/* Sol: iletişim bilgileri */}
          <div>
      <span className="text-sm uppercase tracking-widest text-amber-600 font-light">
        Bilgiler
      </span>
      <h2
        className={`mt-2 text-3xl md:text-4xl font-semibold text-neutral-900 ${cinzel.className}`}
      >
        Gamze Yavuz Beauty İletişim
      </h2>

      <div className="mt-6 space-y-6 text-neutral-700">
        {/* Telefon */}
        <div className="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-amber-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 6.18 2 2 0 0 1 4.11 4h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.18l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.18-.45c.74.35 1.53.6 2.34.72a2 2 0 0 1 1.72 2z" />
          </svg>
          <div>
            <div className="text-neutral-500 text-sm">Telefon</div>
            <a
              href="tel:05300000000"
              className="text-lg font-medium hover:text-neutral-900 transition"
            >
              0530 000 00 00
            </a>
          </div>
        </div>

        {/* Telefon */}
        <div className="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-amber-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 6.18 2 2 0 0 1 4.11 4h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.18l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.18-.45c.74.35 1.53.6 2.34.72a2 2 0 0 1 1.72 2z" />
          </svg>
          <div>
            <div className="text-neutral-500 text-sm">Telefon</div>
            <a
              href="tel:05300000000"
              className="text-lg font-medium hover:text-neutral-900 transition"
            >
              0530 000 00 00
            </a>
          </div>
        </div>

        {/* Telefon */}
        <div className="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-amber-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 6.18 2 2 0 0 1 4.11 4h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.18l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.18-.45c.74.35 1.53.6 2.34.72a2 2 0 0 1 1.72 2z" />
          </svg>
          <div>
            <div className="text-neutral-500 text-sm">Telefon</div>
            <a
              href="tel:05300000000"
              className="text-lg font-medium hover:text-neutral-900 transition"
            >
              0530 000 00 00
            </a>
          </div>
        </div>
        

        {/* Adres */}
        <div className="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-amber-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21c-4.97-5.16-8-9-8-12a8 8 0 1 1 16 0c0 3-3.03 6.84-8 12z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <div>
            <div className="text-neutral-500 text-sm">Adres</div>
            <p className="text-lg font-medium">
              Alipaşa, Suvaroğlu Cd 44/A, Van, Turkey 65100
            </p>
          </div>
        </div>

        {/* Sosyal medya */}
        <div className="pt-2 flex items-center gap-3">
          <a
            href="https://wa.me/905011438080"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-emerald-500 px-4 py-2 text-white font-medium hover:bg-emerald-600 transition"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/gamzeyavuzbeautyvann/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 px-4 py-2 text-white font-medium hover:opacity-90 transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>

          {/* Sağ: form */}
          <div>
            <span className="text-sm uppercase tracking-widest text-amber-600 font-light">
              Randevu / Mesaj
            </span>
            <h3 className={`mt-2 text-2xl md:text-3xl font-semibold text-neutral-900 ${cinzel.className}`}>
              İletişim Formu
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm text-neutral-600 mb-1">İsim</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Adınız"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600 mb-1">Soyisim</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Soyadınız"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm text-neutral-600 mb-1">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    pattern="^[0-9+\s()-]{6,}$"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="05xx xxx xx xx"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-600 mb-1">Hizmet</label>
                  <select
                    name="service"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Seçiniz</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-neutral-600 mb-1">Mesaj</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Mesajınız…"
                />
              </div>

              <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center rounded-xl bg-neutral-900 px-6 py-3 text-white font-semibold hover:bg-neutral-800 transition disabled:opacity-60"
            >
            {sending ? "Gönderiliyor…" : "WhatsApp’tan Gönder"}
            </button>
            </form>
          </div>
        </div>
      </section>

      {/* GOOGLE HARİTA */}
      <section className="w-full">
        <div className="mx-auto max-w-[1200px] px-6 pb-16">
          <div className="overflow-hidden rounded-2xl ring-1 ring-neutral-200">
            <iframe
              title="Gamze Yavuz Beauty Konum"
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49957.05000815588!2d43.3372991!3d38.503431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4012712f777dfdd3%3A0x39092ba70c2e7143!2sGamze%20Yavuz%20B%C3%B6lgesel%20Zay%C4%B1flama%20ve%20G%C3%BCzellik%20Merkezi!5e0!3m2!1str!2sde!4v1757108936575!5m2!1str!2sde"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}