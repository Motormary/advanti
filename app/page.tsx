import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-[80em] px-4 container mx-auto py-10">
      <main className="grid gap-10">
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute flex flex-col gap-4 items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max select-none">
            <p className="text-white text-shadow-xs text-6xl">
              Ditt neste kapittel starter her
            </p>
            <Link href={'/#kontor'} className="px-4 py-3 rounded-xs text-center text-white bg-black">
              Velg kontor
            </Link>
          </div>
          <video autoPlay controls={false} muted loop>
            <source src="/hero.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </section>
        <section id="kontor" className="flex gap-8">
          <div className="relative overflow-hidden cursor-default group">
            <div className="inset-0 bg-[rgba(44,40,37,.4)] group-hover:opacity-80 transition-opacity duration-500 absolute" />
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-white text-5xl font-semibold text-shadow-2xs">
              Alta
            </p>
            <Image
              src={'/alta.jpeg'}
              alt="alta"
              height={800}
              width={800}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="relative overflow-hidden cursor-default group">
            <div className="inset-0 bg-[rgba(44,40,37,.4)] group-hover:opacity-80 transition-opacity duration-500 absolute" />
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-white text-5xl font-semibold text-shadow-2xs">
              Bodø
            </p>
            <Image
              src={'/bodo.jpeg'}
              alt="bodo"
              height={800}
              width={800}
              className="object-cover h-full w-full"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
