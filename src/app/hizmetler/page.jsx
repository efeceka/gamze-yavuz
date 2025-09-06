import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ServicesListPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/anasayfa/hizmetlerimiz/gamzeyavuz.png"
          alt="Hizmetlerimiz"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* İçerik */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1
            className={`${cinzel.className} text-white text-3xl md:text-5xl font-bold drop-shadow`}
          >
            Hizmetlerimiz
          </h1>
        </div>
      </section>

      {/* Açıklama */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16 text-center">
        <h2
          className={`${cinzel.className} text-2xl md:text-4xl font-semibold text-neutral-900`}
        >
          Güzelliğiniz İçin Profesyonel Hizmetler
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-neutral-700 text-lg leading-relaxed">
          Gamze Yavuz Beauty olarak en yeni teknolojiler ve uzman ekibimizle
          size özel bakım ve estetik çözümler sunuyoruz. Aşağıda sunduğumuz
          hizmetleri inceleyebilir ve size en uygun olanı seçebilirsiniz.
        </p>
      </section>

      {/* Hizmet listesi */}
      <section className="mx-auto max-w-[1200px] px-6 pb-12 md:pb-16">
        <div className="mt-4 grid gap-6 md:gap-8 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              className="group relative block overflow-hidden rounded-2xl ring-1 ring-black/5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div
                    className={`${cinzel.className} text-2xl md:text-3xl font-semibold text-white drop-shadow`}
                  >
                    {s.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}