import MeglerImg from "@/public/megler.svg";
import KontaktImg from "@/public/personlig.svg";
import ContactForm from "@/components/contact/contact";
import Footer from "@/components/nav/footer";
import TopNav from "@/components/nav/top-nav";
import Image from "next/image";
import Link from "next/link";

type props = {
  params: Promise<{ kontor: string }>;
};

export default async function Page({ params }: props) {
  const { kontor } = await params;
  return (
    <div className="bg-primary-white opacity-0 animate-fadeIn">
      <TopNav kontor={kontor} />
      <div className="md:pt-[5em] min-h-[calc(100vh-88px)]">
        <main className="grid mx-auto gap-10 w-full">
          <section
            id="hero"
            className="relative overflow-hidden w-[100vw] h-[100svh] md:h-[70svh]"
          >
            <h1 className="sr-only">Banner section</h1>
            <div className="absolute flex flex-col gap-4 items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max select-none z-50">
              <p className="text-white text-center font-reckless text-shadow-xs text-[clamp(1.5rem,5vw,3rem)]">
                Verdiskaping i hvert steg
              </p>
              <Link
                href={`https://partners.no/kontor/${kontor}/verdivurdering`}
                className="px-4 py-3 rounded-xs text-center bg-secondary-blue hover:bg-secondary-blue/90 transition-colors"
              >
                Bestill verdivurdering
              </Link>
            </div>
            <div className="relative bg-red-500">
              <div className="absolute inset-0 bg-[rgba(44,40,37,.4)]" />
              <video
                playsInline
                tabIndex={-1}
                autoPlay
                controls={false}
                muted
                loop
                className="h-[calc(100svh-88px)] w-[100vw] object-center object-cover -z-10"
              >
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* All video snippets are created by: Max Vakhtbovycn - https://www.pexels.com/@heyho/ */}
          </section>
          <section className="max-w-7xl mx-auto">
            <h1 className="text-[clamp(1.5rem,5vw,2rem)] md:max-w-2/3 text-pretty px-4">
              Vår lokale erfaring, gir deg trygghet på at vi både ser verdien i
              bolig og beliggenhet, og vet hvordan vi skal stille det i best
              mulig lys – så verdien kommer frem.
            </h1>
          </section>
          <section className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 md:grid-rows-2 lg:gap-16">
                {/* First row */}
                <div className="max-h-72 lg:max-h-96 overflow-hidden">
                  <Image
                    className="mx-auto"
                    src={KontaktImg.src}
                    alt="Contact us"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <h2 className="font-light text-stone-900 mb-6 leading-tight">
                    Verdien starter med en god samtale
                  </h2>
                  <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    La oss vise deg hvordan lokalkunnskap og personlig
                    oppfølging kan gjøre en forskjell. Ta kontakt for en
                    uforpliktende prat.
                  </p>
                  <Link
                    href={`https://partners.no/kontor/${kontor}/kontakt`}
                    className="px-4 py-3 rounded-xs size-fit text-white mb-4 bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    Kontakt oss
                  </Link>
                </div>

                {/* Second row */}
                <div className="max-h-[310px] lg:max-h-96 overflow-hidden md:col-start-2 md:row-start-2">
                  <Image
                    className="mr-auto"
                    src={MeglerImg.src}
                    alt="people talking"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <h2 className="font-light text-stone-900 mb-6 leading-tight">
                    Kompetente og engasjerte eiendomsmeglere
                  </h2>
                  <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    I Advanti er vårt eneste mål å skape verdi for kundene våre.
                    Verdi i form av å ta ut hele potensialet i hva en bolig er
                    verdt - men også i form av tillit og trygghet, som gir lave
                    skuldre og kaldt hode når det trengs.
                  </p>
                  <Link
                    href={`https://partners.no/kontor/${kontor}?tab=information#information`}
                    className="px-4 py-3 rounded-xs size-fit text-white bg-secondary hover:bg-secondary/80 transition-colors "
                  >
                    Finn megler
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-tri-gray-light py-10 space-y-4 mt-16">
            <h1 className="text-center text-[clamp(1.5rem,5vw,3rem)]">
              Eiendommer og boliger til salgs
            </h1>
            <div className="max-w-7xl grid grid-cols-2 md:grid-cols-4 mx-auto text-center py-5 sm:py-10 font-semibold text-lg [&_img]:mx-auto max-md:[&>a]:my-8">
              <Link href={`https://partners.no/eiendommer?alias=${kontor}&p=0`}>
                <Image
                  src="./eiendom.svg"
                  alt="Image"
                  width={100}
                  height={100}
                />
                <p>Eiendommer</p>
              </Link>
              <Link
                href={`https://partners.no/eiendommer?at=Leisure&alias=${kontor}&p=0`}
              >
                <Image
                  src="./fritid.svg"
                  alt="Image"
                  width={100}
                  height={100}
                />
                <p>Fritidsboliger</p>
              </Link>
              <Link
                href={`https://partners.no/eiendommer?at=NewDevelopment%2CNewDevelopmentCommercial%2CNewDevelopmentLeisure&alias=${kontor}&p=0`}
              >
                <Image
                  src="./nybygg2.svg"
                  alt="Image"
                  width={100}
                  height={100}
                />
                <p>Nybygg</p>
              </Link>
              <Link
                href={`https://partners.no/eiendommer?at=Commercial&alias=${kontor}&p=0`}
              >
                <Image
                  src="./nearing.svg"
                  alt="Image"
                  width={100}
                  height={100}
                />
                <p>Næring</p>
              </Link>
            </div>
          </section>
          <section id="contact" className="my-10 pb-10">
            <div className="max-w-7xl grid justify-center gap-8 mx-auto px-4 sm:px-6 lg:px-8">
              <div>
                <h2 className="text-balance text-center sm:text-left mb-10">
                  {" "}
                  Skal du kjøpe eller selge bolig? <br />
                </h2>
                <p className="text-xl ">
                  Fyll ut kontaktskjema så tar vi kontakt
                </p>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>
      </div>
      <Footer kontor={kontor} />
    </div>
  );
}
