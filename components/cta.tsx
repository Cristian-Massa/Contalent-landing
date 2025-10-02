"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { ContactDialog } from "@/components/contact-dialog"

export function CTA() {
  const ctaRef = useRef<HTMLElement>(null)

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

    const elements = ctaRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ctaRef} className="py-24 px-4 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll text-balance">
            ¿Listo para transformar tu <span className="text-primary">equipo</span>?
          </h2>
          <p
            className="text-lg text-muted-foreground mb-8 animate-on-scroll leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Contáctanos hoy y descubre cómo podemos ayudarte a construir el equipo de alto rendimiento que tu
            organización necesita.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll"
            style={{ animationDelay: "0.4s" }}
          >
            <ContactDialog
              trigger={
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-lg px-8">
                  <Mail className="mr-2" size={20} />
                  Enviar mensaje
                </Button>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Phone className="mr-2" size={20} />
              Llamar ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
