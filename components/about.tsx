"use client"

import { useEffect, useRef } from "react"
import { Target, Users, TrendingUp } from "lucide-react"

export function About() {
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = aboutRef.current?.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right",
    )
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={aboutRef} className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll text-balance">
            Transformamos la gestión del <span className="text-primary">talento humano</span>
          </h2>
          <p
            className="text-lg text-muted-foreground animate-on-scroll leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Somos una consultora especializada en recursos humanos que combina experiencia, innovación y un enfoque
            centrado en las personas para ayudar a las organizaciones a alcanzar su máximo potencial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center animate-on-scroll-left" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Conectar el talento adecuado con las oportunidades correctas, creando valor sostenible para empresas y
              profesionales.
            </p>
          </div>

          <div className="text-center animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Integridad, excelencia y compromiso con el desarrollo humano guían cada una de nuestras acciones y
              decisiones.
            </p>
          </div>

          <div className="text-center animate-on-scroll-right" style={{ animationDelay: "0.5s" }}>
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser la consultora de recursos humanos líder, reconocida por transformar organizaciones a través del
              talento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
