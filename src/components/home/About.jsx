import Image from "next/image";

export default function AboutSection({
  title = "Hakkımızda",
  kicker = "Gamze Yavuz Beauty",
  paragraphs = [
    "Güzellik ve bakım yalnızca dış görünüşten ibaret değil; iyi hissetmenin doğal bir sonucu. Merkezimizde, bilimsel analizlerle kişiye özel planlar oluşturuyor, her danışanımıza sıcak ve güven veren bir atmosfer sunuyoruz.",
    "Deneyimli ekibimiz, ileri teknoloji cihazlarla konforlu ve hijyen standartları yüksek uygulamalar gerçekleştirir. Şeffaf iletişim ve sürdürülebilir bakım önerileriyle, sonuçların kalıcı olmasına odaklanırız.",
  ],
  phone = "0530 000 00 00",
  ctaHref = "/iletisim",
  imageSrc = "/images/anasayfa/about.jpg", // arka planı şeffaf PNG önerilir
  imageAlt = "Uygulama sonrası doğal ışıltı",
}) {
  return (
    <section id="hakkimizda" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        {/* üst mini başlık */}
        <p className="text-xs md:text-sm tracking-[0.28em] text-neutral-500 uppercase">
          {kicker}
        </p>

        <div className="mt-3 grid items-center gap-10 lg:gap-16 md:grid-cols-2">
          {/* Sol: metin */}
          <div>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight text-neutral-900">
              {title}
            </h2>

            <div className="mt-6 space-y-5 text-neutral-700 text-base md:text-lg leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Rezervasyon bloğu */}
            <div className="mt-8 md:mt-10 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-neutral-300 text-amber-600">
                {/* phone icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 4.08 6.18 2 2 0 0 1 6.1 4h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.18L10.1 11.5a16 16 0 0 0 6.4 6.4l1.26-1.26a2 2 0 0 1 2.18-.45c.74.35 1.53.6 2.34.72A2 2 0 0 1 22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-sm text-neutral-500">Rezervasyon</div>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="mt-1 block text-2xl md:text-3xl font-semibold bg-gradient-to-b from-amber-400 to-yellow-600 bg-clip-text text-transparent"
                >
                  {phone}
                </a>

                <a
                  href={ctaHref}
                  className="mt-4 inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
                >
                  Bize ulaşın
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Sağ: görsel (şeffaf PNG ile kesim efekti) */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[400px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={900}
                priority={false}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}