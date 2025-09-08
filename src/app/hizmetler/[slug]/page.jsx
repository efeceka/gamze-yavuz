import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","500","600","700"] });

// SSG
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// params -> await
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getServiceBySlug(slug);
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

// params -> await
export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const item = getServiceBySlug(slug);
  if (!item) return notFound();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-end px-6 pb-10">
          <div>
            <span
              className={`block md:text-base uppercase tracking-[0.2em] text-amber-400 font-light`}
            >
              Gamze Yavuz Beauty
            </span>
            <h1 className="mt-2 text-white text-3xl md:text-5xl font-semibold drop-shadow">
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
            <span className="text-sm uppercase tracking-widest text-amber-600 font-light">
              Hizmetler
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-900">
              {item.title}
            </h2>

            <p className="mt-4 text-neutral-700 text-lg">{item.intro}</p>

            <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
              {item.content?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

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