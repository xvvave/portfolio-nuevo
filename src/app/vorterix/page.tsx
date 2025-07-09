import Navbar from "@/components/1 Navbar/Navbar"
import ScrollToTop from "@/components/fxscripts/scroll-to-top"
import Footer from "@/components/5 Footer/Footer"
import SectionIntro from "@/components/sections/SectionIntro"
import TwoColumn from "@/components/sections/TwoColumn"
import SectionWrapper from "@/components/sections/SectionWrapper"
import FullImage from "@/components/sections/FullImage"
import ContentCard from "@/components/sections/ContentCard"
import ConclusionBlock from "@/components/sections/ConclusionBlock"

export const metadata = {
  title: "Paren la Mano | Landing que convierte audiencia en comunidad | Lautaro R. Temperini",
  description:
    "Diseñé una landing de conversión para Paren la Mano (Vorterix), alineando tono, identidad visual y propuesta de valor. Sin frameworks. Sin métricas. Con decisiones de diseño real.",
  keywords:
    "Vorterix - Landing Page, Vorterix, Paren la Mano, UX/UI, landing page, FOMO, comunidad, suscripciones, identidad visual, Lautaro Temperini, diseño web",
  openGraph: {
    title: "Paren la Mano | Landing que convierte audiencia en comunidad | Lautaro R. Temperini",
    description:
      "Diseñé una landing de conversión para Paren la Mano (Vorterix), alineando tono, identidad visual y propuesta de valor. Sin frameworks. Sin métricas. Con decisiones de diseño real.",
    url: "https://temperini.vercel.app/level-up",
    siteName: "Temperini Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://temperini.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vorterix - Landing Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vorterix - Landing Page | Landing que convierte oyentes en comunidad | Lautaro R. Temperini",
    description:
      "Experiencia digital que transforma oyentes en comunidad activa. Diseño enfocado en FOMO, identidad visual y conversión.",
    images: ["https://temperini.vercel.app/og-image.jpg"],
  },
}

