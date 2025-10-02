import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-foreground">Conta</span>
              <span className="text-primary">lent</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Conectando talento con oportunidades para construir organizaciones
              excepcionales.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Reclutamiento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Capacitación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Outsourcing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-primary transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Casos de éxito
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trabaja con nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span>info@contalent.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone
                  size={20}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={20}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span>Cordoba, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Contalent. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-primary" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
