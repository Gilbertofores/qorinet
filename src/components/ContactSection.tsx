import { MessageCircle, Facebook, Instagram, Music } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  const whatsappNumber = "976830280";
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre sus servicios."
  );

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/51${whatsappNumber}?text=${whatsappMessage}`,
      color: "hover:bg-[#25D366] hover:text-white",
      description: "Respuesta inmediata",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:bg-[#1877F2] hover:text-white",
      description: "Síguenos",
    },
    {
      name: "TikTok",
      icon: Music,
      href: "#",
      color: "hover:bg-[#000000] hover:text-white",
      description: "Videos y tutoriales",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white",
      description: "Nuestros proyectos",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Motivational background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Brand Trust Section */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
              QORINET
            </h1>
            <p className="text-sm text-muted-foreground font-semibold tracking-widest">
              TU ALIADO TECNOLÓGICO DE CONFIANZA
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ¿Listo para Transformar tu Negocio?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-foreground font-semibold">
              En QORINET, convertimos tus desafíos tecnológicos en oportunidades de éxito
            </p>
            <p className="text-base text-muted-foreground">
              Con más de <span className="text-primary font-bold">años de experiencia</span> respaldándonos, 
              no solo ofrecemos servicios tecnológicos, ofrecemos <span className="text-accent font-semibold">soluciones que impulsan resultados reales</span>. 
              Cada proyecto que emprendemos lleva nuestro compromiso con la excelencia, la innovación y tu éxito.
            </p>
            <p className="text-base text-muted-foreground">
              💡 <span className="font-semibold text-foreground">¿Por qué miles de clientes confían en QORINET?</span> Porque 
              entregamos más que tecnología: entregamos tranquilidad, soporte continuo y resultados medibles. 
              Tu visión merece un equipo que la haga realidad con profesionalismo y dedicación absoluta.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2 text-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-semibold">Respuesta en minutos</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="font-semibold">Garantía 100% real</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-semibold">Soporte permanente</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-8 rounded-lg bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/30 shadow-[0_0_30px_rgba(0,150,255,0.15)] relative overflow-hidden">
            {/* Animated corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/20 to-transparent rounded-tr-full"></div>
            
            <div className="text-center mb-8 relative z-10">
              <div className="inline-block mb-3">
                <span className="px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wide">
                  🚀 Contacto Directo
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Hablemos de tu Proyecto - ¡Sin Compromiso!
              </h3>
              <p className="text-muted-foreground text-lg">
                Respuesta inmediata por WhatsApp • Cotización personalizada en minutos
              </p>
              <p className="text-sm text-primary font-semibold mt-2">
                ⚡ Más de 500 clientes satisfechos nos respaldan
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground mb-1">Llámanos o escríbenos</p>
                <p className="text-3xl font-bold text-primary">976 830 280</p>
              </div>
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open(`https://wa.me/51${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
                className="gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chatear por WhatsApp
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-lg bg-card border border-border hover:border-transparent transition-all duration-300 hover:shadow-lg text-center ${social.color}`}
              >
                <social.icon className="w-8 h-8 mx-auto mb-3 text-foreground group-hover:text-inherit transition-colors" />
                <h4 className="font-semibold text-foreground group-hover:text-inherit mb-1 transition-colors">
                  {social.name}
                </h4>
                <p className="text-xs text-muted-foreground group-hover:text-inherit/80 transition-colors">
                  {social.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,150,255,0.1),transparent_70%)]"></div>
            
            <div className="relative z-10 space-y-4">
              <p className="text-foreground text-lg">
                <span className="font-bold text-xl">⏰ Horario de atención:</span> Lunes a Sábado de 9:00 AM a 7:00 PM
              </p>
              <div className="max-w-2xl mx-auto space-y-2">
                <p className="text-base font-semibold text-foreground">
                  ⚠️ ¡No dejes pasar esta oportunidad!
                </p>
                <p className="text-sm text-muted-foreground">
                  Cada día sin presencia digital es dinero que pierdes frente a tu competencia. 
                  <span className="text-primary font-semibold"> Con QORINET, tu inversión se transforma en crecimiento real.</span>
                </p>
                <p className="text-xs text-muted-foreground italic mt-3">
                  "La tecnología no es un gasto, es la mejor inversión para el futuro de tu negocio" - QORINET
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
