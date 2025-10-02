"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { ContactDialog } from "@/components/contact-dialog"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://www.unir.net/wp-content/uploads/2022/01/rrhhcabecera.jpg"
          alt="Recursos Humanos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-on-scroll text-balance text-white">
            Donde el <span className="text-primary">talento</span> encuentra su{" "}
            <span className="text-primary">propósito</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 mb-8 animate-on-scroll leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Conectamos empresas con el talento humano que impulsa el crecimiento. Soluciones integrales de recursos
            humanos para organizaciones que buscan excelencia.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll"
            style={{ animationDelay: "0.4s" }}
          >
            <ContactDialog
              trigger={
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-lg px-8 font-semibold">
                  Comenzar ahora
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary text-primary hover:bg-primary/10 bg-transparent font-semibold"
            >
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
