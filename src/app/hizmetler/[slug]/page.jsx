import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
// SSG
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const item = getServiceBySlug(params.slug);
  if (!item) return {};
  return {
    title: `${item.title} | Gamze Yavuz Beauty`,
    description: item.intro,
    openGraph: {
      title: `${item.title} | Gamze Yavuz Beauty`,
      description: item.intro,
      images: [{ url: item.image }],
    },
  };
}

export default function ServiceDetail({ params }) {
  const item = getServiceBySlug(params.slug);
  if (!item) return notFound();

  return (
    <main className="bg-white">
      {/* Üst görsel (kapak) */}
     <section className="relative h-[55vh] min-h-[320px] w-full overflow-hidden">
  <Image
    src={item.image}
    alt={item.title}
    fill
    priority
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/40" />
  
  {/* İçerik */}
  <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-end px-6 pb-10">
    <div>
      {/* Küçük üst başlık */}
        <span
        className={`block md:text-base uppercase tracking-[0.2em] text-amber-400 font-light ${cinzel.className}`}>
        Gamze Yavuz Beauty
        </span>

      {/* Ana başlık */}
      <h1 className="mt-2 text-white text-3xl md:text-5xl font-semibold font-serif drop-shadow">
        {item.title}
      </h1>
    </div>
  </div>
</section>

      {/* İçerik: sol metin / sağ görsel */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
          {/* Sol: metin */}
         <div>
        {/* Üst küçük başlık */}
        <span className="text-sm uppercase tracking-widest text-amber-600 font-light">
            Hizmetler
        </span>

        {/* Ana başlık */}
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold font-light font-serif text-neutral-900">
            {item.title}
        </h2>

        {/* Intro */}
        <p className="mt-4 text-neutral-700 text-lg">{item.intro}</p>

        {/* Detaylı içerik */}
        <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
            {item.content?.map((p, i) => (
            <p key={i}>{p}</p>
            ))}
        </div>

        {/* CTA'lar */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
            href="tel:05300000000"
            className="inline-flex items-center rounded-xl bg-neutral-900 px-6 py-3 text-white font-semibold hover:bg-neutral-800 transition"
            >
            Randevu Al
            </a>
            <a
            href="/iletisim"
            className="inline-flex items-center rounded-xl border border-neutral-300 px-6 py-3 font-semibold hover:bg-neutral-50 transition"
            >
            İletişim
            </a>
        </div>
        </div>

          {/* Sağ: içerik görseli */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[450px]">
              <Image
                src={item.contentImage || "/images/anasayfa/about.jpg"}
                alt={`${item.title} - örnek uygulama`}
                width={900}
                height={1000}
                className="h-auto w-full rounded-xl object-cover shadow-sm"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}