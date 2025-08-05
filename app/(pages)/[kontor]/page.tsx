import TopNav from '@/ui/components/nav/top-nav'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type props = {
  params: Promise<{ kontor: string }>
}

export default async function Page({ params }: props) {
  const { kontor } = await params
  return (
    <div className="bg-primary-white opacity-0 animate-fadeIn">
      <TopNav kontor={kontor} />
      <div className="md:pt-[5em] pb-[10em] min-h-[calc(100vh-88px)]">
        <main className="grid mx-auto gap-10 w-full">
          <section
            id="hero"
            className="relative overflow-hidden max-w-[80em] mx-auto px-4 pb-4">
            <h1 className="sr-only">Banner section</h1>
            <div className="absolute flex flex-col gap-4 items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max select-none z-50">
              <p className="text-white text-center font-reckless text-shadow-xs text-[clamp(1.5rem,5vw,3rem)]">
                Verdiskaping i hvert steg
              </p>
              <Link
                href={`https://partners.no/kontor/${kontor}/verdivurdering`}
                className="px-4 py-3 rounded-xs text-center bg-secondary-blue">
                Bestill verdivurdering
                <ArrowRight className="size-4 inline-block" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[rgba(44,40,37,.4)] mb-4" />
              <video
                autoPlay
                controls={false}
                muted
                loop
                className="h-[calc(100dvh-88px)] md:h-fit object-center object-cover pb-4 -z-10">
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* All video snippets are created by: Max Vakhtbovycn - https://www.pexels.com/@heyho/ */}
          </section>
          <section className="pt-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:gap-16">
                {/* Left Column */}
                <div className="grid grid-rows-2 basis-1/2">
                  <div>
                    <h2 className="font-light text-stone-900 mb-6 leading-tight">
                      Vi ønsker deg et trygt boligkjøp
                    </h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                      Lurer du på hvor du bør starte? Det er viktig med
                      oversikt, og det kan du få av oss gjennom en uforpliktende
                      prat.
                    </p>
                  </div>
                  <Link
                    href={`https://partners.no/kontor/${kontor}?tab=information#terms`}
                    className="px-4 py-3 rounded-xs size-fit text-white bg-secondary hover:bg-secondary/80 transition-colors">
                    Kontakt oss
                  </Link>
                </div>

                {/* Right Column */}
                <div className="grid grid-rows-2 basis-1/2">
                  <div>
                    <h2 className="font-light text-stone-900 mb-6 leading-tight">
                      Kompetente og engasjerte eiendomsmeglere
                    </h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                      I Advanti er vårt eneste mål å skape verdi for kundene
                      våre. Verdi i form av å ta ut hele potensialet i hva en
                      bolig er verdt - men også i form av tillit og trygghet,
                      som gir lave skuldre og kaldt hode når det trengs.
                    </p>
                  </div>
                  <Link
                    href={`https://partners.no/kontor/${kontor}?tab=information#information`}
                    className="px-4 py-3 rounded-xs size-fit text-white bg-secondary hover:bg-secondary/80 transition-colors ">
                    Finn megler
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-tri-gray-light py-40"></section>
        </main>
      </div>
      <footer className="min-h-[316px] py-16 bg-primary"></footer>
    </div>
  )
}
