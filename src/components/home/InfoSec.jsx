"use client";
import { Cinzel } from "next/font/google";
import Link from "next/link";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","500","600","700"] });

export default function InfoSec() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      {/* arka plan süsü (gradient + blur) */}
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-pink-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] px-6 py-14 md:py-20">
        {/* Üst Başlık */}
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-amber-600 font-light">
            Ücretsiz Ön Görüşme
          </span>
          <h2 className={`${cinzel.className} mt-2 text-3xl md:text-4xl font-semibold text-neutral-900`}>
            Cilt & Vücut Analizi • Yapay Zeka Destekli Teknoloji
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-700 text-lg leading-relaxed">
            Kişiye özel bakım planı için ücretsiz analiz randevusu oluşturun. Son teknoloji, yapay zeka
            destekli cihazlarımızla veriye dayalı çözümler sunuyoruz.
          </p>
        </div>

        {/* Özellik Kartları */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Kart 1 */}
          <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-amber-100 text-amber-700 mb-4">
              {/* scope / analysis icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 3a8 8 0 1 0 5.293 14.293l3.707 3.707 1.414-1.414-3.707-3.707A8 8 0 0 0 11 3z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">Ücretsiz Cilt & Vücut Analizi</h3>
            <p className="mt-2 text-neutral-600">
              Nem, elastikiyet, leke eğilimi ve bölgesel değerlendirme ile ihtiyaçlarını netleştiriyoruz.
            </p>
          </div>

          {/* Kart 2 */}
          <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-amber-100 text-amber-700 mb-4">
              {/* AI chip icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 1v4M12 19v4M1 12h4M19 12h4M4.5 4.5l2.5 2.5M16.9 16.9l2.6 2.6M19.4 4.6 16.9 7.1M6.9 16.9l-2.6 2.6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">Yapay Zeka Destekli Cihazlar</h3>
            <p className="mt-2 text-neutral-600">
              Ölçümlere dayalı kişiselleştirme: daha isabetli protokoller, daha hızlı sonuçlar.
            </p>
          </div>

          {/* Kart 3 */}
          <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-amber-100 text-amber-700 mb-4">
              {/* shield / hygiene icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">Hijyenik ve Konforlu Deneyim</h3>
            <p className="mt-2 text-neutral-600">
              Tek kullanımlık materyaller, steril çalışma ve konfor odaklı uygulama ortamı.
            </p>
          </div>
        </div>

        {/* CTA Bloğu */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="/iletisim"
            className="inline-flex items-center rounded-xl bg-neutral-900 px-6 py-3 text-white font-semibold hover:bg-neutral-800 transition"
          >
            Ücretsiz Analiz Randevusu Al
          </Link>
          <p className="text-sm text-neutral-600">
            Sonuçlarınız aynı gün içinde değerlendirilir.
          </p>
        </div>
      </div>
    </section>
  );
}