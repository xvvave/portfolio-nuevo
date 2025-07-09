import Navbar from "@/components/1 Navbar/Navbar"
import ScrollToTop from "@/components/fxscripts/scroll-to-top"
import Footer from "@/components/5 Footer/Footer"
import SectionIntro from "@/components/sections/SectionIntro"
import TwoColumn from "@/components/sections/TwoColumn"
import GridTwoByTwo from "@/components/sections/GridTwoByTwo"
import InsightCard from "@/components/sections/InsightCard"
import ConclusionBlock from "@/components/sections/ConclusionBlock"
import SectionBlock from "@/components/sections/SectionBlock"
import SectionWrapper from "@/components/sections/SectionWrapper"

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
    images: [
      "https://temperini.vercel.app/og-image.jpg",
    ],
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
              Una landing directa, oscura y sin vueltas. <br />
              Diseñada para captar atención y convertir oyentes en comunidad, en menos de 10 segundos.
            </>
          }
          align="left"
          className="min-h-screen py-24 md:py-32"
          titleClassName="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] 2xl:text-[200px] font-semibold leading-tight text-[#F2F2F2]"
          isMainTitle
        />

        {/* Brief real: reto */}
        <SectionIntro
          title="El brief real: un reto con límites claros"
          description={
            <>
              <span className="block text-[#A6A6A6] italic mb-2">"Tenés que convertir oyentes en leads. Sin métricas. Sin data. Solo criterio y decisiones que funcionen."</span>
              Desafío académico, mentalidad profesional.<br />
              Nuestro objetivo fue claro: captar público joven a través de contenido exclusivo y llevarlo a otros streamings de Vorterix.
            </>
          }
          align="left"
          className="py-12"
          titleClassName="text-3xl font-bold text-[#F2F2F2]"
        />

        {/* El punto de partida: necesidad de la landing */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">2. ¿Por qué hacía falta esta landing?</h2>
              <ul className="list-disc pl-5 text-[#A6A6A6] space-y-2">
                <li>La web de Vorterix no reflejaba el espíritu de Paren la Mano.</li>
                <li>La audiencia joven (16–30) se enganchaba en Twitch o TikTok, pero no se quedaba.</li>
                <li>Había contenido exclusivo, pero sin un canal claro para comunicarlo.</li>
                <li>El sitio general no tenía CTA, ni storytelling, ni sentido de comunidad.</li>
              </ul>
              <p className="text-[#A6A6A6]">Esta landing buscó resolver eso: ser una entrada directa, rápida y relevante al universo Vorterix desde PLM.</p>
            </div>
          }
          right={
            <div className="border border-[#A6A6A6] rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold text-[#F2F2F2] mb-4">Paren la Mano</h3>
              <p className="text-[#A6A6A6] text-lg mb-6">Show estrella de Vorterix</p>
              <div className="flex justify-center space-x-3">
                <div className="w-4 h-4 bg-[#A6A6A6] rounded-full"></div>
                <div className="w-4 h-4 bg-[#595959] rounded-full"></div>
                <div className="w-4 h-4 bg-[#A6A6A6] rounded-full"></div>
              </div>
            </div>
          }
          reverse
        />

        {/* Entender al público: investigación y tono */}
        <SectionWrapper>
          <SectionIntro
            title="El diseño empieza por ellos"
            description={
              <>
                Estudiamos el tono y contenido del programa, analizamos redes, y observamos qué funcionaba en medios como Olga y LuzuTV.<br />
                <br />
                <span className="block text-[#A6A6A6] font-semibold mb-2">La audiencia no quería “algo lindo”. Quería algo que hablara como ellos:</span>
                <ul className="list-disc pl-5 text-[#A6A6A6] mb-2">
                  <li>Ácido, informal, sin rodeos.</li>
                  <li>Que no sobreexpliquen.</li>
                  <li>Que les den algo a cambio.</li>
                </ul>
                Insights reales que guiaron decisiones:
                <ul className="list-disc pl-5 text-[#A6A6A6] mt-2">
                  <li>Paleta vibrante (verde/violeta): mantiene la energía de PLM.</li>
                  <li>Tipografías pesadas, lenguaje directo: refleja el tono del show.</li>
                  <li>Contenido exclusivo visible desde el primer scroll: valor antes de pedir datos.</li>
                </ul>
                <p className="text-[#A6A6A6] mt-2">
                  No diseñamos para una audiencia general. Diseñamos para Agustín, que escucha Twitch mientras edita en Premiere, que odia los mails largos y que quiere algo que lo haga reír.
                </p>
              </>
            }
            align="left"
            className="py-12"
            titleClassName="text-3xl font-bold text-[#F2F2F2]"
          />
        </SectionWrapper>

        {/* Decisiones de diseño */}
        <SectionWrapper>
          <SectionIntro
            title="Conversión sin perder identidad  "
            description={
              <>
                Decisiones de diseño:
                <ul className="list-disc pl-5 text-[#A6A6A6] mb-2">
                  <li>Hero con GIF + CTA inmediato: impacto en los primeros 3 segundos.</li>
                  <li>Formulario duplicado (inicio y fin): máxima visibilidad sin repetir visualmente.</li>
                  <li>Carrusel de clips: muestra el valor de la comunidad antes de pedir el email.</li>
                  <li>Scroll modular y jerarquías claras: UX sin fricción.</li>
                  <li>Narrativa FOMO: “Accedé a lo que otros se pierden”.</li>
                </ul>
              </>
            }
            align="left"
            className="py-12"
            titleClassName="text-3xl font-bold text-[#F2F2F2]"
          />
        </SectionWrapper>

        {/* Iteraciones clave */}
        <SectionWrapper>
          <SectionIntro
            title="Iteraciones clave (basadas en conflicto real)"
            description={
              <>
                <ul className="list-disc pl-5 text-[#A6A6A6] mb-2">
                  <li>Eliminamos secciones que nos gustaban, pero no aportaban a la conversión.</li>
                  <li>Rediseñamos la sección de clips 3 veces hasta que funcionó bien en mobile.</li>
                  <li>Discutimos si mostrar staff o contenido de otros programas.<br /><span className="text-[#595959]">Ganó la segunda opción. La comunidad no se enamora de nombres: se queda por el contenido.</span></li>
                </ul>
                Este tipo de decisiones no crearon la versión más linda. Crearon la versión que convertía.
                Y entender eso fue una de las mejores lecciones del proyecto.
              </>
            }
            align="left"
            className="py-12"
            titleClassName="text-3xl font-bold text-[#F2F2F2]"
          />
        </SectionWrapper>

        {/* Aprendizajes */}
        <SectionWrapper>
          <SectionIntro
            title="UX sin narrativa es solo UI"
            description={
              <>
                <ul className="list-disc pl-5 text-[#A6A6A6] mb-2">
                  <li>Aprendí que sin contenido real, el diseño es solo una maqueta. Que sin una narrativa concreta, la conversión es suerte. Y que sin reflejar la voz del programa, todo el esfuerzo es invisible.</li>
                </ul>
              </>
            }
            align="left"
            className="py-12"
            titleClassName="text-3xl font-bold text-[#F2F2F2]"
          />
        </SectionWrapper>

        {/* Cierre / CTA final */}
        <ConclusionBlock className="border border-[#A6A6A6] rounded-3xl mb-12">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-[#F2F2F2] mb-6">¿Qué fue esto realmente?</h2>
            <div className="space-y-6 text-[#A6A6A6] leading-relaxed max-w-3xl mx-auto">
              <p className="text-lg">
                Un laboratorio de decisiones: diseño, storytelling, contenido, límites técnicos.<br />
                Y sobre todo, una prueba de cómo convertir atención en comunidad sin recursos, pero con criterio.<br /><br />
                Pude confirmar que donde hay límite técnico y poco tiempo, hay lugar para criterio.<br />
                Y eso es lo que más disfruto diseñando.
              </p>
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
