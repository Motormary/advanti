import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-primary opacity-0 animate-fadeIn">
      <div className="h-[88px] px-8 place-content-center">
        <Image
          src={'/advanti-white.svg'}
          alt="Advanti Logo"
          height={67}
          width={240}
          className="object-contain object-left max-h-[67.2px]"
        />
      </div>
      <div className="max-w-[80em] px-4 mx-auto py-10 min-h-[calc(100vh-88px)]">
        <main className="grid gap-10">
          <section id="kontor" className="flex flex-col gap-8">
            <div className="grid gap-4 justify-center">
              <h1 className="text-center text-balance text-white">
                Drømmehjemmet venter
              </h1>
              <p className="mx-auto text-center text-pretty text-xl text-slate-300 max-w-2xl">
                Med mer enn 35 års erfaring fra salg av enebolig, leilighet,
                fritidsbolig og næringsbygg er vi klare til å hjelpe deg, og vi
                deler gjerne av vår erfaring.
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-center text-slate-200">
              Velg ditt kontor
            </h2>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative overflow-hidden cursor-pointer group">
                <Link
                  href={`/alta`}
                  className="inset-0 bg-[rgba(44,40,37,.4)] group-hover:opacity-60 transition-opacity duration-500 absolute"
                />
                <Image
                  src={'/alta.jpeg'}
                  alt="alta"
                  height={800}
                  width={800}
                  className="object-cover h-full w-full"
                />
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-white text-5xl font-semibold text-shadow-xs">
                  Alta
                </p>
              </div>
              <div className="relative overflow-hidden cursor-pointer group">
                <Link
                  href={`/bodo`}
                  className="inset-0 bg-[rgba(44,40,37,.4)] group-hover:opacity-60 transition-opacity duration-500 absolute"
                />
                <Image
                  src={'/bodo.jpeg'}
                  alt="bodo"
                  height={800}
                  width={800}
                  className="object-cover h-full w-full"
                />
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-white text-5xl font-semibold text-shadow-xs">
                  Bodø
                </p>
              </div>
            </div>
            {/*      <div>
              35+ år erfaring
            </div> */}
          </section>
        </main>
      </div>
      {/* <footer className='min-h-[316px] py-16 bg-primary'>

      </footer> */}
    </div>
  )
}
