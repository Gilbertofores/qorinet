import { Monitor, Printer, Network, Camera, Wrench, Home } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Reparación de Computadoras",
    items: [
      "Diagnóstico y reparación de hardware",
      "Actualización de componentes",
      "Limpieza y mantenimiento preventivo",
      "Recuperación de datos",
    ],
  },
  {
    icon: Printer,
    title: "Servicio de Impresoras",
    items: [
      "Reparación de impresoras láser e inyección",
      "Recarga y venta de cartuchos",
      "Mantenimiento preventivo",
      "Configuración en red",
    ],
  },
  {
    icon: Network,
    title: "Instalación de Redes",
    items: [
      "Redes cableadas e inalámbricas",
      "Configuración de routers y switches",
      "Cableado estructurado",
      "Optimización de señal WiFi",
    ],
  },
  {
    icon: Camera,
    title: "Cámaras de Seguridad",
    items: [
      "Instalación de sistemas CCTV",
      "Cámaras IP de alta definición",
      "Grabación en la nube y local",
      "Monitoreo remoto desde celular",
    ],
  },
];

export function TechnicalServices() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Servicios Técnicos Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Brindamos soporte técnico profesional para empresas y hogares. Nuestros técnicos
            certificados están listos para solucionar cualquier problema tecnológico con rapidez y
            eficiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <Home className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Servicio a Domicilio</h3>
            </div>
            <p className="text-muted-foreground">
              Llevamos nuestros servicios directamente a tu hogar u oficina. Sin costo adicional
              dentro de la zona urbana.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
            <div className="flex items-center gap-3 mb-3">
              <Wrench className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Garantía de Servicio</h3>
            </div>
            <p className="text-muted-foreground">
              Todos nuestros trabajos incluyen garantía. Tu satisfacción es nuestra prioridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
