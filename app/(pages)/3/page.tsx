import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <div className="bg-primary relative">
        <div className="h-[88px] px-8 place-content-center">
          <Image
            src={'/advanti-white.svg'}
            alt="Advanti Logo"
            height={67}
            width={240}
            className="object-contain object-left max-h-[67.2px]"
          />
        </div>
        <div className=" px-4 mx-auto max-w-[50rem] h-[calc(100vh-88px)] opacity-0 animate-fadeIn">
          <main className="flex h-full gap-2 flex-col sm:flex-row mx-auto justify-center py-2">
            <div className="relative flex-1/2 overflow-hidden row-span-2 cursor-pointer group">
              <Link
                href={`/alta`}
                className="inset-0 bg-[rgba(44,40,37,.4)] group-hover:opacity-60 transition-opacity duration-500 absolute"
              />
              <Image
                src={'/alta.jpeg'}
                alt="alta"
                height={1400}
                width={1400}
                className="object-cover h-full w-full"
              />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-white text-5xl font-semibold text-shadow-xs pointer-events-none">
                Alta
              </p>
            </div>
            <div className="relative flex-1/2 overflow-hidden cursor-pointer group">
              <Link
                href={`/bodo`}
                className="inset-0 bg-[rgba(44,40,37,.4)] group-hover:opacity-60 transition-opacity duration-500 absolute"
              />
              <Image
                src={'/bodo.jpeg'}
                alt="bodo"
                height={1400}
                width={1400}
                className="object-cover h-full w-full"
              />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-white text-5xl font-semibold text-shadow-xs pointer-events-none">
                Bodø
              </p>
            </div>
          </main>
          {/* todo: Delete me */}
          <div className="absolute flex flex-col gap-2 bottom-5 left-2">
            <Link href="/" className="p-2 rounded-full bg-secondary-blue">
              Landing 1
            </Link>
            <Link href="/2" className="p-2 rounded-full bg-secondary-blue">
              Landing 2
            </Link>
            <Link href="/3" className="p-2 rounded-full bg-tri-gray-dark">
              Landing 3
            </Link>
          </div>
        </div>
      </div>
  )
}
