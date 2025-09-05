import Image from "next/image";
import Link from "next/link";

const items = [
  { title: "Lazer Epilasyon", slug: "lazer-epilasyon", image: "/images/anasayfa/hizmetlerimiz/lazer-epilasyon.webp" },
  { title: "Bölgesel İncelme", slug: "bolgesel-incelme", image: "/images/anasayfa/hizmetlerimiz/bolgesel-incelme.webp" },
  { title: "Diyetisyen Hizmeti", slug: "diyetisyen", image: "/images/anasayfa/hizmetlerimiz/diyet.webp" },
  { title: "Leke Tedavileri", slug: "leke-tedavileri", image: "/images/anasayfa/hizmetlerimiz/leke-tedavileri.webp" },
  { title: "Cilt Bakımı", slug: "cilt-bakimi", image: "/images/anasayfa/hizmetlerimiz/cilt-bakimi.webp" },
  { title: "Ben Silme", slug: "ben-silme", image: "/images/anasayfa/hizmetlerimiz/ben-silme.webp" },
  { title: "Kalıcı Makyaj", slug: "kalici-makyaj", image: "/images/anasayfa/hizmetlerimiz/kalici-makyaj.webp" },
  { title: "Altın Oran Kaş Alımı", slug: "altin-oran-kas-alimi", image: "/images/anasayfa/hizmetlerimiz/kas-alimi.webp" },
  { title: "Kirpik Lifting", slug: "kirpik-lifting", image: "/images/anasayfa/hizmetlerimiz/kirpik-lifting.webp" },
  { title: "Kaş Laminasyon", slug: "kas-laminasyon", image: "/images/anasayfa/hizmetlerimiz/kas-laminasyon.webp" },
  { title: "Kaş Pudralama", slug: "kas-pudralama", image: "/images/anasayfa/hizmetlerimiz/kas-pudralama.webp" },
];

export default function ServicesSection({
  title = "Hizmetlerimiz",
  kicker = "Gamze Yavuz Beauty",
  logo = "/images/logos/logo.png", // şeffaf PNG
  services = items,
}) {
  return (
    <section id="hizmetler" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <p className="text-xs md:text-sm tracking-[0.28em] text-neutral-500 uppercase">{kicker}</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-serif text-neutral-900">{title}</h2>

        <div className="mt-8 md:mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              className="group relative block overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06] group-hover:brightness-[1.05]"
                />

                {/* Sol üst: daha görünür logo rozet */}
                <div className="absolute left-4 top-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/45 backdrop-blur-md ring-2 ring-amber-400/70 shadow-md">
                    <Image src={logo} alt="Logo" width={26} height={26} className="opacity-95" />
                  </div>
                </div>

                {/* Alt gradient & metin */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/75" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <div className="text-[11px] md:text-xs tracking-[0.28em] text-white/85 uppercase">
                    {kicker}
                  </div>
                  <div className="mt-2 text-2xl md:text-3xl font-semibold leading-tight text-white drop-shadow">
                    {s.title}
                  </div>
                  <div className="mt-2 h-[2px] w-16 bg-amber-400/80 transition-all group-hover:w-24" />
                </div>
              </div>

              {/* Hover motion: kart hafif yükselip gölgelensin */}
              <span className="absolute inset-0 rounded-2xl ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}