"use client"

import { useEffect, useRef } from "react"
import { Search, GraduationCap, BarChart3, Users2, FileCheck, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Search,
    title: "Reclutamiento y Selección",
    description:
      "Identificamos y atraemos el talento que tu organización necesita con procesos eficientes y personalizados.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación y Desarrollo",
    description:
      "Programas de formación diseñados para potenciar las habilidades de tu equipo y alcanzar objetivos estratégicos.",
  },
  {
    icon: BarChart3,
    title: "Evaluación de Desempeño",
    description:
      "Sistemas de evaluación objetivos que impulsan el crecimiento profesional y la productividad organizacional.",
  },
  {
    icon: Users2,
    title: "Clima Organizacional",
    description:
      "Diagnóstico y mejora del ambiente laboral para crear espacios de trabajo más productivos y satisfactorios.",
  },
  {
    icon: FileCheck,
    title: "Consultoría en RRHH",
    description: "Asesoramiento estratégico para optimizar procesos, políticas y estructuras de recursos humanos.",
  },
  {
    icon: Briefcase,
    title: "Outsourcing de Personal",
    description:
      "Soluciones flexibles de gestión de personal que se adaptan a las necesidades cambiantes de tu negocio.",
  },
]

export function Services() {
  const servicesRef = useRef<HTMLElement>(null)

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

    const elements = servicesRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" ref={servicesRef} className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll text-balance">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p
            className="text-lg text-muted-foreground animate-on-scroll leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Ofrecemos soluciones integrales de recursos humanos adaptadas a las necesidades específicas de cada
            organización, desde startups hasta grandes corporaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
