import { Code2, Smartphone, Zap, Shield, Cloud, BarChart } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Desarrollo Web Profesional",
    description: "Creamos sitios web modernos y responsivos que se adaptan a cualquier dispositivo",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrollamos apps nativas e híbridas para iOS y Android",
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Optimizamos cada línea de código para garantizar velocidad y eficiencia",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Implementamos las mejores prácticas de seguridad en cada proyecto",
  },
  {
    icon: Cloud,
    title: "Soluciones en la Nube",
    description: "Hosting, respaldos automáticos y escalabilidad según tus necesidades",
  },
  {
    icon: BarChart,
    title: "Análisis y Métricas",
    description: "Integramos herramientas de análisis para medir el éxito de tu negocio",
  },
];

export function SoftwareDevelopment() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative tech background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              💻 Innovación Digital
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground bg-clip-text">
            Desarrollo de Software a Medida
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transformamos tus ideas en soluciones digitales innovadoras. Nuestro equipo de expertos
            desarrolla software personalizado que impulsa el crecimiento de tu negocio, desde páginas
            web corporativas hasta sistemas empresariales complejos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.2)] hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              {/* Tech line decoration */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 relative overflow-hidden">
          {/* Animated circuit-like decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="text-center space-y-4 relative z-10">
            <h3 className="text-2xl font-bold text-foreground">
              ¿Listo para digitalizar tu negocio?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ya sea que necesites un sitio web elegante, una tienda en línea completa o un sistema
              personalizado, tenemos la experiencia para hacerlo realidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
