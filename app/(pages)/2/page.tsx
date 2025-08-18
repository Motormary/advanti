import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-primary opacity-0 animate-fadeIn text-primary-white">
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
        <main className="grid gap-10 h-full">
          <section id="kontor" className="flex flex-col gap-8">
            {/*             <div className="grid gap-4 justify-center">
              <h1 className="text-center text-balance  font-bold">Advanti</h1>
            </div> */}
            <h1 className="text-2xl font-semibold text-center">
              Velg ditt meglerkontor
            </h1>
            <div className="relative mx-auto max-w-[45rem] aspect-square mt-10">
              <Image
                src="/map3.png"
                alt="kart"
                height={800}
                width={800}
                className="object-cover w-full h-auto"
              />

              {/* Alta */}
              <Link
                href="/alta"
                className="absolute top-[calc(3%-80px)] left-[calc(70%-80px)] max-sm:-translate-y-5 text-center size-40 place-content-center rounded-full peer/alta">
                <p className="text-[clamp(2.5rem,5vw,3rem)] font-semibold font-reckless text-shadow-xs">
                  Alta
                </p>
              </Link>

              {/* Bodø */}
              <Link
                href="/bodo"
                className="absolute top-[calc(30%-80px)] max-md:-translate-x-10 left-[calc(33%-80px)] text-center size-40 place-content-center rounded-full peer/bodo">
                <p className="text-[clamp(2.5rem,5vw,3rem)] font-semibold font-reckless text-shadow-xs">
                  Bodø
                </p>
              </Link>
              <div className="absolute bg-secondary-blue rounded-full size-5 outline-4 outline-primary top-[calc(13%-10px)] left-[calc(73%-10px)] scale-0 peer-hover/alta:scale-100 transition-transform" />
              <div className="absolute bg-secondary-blue rounded-full size-5 top-[calc(30%-10px)] left-[calc(45%-10px)] outline-4 outline-primary scale-0 peer-hover/bodo:scale-100 transition-transform" />
            </div>
          </section>
        </main>
      </div>
       <div className="absolute flex flex-col gap-2 bottom-5 left-2 text-black">
          <Link href="/" className='p-2 rounded-full bg-secondary-blue'>Landing 1</Link>
          <Link href="/3" className='p-2 rounded-full bg-secondary-blue'>Landing 3</Link>
        </div>
    </div>
  )
}
