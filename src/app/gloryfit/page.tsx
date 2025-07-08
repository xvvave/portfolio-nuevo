import Navbar from "@/components/1 Navbar/Navbar"
import ScrollToTop from "@/components/fxscripts/scroll-to-top"
import Footer from "@/components/5 Footer/Footer"
import OptimizedImage from "@/components/optimized-image"

export const metadata = {
  title: "GloryFit | App de entrenamiento personalizado | Lautaro R. Temperini",
  description:
    "GloryFit es una app de fitness rediseñada para el smartwatch Q18. Un proyecto de UX/UI enfocado en la personalización de rutinas a partir de datos biométricos, con especial énfasis en confianza, progresión gradual y diseño accesible.",
  keywords:
    "GloryFit, UX/UI, smartwatch Q18, diseño de experiencia, rutinas personalizadas, datos biométricos, onboarding, confianza, Lautaro Temperini, fitness app, caso de estudio",
  openGraph: {
    title: "GloryFit | App de entrenamiento personalizado | Lautaro R. Temperini",
    description:
      "App de fitness diseñada para personalizar rutinas según datos biométricos. Un enfoque estratégico de UX/UI que reduce fricción y construye confianza desde el primer uso.",
    url: "https://temperini.vercel.app/gloryfit",
    siteName: "Temperini Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://temperini.vercel.app/images/gloryfit-logo.png",
        width: 800,
        height: 600,
        alt: "Logo de GloryFit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GloryFit | App de entrenamiento personalizado | Lautaro R. Temperini",
    description:
      "Diseño UX/UI para una app de entrenamiento inteligente. Rutinas adaptadas, onboarding progresivo y decisiones basadas en datos reales de usuarios.",
    images: ["https://temperini.vercel.app/images/gloryfit-logo.png"],
  },
}

