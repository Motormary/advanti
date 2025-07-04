import Button from '@/ui/components/button'
import TopNav from '@/ui/components/nav/top-nav'
import { ArrowRight, Calculator, ChevronRight, Home, Users } from 'lucide-react'
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
            className="relative overflow-hidden max-w-[80em] mx-auto">
            <h1 className="sr-only">Banner section</h1>
            <div className="absolute flex flex-col gap-4 items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max select-none">
              <p className="text-white text-shadow-xs text-[clamp(1.5rem,5vw,3.75rem)]">
                Ditt neste kapittel starter her
              </p>
              <Link
                href={`https://partners.no/kontor/${kontor}/verdivurdering`}
                className="px-4 py-3 rounded-xs text-center bg-secondary-blue">
                Gratis verdivurdering{' '}
                <ArrowRight className="size-4 inline-block" />
              </Link>
            </div>
            <video autoPlay controls={false} muted loop>
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* All video snippets are created by: Max Vakhtbovycn - https://www.pexels.com/@heyho/ */}
          </section>
          <section className="py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Column */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
                      Vi ønsker deg et trygt boligkjøp
                    </h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                      Lurer du på hvor du bør starte? Det er viktig med oversikt, og det kan du få av oss gjennom en uforpliktende prat.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calculator className="h-5 w-5 text-stone-700" />
                        <span className="text-stone-700">
                          Free market analysis
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Home className="h-5 w-5 text-stone-700" />
                        <span className="text-stone-700">
                          Professional property assessment
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-stone-700" />
                        <span className="text-stone-700">
                          Expert local knowledge
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
                      Looking for a
                      <br />
                      real estate agent?
                    </h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                      Our dedicated team of professionals is here to guide you
                      through every step of your real estate journey. Whether
                      buying or selling, we're committed to achieving the best
                      results for you.
                    </p>
                    <Button className='bg-black hover:bg-black/80 text-white'>
                      Meet Our Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 w-full bg-secondary-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-stone-900 mb-4">
                  Our Services
                </h2>
                <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                  Comprehensive real estate solutions tailored to your needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-stone-200 hover:shadow-lg transition-shadow">
                  <div className="p-8 text-center">
                    <Home className="h-12 w-12 text-stone-700 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-stone-900 mb-3">
                      Property Sales
                    </h3>
                    <p className="text-stone-600">
                      Expert guidance through the entire selling process with
                      maximum market exposure.
                    </p>
                  </div>
                </div>

                <div className="border-stone-200 hover:shadow-lg transition-shadow">
                  <div className="p-8 text-center">
                    <Calculator className="h-12 w-12 text-stone-700 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-stone-900 mb-3">
                      Property Valuation
                    </h3>
                    <p className="text-stone-600">
                      Accurate market valuations using comprehensive data
                      analysis and local expertise.
                    </p>
                  </div>
                </div>

                <div className="border-stone-200 hover:shadow-lg transition-shadow">
                  <div className="p-8 text-center">
                    <Users className="h-12 w-12 text-stone-700 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-stone-900 mb-3">
                      Buyer Services
                    </h3>
                    <p className="text-stone-600">
                      Personalized assistance to find your perfect home in the
                      right neighborhood.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="min-h-[316px] py-16 bg-primary"></footer>
    </div>
  )
}