export default function VorterixLandingPage() {
  return (
    <div className="page-transition">
      <header>
        <Navbar />
      </header>
      <main>
        {/* Hero: Presentación del proyecto */}
        <SectionIntro
          title="VORTERIX"
          subtitle="Paren la mano - Landing Page"
          description={
            <>
              Una landing sin vueltas. <br />
              Diseñada para captar atención y convertir oyentes en comunidad, en menos de 10 segundos.
            </>
          }
          align="left"
          className="min-h-screen py-22 md:py-24"
          isMainTitle
          size="xl"
        />

        {/* Brief y Por qué hacía falta - Cards con altura igual */}
        <TwoColumn
          size="lg"
          alignItems="start"
          left={
            <div>
              <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6">El brief real: un reto con límites claros</h2>
              <blockquote className="text-[#A6A6A6] italic mb-6 text-lg border-l-4 border-purple-500 pl-4">
                "Tenés que convertir oyentes en leads. Sin métricas. Sin data. Solo criterio y decisiones que funcionen."
              </blockquote>
              <p className="text-[#A6A6A6] leading-relaxed">
                Desafío académico, mentalidad profesional.<br />
                Nuestro objetivo fue claro: captar público joven a través de contenido exclusivo y llevarlo a otros streamings de Vorterix.
              </p>
            </div>
          }
          right={
            <div>
              <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6">¿Por qué hacía falta esta landing?</h2>
              <ul className="text-[#A6A6A6] space-y-3 mb-6">
                <li>La web de Vorterix no reflejaba el espíritu de Paren la Mano.</li>
                <li>La audiencia joven (16-30) se enganchaba en Twitch o TikTok, pero no se quedaba.</li>
                <li>Había contenido exclusivo, pero sin un canal claro para comunicarlo.</li>
                <li>El sitio general no tenía CTA, ni storytelling, ni sentido de comunidad.</li>
              </ul>
              <p className="text-[#A6A6A6] leading-relaxed">
                Esta landing buscó resolver eso: ser una entrada directa, rápida y relevante al universo Vorterix desde PLM.
              </p>
            </div>
          }
        />

        {/* Logo Vorterix */}
        <SectionWrapper size="md">
          <FullImage
            src="/images/vorterixImages/VorterixLogo.webp"
            alt="Logo Vorterix"
            className="w-full block mx-auto h-auto"
            border={false}
          />
        </SectionWrapper>

        {/* Entender al público */}
        <SectionIntro
          title={
            <>
              El diseño <br />
              empieza por ellos
            </>
          }
          description="Estudiamos el tono y contenido del programa, analizamos redes, y observamos qué funcionaba en medios como Olga y LuzuTV."
          align="left"
          size="md"
        />

        {/* Insights en cards con altura igual */}
        <TwoColumn
          equalHeight
          size="md"
          left={
            <div className="flex-1 rounded-2xl p-8 bg-[#9C96A4]/10 border-2 border-[#A6A6A6]/10">
              <h3 className="text-[#F2F2F2] font-semibold text-xl mb-4">La audiencia no quería "algo lindo"</h3>
              <p className="text-[#A6A6A6] mb-4">Quería algo que hablara como ellos:</p>
              <ul className="text-[#A6A6A6] space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">🡆</span>
                  Ácido, informal, sin rodeos.
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">🡆</span>
                  Que no sobreexpliquen.
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">🡆</span>
                  Que les den algo a cambio.
                </li>
              </ul>
            </div>
          }
          right={
            <div className="flex-1 rounded-2xl p-8 bg-[#9C96A4]/10 border-2 border-[#A6A6A6]/10">
              <h3 className="text-[#F2F2F2] font-semibold text-xl mb-4">Insights que guiaron decisiones</h3>
              <ul className="text-[#A6A6A6] space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">🡆</span>
                  <div>
                    <strong className="text-[#F2F2F2]">Paleta vibrante (verde/violeta):</strong> mantiene la energía de PLM.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">🡆</span>
                  <div>
                    <strong className="text-[#F2F2F2]">Tipografías pesadas:</strong> refleja el tono del show.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">🡆</span>
                  <div>
                    <strong className="text-[#F2F2F2]">Contenido exclusivo visible:</strong> valor antes de pedir datos.
                  </div>
                </li>
              </ul>
            </div>
          }
        />

        {/* Quote destacado */}
        <SectionWrapper size="sm">
          <div className="text-center">
            <p className="text-[#A6A6A6] text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
              No diseñamos para una audiencia general. Diseñamos para Agustín, que escucha Twitch mientras edita en
              Premiere, que odia los mails largos y que quiere algo que lo haga reír.
            </p>
          </div>
        </SectionWrapper>

        {/* Colores y Tipografía */}
        <TwoColumn
          size="md"
          left={
            <FullImage
              src="/images/vorterixImages/VorterixColors.webp"
              alt="Paleta de colores Vorterix"
              className="w-full h-auto"
              border={false}
            />
          }
          right={
            <FullImage
              src="/images/vorterixImages/VorterixFont.webp"
              alt="Tipografía Vorterix"
              className="w-full h-auto"
              border={false}
            />
          }
        />

        {/* Hero y Referencias */}
        <TwoColumn
          size="md"
          left={
            <div className="h-full rounded-lg overflow-hidden" style={{backgroundColor: '#1A1F26'}}>
              <video
                src="/images/vorterixImages/VorterixHero.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          }
          right={
            <FullImage
              src="/images/vorterixImages/VorterixRefes.webp"
              alt="Referencias de diseño Vorterix"
              className="w-full h-auto"
              border={false}
            />
          }
        />

        {/* Conversión sin perder identidad */}
        <TwoColumn
          size="lg"
          equalHeight
          left={
            <div className="h-[700px] rounded-2xl overflow-hidden" style={{backgroundColor: '#1A1F26'}}>
              <video
                src="/images/vorterixImages/VorterixFeedback.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
            </div>
          }
          right={
            <div className="flex flex-col h-full justify-start pt-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2] mb-4">Conversión sin perder identidad</h2>
              <div className="space-y-2 text-[#A6A6A6]">
                <div className="text-lg font-semibold text-[#F2F2F2] mb-1">Decisiones de diseño:</div>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>
                      <strong className="text-[#F2F2F2]">Hero con GIF + CTA inmediato:</strong> impacto en los primeros 3 segundos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>
                      <strong className="text-[#F2F2F2]">Formulario duplicado:</strong> máxima visibilidad sin repetir visualmente.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>
                      <strong className="text-[#F2F2F2]">Carrusel de clips:</strong> muestra el valor antes de pedir el email.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>
                      <strong className="text-[#F2F2F2]">Narrativa FOMO:</strong> "Accedé a lo que otros se pierden".
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          }
        />

        {/* Video Reel full width */}
        <SectionWrapper size="lg">
          <div className="h-[800px] rounded-2xl overflow-hidden" style={{backgroundColor: '#1A1F26'}}>
            <video
              src="/images/vorterixImages/VorterixReel.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </SectionWrapper>

        {/* Iteraciones y Mockup */}
        <TwoColumn
          size="lg"
          equalHeight
          left={
            <ContentCard equalHeight>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6">Iteraciones clave</h2>
                <div className="space-y-4 text-[#A6A6A6]">
                  <p className="text-sm text-[#595959] italic mb-4">(basadas en conflicto real)</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 mt-1">×</span>
                      Eliminamos secciones que nos gustaban, pero no aportaban a la conversión.
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">↻</span>
                      Rediseñamos la sección de clips 3 veces hasta que funcionó bien en mobile.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1">?</span>
                      Discutimos si mostrar staff o contenido de otros programas.
                    </li>
                  </ul>
                  <p className="text-[#595959] italic">
                    Ganó la segunda opción. La comunidad no se enamora de nombres: se queda por el contenido.
                  </p>
                  <div className="border-t border-[#333] pt-4 mt-6">
                    <p className="text-[#F2F2F2] font-medium">
                      Este tipo de decisiones no crearon la versión más linda. Crearon la versión que convertía.
                    </p>
                    <p className="text-[#A6A6A6] mt-2">Y entender eso fue una de las mejores lecciones del proyecto.</p>
                  </div>
                </div>
              </div>
            </ContentCard>
          }
          right={
            <div className="h-full flex items-start justify-start rounded-2xl overflow-hidden bg-[#181818]/40 border-2 border-[#A6A6A6]/10">
              <img
                src="/images/vorterixImages/VorterixMockup.webp"
                alt="Mockup final de la landing Vorterix"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          }
        />

        {/* UX sin narrativa */}
        <SectionIntro
          title={
            <>
              UX sin narrativa<br />
              es solo UI
            </>
          }
          description={
            <div className="space-y-4">
              <p className="text-lg">
                Aprendí que sin contenido real, el diseño es solo una maqueta. Que sin una narrativa concreta, la
                conversión es suerte. Y que sin reflejar la voz del programa, todo el esfuerzo es invisible.
              </p>
            </div>
          }
          align="left"
          size="md"
        />

        {/* Conclusión */}
        <ConclusionBlock className="border border-[#A6A6A6] rounded-3xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-[#F2F2F2]">¿Qué fue esto realmente?</h2>
            <div className="space-y-6 text-[#A6A6A6] leading-relaxed max-w-3xl mx-auto">
              <p className="text-lg">
                Un laboratorio de decisiones: diseño, storytelling, contenido, límites técnicos.
                <br />Y sobre todo, una prueba de cómo convertir atención en comunidad sin recursos, pero con criterio.
              </p>
              <div className="border-t border-[#333] pt-6">
                <p className="text-xl text-[#F2F2F2] font-medium">
                  Pude confirmar que donde hay límite técnico y poco tiempo, hay lugar para criterio.
                  <br />Y eso es lo que más disfruto diseñando.
                </p>
              </div>
            </div>
          </div>
        </ConclusionBlock>
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop size={48} />
    </div>
  )
}