export default function GloryFitPage() {
  return (
    <div className="page-transition">
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20 lg:pt-24">
        <div className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10">
          <h1
            className="text-4xl md:text-6xl lg:text-8xl xl:text-[140px] font-semibold leading-tight xl:leading-[168px] text-[#F2F2F2] mb-8 md:mb-12 lg:mb-16"
            style={{ fontFamily: "Neue Haas Grotesk Display Pro, sans-serif" }}
          >
            GLORYFIT
          </h1>
          <div>
            <div className="mb-12">
              <p
                className="text-xl xl:text-[28px] font-semibold leading-relaxed xl:leading-[38px] text-[#F2F2F2] mb-8"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Rutinas personalizadas a partir de tus datos
              </p>
              <p className="text-lg text-[#A6A6A6] leading-relaxed mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>
                UX/UI para smartwatch Q18
              </p>
              <p className="text-base text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                Diseñamos una experiencia móvil que transforma datos biométricos en rutinas adaptadas, accesibles y
                motivadoras. El objetivo fue claro: generar la confianza suficiente para que el usuario comparta
                información sensible a cambio de recomendaciones que realmente impacten en su salud.
              </p>
            </div>

            <div className="space-y-16">
              {/* Mi rol */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Mi rol
                </h2>
                <p className="text-[#A6A6A6] leading-relaxed mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Mi aporte específico en el proyecto:
                </p>
                <ul className="text-[#A6A6A6] space-y-3 leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <li>• Investigación cualitativa sobre barreras al ingreso de datos biométricos.</li>
                  <li>• Diseño del flujo de onboarding y personalización de rutina.</li>
                  <li>• Construcción del sistema visual completo (tipografía, color, iconografía, componentes).</li>
                  <li>• Prototipado funcional en Figma para Android, validado con usuarios reales.</li>
                </ul>
              </section>

              {/* El reto */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  El reto
                </h2>
                <div className="space-y-4 text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <p>
                    GloryFit venía preinstalada en el smartwatch Q18, un wearable económico dirigido a un público
                    amplio. Su promesa: registrar pasos, frecuencia cardíaca, sueño, y ofrecer rutinas básicas de
                    entrenamiento.
                  </p>
                  <p>
                    Pero al usarla, el problema se hacía evidente. La interfaz era arbitraria, el onboarding caótico, y
                    las rutinas, genéricas. No había una experiencia que conectara con el usuario ni que justificara por
                    qué debía compartir sus datos.
                  </p>
                  <p>
                    Desde el principio, el foco del rediseño fue replantear esa lógica: ¿cómo construimos una
                    experiencia que invite, no imponga? ¿Cómo logramos que el usuario entienda para qué sirve dar su
                    edad, peso o historial médico sin que eso genere fricción o sospecha?
                  </p>
                </div>
              </section>

              {/* Investigación y descubrimiento */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Investigación y descubrimiento
                </h2>
                <div className="space-y-4 text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <p>
                    Arrancamos mapeando los puntos de fricción en apps de fitness existentes. Hicimos entrevistas breves
                    a usuarios de wearables, encuestas sobre privacidad de datos y benchmarks de plataformas como Google
                    Fit, Zepp y MiFitness. También probamos GloryFit tal como venía, para detectar los errores más
                    flagrantes.
                  </p>
                  <p>
                    Un patrón se repetía: los usuarios estaban dispuestos a compartir datos biométricos si percibían
                    valor inmediato. No al final del onboarding. No después de cinco pantallas. Sino en el momento.
                    Además, la falta de claridad sobre el uso de los datos generaba desconfianza y abandono.
                  </p>
                </div>
              </section>

              {/* Estrategia de diseño */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Estrategia de diseño
                </h2>
                <div className="space-y-4 text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <p>
                    Tomamos una decisión clave: el valor tenía que mostrarse antes que la recolección de datos. El flujo
                    debía ser progresivo, pero no lento. Simple, pero no superficial. Transparente, sin caer en
                    tecnicismos.
                  </p>
                  <p>Dividimos la experiencia en dos grandes momentos:</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-[#F2F2F2] mb-2">
                        Primero, el ingreso gradual y justificado de información.
                      </h4>
                      <p>
                        Pedimos solo lo esencial al inicio: edad, nivel de actividad, objetivos. Más adelante, una vez
                        que el usuario veía lo que la app podía ofrecer, le pedíamos datos más sensibles como peso o
                        historial médico. Cada dato venía acompañado de una explicación contextual: por qué lo pedimos,
                        cómo se usa, y qué gana el usuario a cambio.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#F2F2F2] mb-2">
                        Segundo, la personalización visible desde el inicio.
                      </h4>
                      <p>
                        Apenas completado el paso básico, el usuario accedía al módulo &quot;Mi Rutina&quot;, donde ya podía ver
                        ejercicios sugeridos según su perfil. Nada de listas genéricas: cada rutina tenía una
                        justificación visible —por ejemplo, &quot;sugerido por tu edad y nivel de actividad&quot;— y ofrecía
                        ajustes en intensidad, foco muscular o duración. Esto reforzaba una lógica simple pero poderosa:
                        dar un dato equivale a recibir algo valioso.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* User Flow */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <div className="mb-8 bg-[#F2F2F2] rounded-lg">
                  <OptimizedImage
                    src="/images/gloryfit/UserFlow.webp"
                    alt="Diagrama de flujo de usuario de GloryFit mostrando el proceso de configuración y personalización de rutinas"
                    className="w-full max-h-screen object-contain rounded-lg border-2 border-[#A6A6A6]"
                    width={1200}
                    height={800}
                  />
                </div>
              </section>

              {/* El sistema detrás */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  El sistema detrás
                </h2>
                <div className="space-y-4 text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <p>
                    Diseñamos un sistema conceptual de personalización que cruzaba edad, nivel de actividad, historial
                    médico y objetivos. Este sistema no era solo interno: el usuario podía ver por qué se le recomendaba
                    cada ejercicio.
                  </p>
                  <div className="bg-[#0F0F0F] p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-[#F2F2F2] mb-3">Por ejemplo:</h4>
                    <ul className="space-y-2">
                      <li>• Un usuario sedentario de más de 40 años recibía una rutina progresiva de bajo impacto.</li>
                      <li>• Un usuario activo sin lesiones, una rutina de intensidad media-alta.</li>
                      <li>
                        • Si había historial de lesiones, se priorizaban ejercicios de bajo riesgo o rehabilitación.
                      </li>
                    </ul>
                  </div>
                  <p>
                    Desarrollamos además un módulo de transparencia algorítmica. Cada recomendación podía desplegar su
                    lógica. La idea no era &quot;maravillar&quot; con inteligencia artificial, sino mostrar que la app piensa,
                    pero no oculta.
                  </p>
                </div>
              </section>

              {/* Iteraciones y validación */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Iteraciones y validación
                </h2>
                <div className="space-y-4 text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <p>
                    Durante los primeros testeos funcionales, identificamos un momento crítico: cuando pedíamos datos
                    sensibles demasiado pronto (como peso o historial médico), el flujo se caía. Incluso usuarios que ya
                    habían avanzado abandonaban la experiencia.
                  </p>
                  <p>
                    Lo solucionamos reordenando el flujo: mostramos primero una rutina preliminar, y luego pedimos los
                    datos más sensibles para refinarla. También incorporamos tooltips visuales explicativos y una vista
                    previa del beneficio concreto.
                  </p>
                  <p className="font-semibold text-[#F2F2F2]">
                    ¿Resultado? Un onboarding más completo, con mayor sensación de seguridad y control por parte del
                    usuario.
                  </p>
                </div>
              </section>

              {/* Style Guide */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <div className="mb-8 bg-[#F2F2F2] rounded-lg">
                  <OptimizedImage
                    src="/images/gloryfit/StyleTile.webp"
                    alt="Guía de estilo de GloryFit incluyendo paleta de colores, tipografía, componentes de interfaz e iconografía"
                    className="w-full max-h-screen object-contain rounded-lg border-2 border-[#A6A6A6]"
                    width={1200}
                    height={800}
                  />
                </div>
              </section>

              {/* Diseño de experiencia */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Diseño de experiencia
                </h2>
                <div className="space-y-4 text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <p>
                    La experiencia debía transmitir claridad, control y salud. No glamour ni &quot;fitness extremo&quot;. Así que
                    fuimos por una interfaz limpia, con lenguaje claro y componentes que acompañaran ese tono.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-[#F2F2F2] mb-3">Construimos:</h4>
                      <ul className="space-y-2">
                        <li>• Botones segmentados para elegir nivel de actividad y tiempo</li>
                        <li>• Dropdowns con ejemplos reales (&quot;Lesión de rodilla&quot;, &quot;Objetivo: retomar actividad&quot;)</li>
                        <li>• Tooltips animados que explicaban para qué se usa cada dato</li>
                        <li>• FAB central siempre visible para iniciar la rutina</li>
                        <li>• Indicadores de progreso en cada paso del onboarding</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#F2F2F2] mb-3">Sistema visual:</h4>
                      <p>
                        El sistema visual apostó a la calma y la confianza: verdes suaves como color primario, grises
                        neutros para la información, tipografía Roboto por su legibilidad en Android, e iconografía
                        médica sin parecer técnica.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Aprendizajes clave */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Aprendizajes clave
                </h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#F2F2F2] mb-2">
                      El momento en que se pide un dato es tan importante como el dato mismo.
                    </h4>
                    <p className="text-[#A6A6A6]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      El ritmo del onboarding define la tasa de abandono. Pedir permiso sin mostrar valor es un callejón
                      sin salida.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F2F2F2] mb-2">
                      Transparencia supera a la automatización.
                    </h4>
                    <p className="text-[#A6A6A6]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Los usuarios prefieren saber por qué se les recomienda algo, aunque no sea perfecto, antes que
                      recibir una rutina &quot;mágica&quot; sin explicación.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F2F2F2] mb-2">El control genera confianza.</h4>
                    <p className="text-[#A6A6A6]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Dejar que el usuario ajuste su rutina, incluso si el sistema es inteligente, refuerza la
                      percepción de seguridad.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F2F2F2] mb-2">
                      Los usuarios mayores de 35 años valoran claridad, explicaciones y lenguaje visual sencillo.
                    </h4>
                    <p className="text-[#A6A6A6]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Rechazan experiencias visualmente sobrecargadas o sin lógica aparente.
                    </p>
                  </div>
                </div>
              </section>

              {/* App Interface */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <div className="mb-8 bg-[#F2F2F2] rounded-lg">
                  <OptimizedImage
                    src="/images/gloryfit/CardsGloryfit.webp"
                    alt="Interfaces de la aplicación GloryFit mostrando pantallas de selección de entrenamiento y detalles de rutina"
                    className="w-full max-h-screen object-contain rounded-lg border-2 border-[#A6A6A6]"
                    width={1200}
                    height={800}
                  />
                </div>
              </section>

              {/* Validación y feedback */}
              <section className="bg-[#1A1A1A] p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Validación y feedback
                </h2>
                <div className="space-y-4 text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <p>
                    Aunque el proyecto no llegó a producción ni contó con métricas duras, hicimos validación con
                    usuarios afines al público objetivo: adultos entre 35 y 55 años que buscaban retomar hábitos de
                    entrenamiento.
                  </p>
                  <div className="bg-[#0F0F0F] p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-[#F2F2F2] mb-3">Los testeos indicaron:</h4>
                    <ul className="space-y-2">
                      <li>
                        • Alta aceptación del flujo progresivo, siempre que el valor estuviera explícito desde el inicio
                      </li>
                      <li>• Muy buena recepción del sistema de personalización visible</li>
                      <li>• Confianza reforzada cuando se permitía ajustar manualmente la rutina generada</li>
                      <li>
                        • Resistencia puntual a la conexión automática con el smartwatch si no se contextualizaba el
                        beneficio
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 p-6 rounded-lg border border-green-800/30">
                    <p className="font-semibold text-[#F2F2F2] mb-2">Insight central:</p>
                    <p>
                      Las personas están dispuestas a compartir datos biométricos si el valor es inmediato, tangible y
                      personal.
                    </p>
                    <p className="mt-2 italic">En otras palabras, si no ven para qué sirve un dato, no lo entregan.</p>
                  </div>
                </div>
              </section>

              {/* Conclusión */}
              <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-800/30">
                <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Conclusión
                </h2>
                <div className="space-y-4 text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <p className="text-lg font-semibold text-[#F2F2F2]">GloryFit nos dejó un aprendizaje potente:</p>
                  <p className="text-xl">
                    La confianza no se gana con visuales planos, sino con interacciones que devuelven valor real,
                    respetan el ritmo del usuario y explican lo que hacen.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop size={48} />
    </div>
  )
}
