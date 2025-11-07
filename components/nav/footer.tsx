import Link from "next/link";

type props = {
  kontor: string;
};

export default function Footer({ kontor }: props) {
  return (
    <div
      aria-label="nav-menu"
      className="min-h-[316px] bg-secondary py-16 w-full z-50"
    >
      <nav className="mx-auto max-w-[1920px] text-primary-white [&_li]:font-arial px-[4.5em] max-sm:text-center">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(4,1fr)] gap-[1em] [&_ul]:pb-[1.75em] [&_p]:mb-[0.25em] [&>ul]:space-y-[0.5em]">
          <ul>
            <Link href={`https://partners.no/kjope?alias=${kontor}`}>
              <p className="text-[1.5rem]">Kjøpe</p>
            </Link>
            <li>
              <Link href={`https://partners.no/eiendommer?at=&alias=${kontor}`}>
                Eiendommer
              </Link>
            </li>
            <li>
              <Link
                href={`https://partners.no/eiendommer?at=Leisure&alias=${kontor}`}
              >
                Fritidsboliger
              </Link>
            </li>
            <li>
              <Link
                href={`https://partners.no/eiendommer?at=NewDevelopment%2CNewDevelopmentCommercial%2CNewDevelopmentLeisure&alias=${kontor}`}
              >
                Nybygg
              </Link>
            </li>
            <li>
              <Link
                href={`https://partners.no/eiendommer?at=Commercial&alias=${kontor}`}
              >
                Næring
              </Link>
            </li>
          </ul>
          <ul>
            <Link href={`https://partners.no/selge?alias=${kontor}`}>
              <p className="text-[1.5rem]">Selge</p>
            </Link>
            <li>
              <Link href={`https://partners.no/verdivurdering?alias=${kontor}`}>
                Verdivurdering
              </Link>
            </li>
            <li>
              <Link href={`https://partners.no/pristilbud?alias=${kontor}`}>
                Pristilbud
              </Link>
            </li>
            <li>
              <Link href={`https://partners.no/salgsprosessen?alias=${kontor}`}>
                Salgsprosessen
              </Link>
            </li>
            <li>
              <Link
                href={`https://partners.no/nybygg-for-utbygger?alias=${kontor}`}
              >
                Nybygg / utbygger
              </Link>
            </li>
          </ul>
          <ul>
            <p className="text-[1.5rem]">Kontorer</p>
            <li>
              <Link href={`/alta`}>Alta</Link>
            </li>
            <li>
              <Link href={`/bodo`}>Bodø</Link>
            </li>
          </ul>
          <ul>
            <p className="text-[1.5rem] ">Om Advanti</p>
            <li>
              <Link href={`https://partners.no/om-partners?alias=${kontor}`}>
                Om oss
              </Link>
            </li>
            <li>
              <Link
                href={`https://partners.no/kontor/${kontor}?tab=information#information`}
              >
                Ansatte
              </Link>
            </li>
          </ul>
          <ul>
            <p className="text-[1.5rem]">Nyheter</p>
            <li>
              <Link href={`https://bolignytt${kontor}.no`}>Bolignytt</Link>
            </li>
          </ul>
          <ul>
            <Link
              href={`https://partners.no/kontor/${kontor}?tab=information#terms`}
            >
              <p className="text-[1.5rem]">Kontakt oss</p>
            </Link>
            <li>
              <Link href={`https://partners.no/personvern?alias=${kontor}`}>
                Personvern
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-primary font-mono">© Codenord</p>
      </nav>
    </div>
  );
}
