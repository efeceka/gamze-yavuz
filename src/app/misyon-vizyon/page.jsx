import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","500","600","700"] });

// (Opsiyonel) SEO
export const metadata = {
  title: "Misyon & Vizyon | Gamze Yavuz Beauty",
  description:
    "Gamze Yavuz Beauty'nin misyonu ve vizyonu: yenilikçi teknolojilerle, hijyenik ve konforlu bir ortamda, müşterilerin en iyi versiyonunu ortaya çıkaran hizmet anlayışı.",
};

export default function MisyonVizyonPage() {
  return (
    <main className="bg-white">
      {/* HERO (yarım) */}
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/anasayfa/hizmetlerimiz/gamzeyavuz.png"  // değiştirilebilir
          alt="Misyon & Vizyon"
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
            <h1
              className={`mt-2 text-white text-3xl md:text-5xl font-bold drop-shadow ${cinzel.className}`}
            >
              Misyon & Vizyon
            </h1>
          </div>
        </div>
      </section>

      {/* İÇERİK: solda metin / sağda görsel */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Sol: Metin */}
          <div>
            <span className="text-sm uppercase tracking-widest text-amber-600 font-light">
              Yol Haritamız
            </span>
            <h2
              className={`mt-2 text-3xl md:text-4xl font-semibold text-neutral-900 ${cinzel.className}`}
            >
              Misyon & Vizyon
            </h2>

            {/* Misyon */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-neutral-800">Misyonumuz</h3>
              <p className="mt-2 text-neutral-700 leading-relaxed text-lg">
                Misyonumuz Gamze Yavuz Güzellik Merkezi olarak en son teknikleri ve
                yenilikleri kullanarak her müşterimizin kendini özel hissettmesini
                ve en iyi versiyonunu ortaya çıkarmasını sağlamaktır.
              </p>
            </div>

            {/* Vizyon */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-neutral-800">Vizyonumuz</h3>
              <p className="mt-2 text-neutral-700 leading-relaxed text-lg">
                Vizyonumuz müşterilerimizin yaşamlarını olumlu yönde etkilemek ve
                güzellik standartlarını yükseltmektir. Sürekli öğrenme, gelişme ve
                yenilikçilik ile güzellik dünyasına yön vermek Gamze Yavuz Güzellik
                Merkezi olarak en büyük hedeflerimizden biridir.
              </p>
            </div>

            
          </div>

          {/* Sağ: Görsel */}
          <div className="flex justify-center">
            <Image
              src="/images/anasayfa/hizmetlerimiz/misyon-vizyon.webp" // değiştirilebilir
              alt="Misyon & Vizyon - Gamze Yavuz Beauty"
              width={900}
              height={700}
              className="w-full max-w-[500px] rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
}