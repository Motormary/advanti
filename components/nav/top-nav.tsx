"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CloseMenu from "../close-menu";
import MenuIcon from "../hamburger-menu";

type props = {
  kontor: string;
};

export default function TopNav({ kontor }: props) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ backgroundColor: open ? "var(--primary)" : "inherit" }}
      className="h-[88px] px-8 place-content-center flex justify-between relative z-[9999]"
    >
      <div className="flex items-center">
        <Link href={`/`}>
          <Image
            priority
            src={`/partners.svg`}
            alt="Advanti Logo"
            height={67}
            width={240}
            className={`${
              open ? "invert" : ""
            } object-contain object-left max-h-[67.2px]`}
          />
        </Link>
      </div>
      <nav
        className="place-content-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity max-lg:hidden lg:visible"
        style={{
          animation: open ? "var(--fadeOut)" : "var(--fadeIn)",
          display: open ? "none" : "",
        }}
      >
        <ul className="flex gap-[1.5em] [&_*]:font-light [&_*]:text-[1.1rem] [&_*]:font-arial">
          <li>
            <Link href={`https://partners.no/kjope?alias=${kontor}`}>
              Kjøpe
            </Link>
          </li>
          <li>
            <Link href={`https://partners.no/selge?alias=${kontor}`}>
              Selge
            </Link>
          </li>
          <li>
            <Link href={`/`}>Kontorer</Link>
          </li>
          <li>
            <Link href={`https://partners.no/kontor/${kontor}?tab=information`}>
              Om Advanti {kontor === "alta" ? "Alta" : "Bodø"}
            </Link>
          </li>
          <li>
            <Link href={`https://bolignytt${kontor}.no/`}>Nyheter</Link>
          </li>
          <li>
            <Link href={`/${kontor}/#kontakt`}>Kontakt oss</Link>
          </li>
        </ul>
      </nav>
      <div className="place-content-center">
        <button
          aria-label={open ? "close menu" : "open menu"}
          aria-controls="nav-menu"
          onClick={() => setOpen(!open)}
          className="cursor-pointer"
        >
          {open ? <CloseMenu /> : <MenuIcon />}
        </button>
      </div>
      <div
        aria-label="nav-menu"
        style={{ display: open ? "block" : "none" }}
        className="min-h-[398.4px] bg-primary w-full absolute left-0 bottom-0 translate-y-[100%] z-50 py-[1.75em]"
      >
        <nav className="mx-auto max-w-[90em] text-primary-white [&_li]:font-arial animate-fadeIn px-[4.5em] max-sm:text-center">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(4,1fr)] gap-[1em] [&_ul]:pb-[1.75em] [&_p]:mb-[0.25em] [&>ul]:space-y-[0.5em]">
            <ul>
              <Link href={`https://partners.no/kjope?alias=${kontor}`}>
                <p className="text-[1.5rem]">Kjøpe</p>
              </Link>
              <li>
                <Link
                  href={`https://partners.no/eiendommer?at=&alias=${kontor}`}
                >
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
                <Link
                  href={`https://partners.no/verdivurdering?alias=${kontor}`}
                >
                  Verdivurdering
                </Link>
              </li>
              <li>
                <Link href={`https://partners.no/pristilbud?alias=${kontor}`}>
                  Pristilbud
                </Link>
              </li>
              <li>
                <Link
                  href={`https://partners.no/salgsprosessen?alias=${kontor}`}
                >
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
              <p className="text-[1.5rem] ">
                Om Advanti {kontor === "alta" ? "Alta" : "Bodø"}
              </p>
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
                <Link href={`https://bolignytt${kontor}.no`}>
                  {`Bolignytt`}
                </Link>
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
        </nav>
      </div>
    </div>
  );
}
