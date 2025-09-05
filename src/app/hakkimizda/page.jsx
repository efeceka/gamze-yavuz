import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function HakkimizdaPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/anasayfa/about-hero.jpg" // 📌 istediğin hero görseli
          alt="Hakkımızda"
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
              Hakkımızda
            </h1>
          </div>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Sol: Metin */}
          <div>
            <span className="text-sm uppercase tracking-widest text-amber-600 font-light">
              Biz Kimiz?
            </span>
            <h2
              className={`mt-2 text-3xl md:text-4xl font-semibold text-neutral-900 ${cinzel.className}`}
            >
              Gamze Yavuz Beauty
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed text-lg">
              İnsanların dış görünüşlerine yüksek oranda önem vermesi güzellik merkezlerini gerekli
              hale getirmiştir. Bizler de 2023 yılından bu yana güzellik sektöründe hizmet veren bir
              firmayız. Son sürüm cihazlar ve alanında uzman ekibimizle birlikte hijyenik, konforlu
              ve modern bir ortamda en iyi hizmetlerimizi sunuyoruz.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed text-lg">
              Standartlarımızı yüksek tutmamızın yanında hizmet kalitemizi de her geçen gün bir tık
              daha yükseltmeye özen gösteriyoruz. Yüksek kalitede sunulan hizmetlerimiz sayesinde
              kendilerini daha iyi hissetmelerinin yanında son derece sıcak bir atmosferle
              misafirlerimizi karşılıyoruz.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed text-lg">
              Güzellik merkezimizde misafirlerimizin sadece dış görünüşüne değil aynı zamanda
              kendilerinin güven duygularına dokunduğumuz bir ortam yaratıyoruz.
            </p>
          </div>

          {/* Sağ: Görsel */}
          <div className="flex justify-center">
  <Image
    src="/images/anasayfa/about.jpg" // 📌 içerik görseli
    alt="Gamze Yavuz Beauty Hakkımızda"
    width={900}
    height={700}
    className="w-full max-w-[400px] rounded-xl object-cover shadow-md"
  />
</div>
        </div>
      </section>
    </main>
  );
}