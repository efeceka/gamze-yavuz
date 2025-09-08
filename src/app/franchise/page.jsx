"use client";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import { useState } from "react";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","500","600","700"] });

export default function FranchisePage() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const budget = formData.get("budget");
    const message = formData.get("message");

    // WhatsApp mesajı
    const text = `📩 Franchise Başvuru
👤 İsim: ${name}
📞 Telefon: ${phone}
📍 İl: ${city}
💰 Bütçe: ${budget}
📝 Mesaj: ${message || "-"}`;

    // WhatsApp linki
    const whatsappUrl = `https://wa.me/905011438080?text=${encodeURIComponent(text)}`;

    // Yönlendirme
    window.open(whatsappUrl, "_blank");

    setSending(false);
    e.currentTarget.reset();
  }


  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/anasayfa/hizmetlerimiz/gamzeyavuz.png" // istediğin görsel
          alt="Franchise"
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
              Franchise
            </h1>
          </div>
        </div>
      </section>

      {/* METİN + GÖRSEL */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Sol: metin */}
          <div>
            <span className="text-sm uppercase tracking-widest text-amber-600 font-light">
              Gamze Yavuz Beauty
            </span>
            <h2 className={`mt-2 text-3xl md:text-4xl font-semibold text-neutral-900 ${cinzel.className}`}>
              Franchise
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Yıllardır modern teknolojiler ve yenilikçi konseptiyle güzellik sektöründe
              güçlü bir yer edinen <strong>Gamze Yavuz Beauty</strong>, müşteri memnuniyetini öncelik
              alan hizmet anlayışıyla hızla büyümektedir. Bugün geniş uzman kadrosu ile yüzlerce danışanımıza
              profesyonel hizmet sunuyor ve yeni iş ortaklarımızı aramıza katılmaya davet ediyoruz.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Franchise modelimiz; başvuru sürecinden eğitim ve operasyon desteğine kadar her adımı kapsar.
              Yatırımınızı güvenle yönetebileceğiniz, modern ve kârlı bir güzellik merkezi işletme fırsatı
              sunuyoruz.
            </p>
          </div>
          {/* Sağ: görsel */}
          <div>
            <Image
              src="/images/anasayfa/hizmetlerimiz/franchise.jpg"
              alt="Franchise - Gamze Yavuz Beauty"
              width={900}
              height={700}
              className="rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
          <h2 className={`text-2xl md:text-3xl font-bold text-neutral-900 text-center ${cinzel.className}`}>
            Neden Biz?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Kart 1 */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
              <div className="text-amber-500 text-3xl mb-3">💎</div>
              <h3 className="font-semibold text-lg mb-2">Güçlü Marka</h3>
              <p className="text-neutral-600">
                Güzellik sektöründe kısa sürede güven ve bilinirlik kazanmış bir marka ile iş ortağı olun.
              </p>
            </div>
            {/* Kart 2 */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
              <div className="text-amber-500 text-3xl mb-3">📚</div>
              <h3 className="font-semibold text-lg mb-2">Eğitim & Destek</h3>
              <p className="text-neutral-600">
                Operasyon, satış ve teknik eğitim desteği ile her aşamada yanınızdayız.
              </p>
            </div>
            {/* Kart 3 */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
              <div className="text-amber-500 text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-lg mb-2">Kârlı İş Modeli</h3>
              <p className="text-neutral-600">
                Yatırımınızı kısa sürede geri kazanabileceğiniz sürdürülebilir iş modeli.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* BAŞVURU FORMU */}
      <section className="relative mx-auto max-w-[1200px] px-6 py-12 md:py-16 overflow-hidden md:rounded-2xl my-15">
        <Image
          src="/images/anasayfa/hizmetlerimiz/form.jpg"
          alt="Franchise Başvuru"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <h2
            className={`text-2xl md:text-3xl font-bold text-center text-white ${cinzel.className}`}
          >
            Franchise Başvuru Formu
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-2xl mx-auto space-y-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm text-white mb-1">İsim Soyisim</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900"
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-1">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900"
                />
              </div>
            </div>

           <div className="grid gap-4 md:grid-cols-2">
            <div>
                <label className="block text-sm text-white mb-1">Talep Edilen İl</label>
                <input
                type="text"
                name="city"
                required
                className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900"
                />
            </div>
            <div>
                <label className="block text-sm text-white mb-1">Ortalama Bütçe</label>
                <select
                name="budget"
                required
                className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900"
                >
                <option value="">Seçiniz</option>
                <option value="5-10">5.000.000 TL - 10.000.000 TL</option>
                <option value="10-20">10.000.000 TL - 20.000.000 TL</option>
                </select>
            </div>
            </div>

            <div>
              <label className="block text-sm text-white mb-1">Mesaj</label>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center rounded-xl bg-amber-500 px-6 py-3 text-white font-semibold hover:bg-amber-600 transition disabled:opacity-60"
              >
                {sending ? "Gönderiliyor…" : "Başvuruyu WhatsApp'tan Gönder"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}