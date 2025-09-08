import Image from "next/image";
import Link from "next/link";

export default function Footer({
  brand = "Gamze Yavuz Beauty",
  logo = "/images/logos/logo.png",
  phone = "0530 000 00 00",
  address = "Alipaşa, Suvaroğlu Cd 44/A, Van, Turkey 65100",
  instagram = "https://instagram.com/kullaniciadiniz",
  whatsapp = "https://wa.me/905300000000",
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#222222] text-neutral-200">
      {/* üst border/ışık çizgisi */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marka kutusu */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logo}
                alt={`${brand} Logo`}
                width={44}
                height={44}
                className="w-11 h-11"
              />
              <span className="text-lg font-semibold tracking-wide">
                {brand}
              </span>
            </Link>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Doğal ışıltınızı ortaya çıkaran, güvenli ve kişiye özel bakım
              yaklaşımı. Hijyenik ortam, şeffaf iletişim ve kalıcı sonuçlar.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-sm font-semibold text-neutral-300">Kurumsal</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                <li><Link href="/hakkimizda" className="hover:text-neutral-200 transition">Hakkımızda</Link></li>
                <li><Link href="/misyon-vizyon" className="hover:text-neutral-200 transition">Misyon & Vizyon</Link></li>
                <li><Link href="/franchise" className="hover:text-neutral-200 transition">Franchise</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-300">Hizmetler</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                <li><Link href="/hizmetler/cilt-bakimi" className="hover:text-neutral-200 transition">Cilt Bakımı</Link></li>
                <li><Link href="/hizmetler/lazer-epilasyon" className="hover:text-neutral-200 transition">Lazer Epilasyon</Link></li>
                <li><Link href="/hizmetler/bolgesel-incelme" className="hover:text-neutral-200 transition">Bölgesel İncelme</Link></li>
                <li><Link href="/hizmetler" className="hover:text-neutral-200 transition">Tüm Hizmetler</Link></li>
              </ul>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-300">İletişim</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-neutral-200 transition">
                  {phone}
                </a>
              </li>
              <li className="text-neutral-400">{address}</li>
              <li className="text-neutral-400">Çalışma Saatlerimiz 10.00 - 19.00 , Pazar Kapalıyız.</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center rounded-lg border border-amber-500/60 px-4 py-2 text-sm text-amber-400 hover:bg-amber-500/10 transition"
              >
                Bize Ulaşın
                <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* alt satır */}
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {year} {brand}. Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}