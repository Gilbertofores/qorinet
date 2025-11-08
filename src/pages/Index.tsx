import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { SoftwareDevelopment } from "@/components/SoftwareDevelopment";
import { TechnicalServices } from "@/components/TechnicalServices";
import { ContactSection } from "@/components/ContactSection";
import { FileText, Monitor, Palette, Ruler, Shield, PenTool, Calculator, Lock } from "lucide-react";
import logoLight from "@/assets/QN-ICON.png";
import logoDark from "@/assets/QN-WHITE.png";

const products = [
  {
    name: "Microsoft Office 365",
    description: "Suite completa de productividad",
    badge: "Popular",
    icon: FileText,
    iconColor: "#0078D4",
    features: [
      "Word, Excel, PowerPoint, Outlook",
      "1TB de almacenamiento en OneDrive",
      "Actualizaciones automáticas",
      "Soporte técnico oficial",
      "Licencia para 5 dispositivos",
    ],
  },
  {
    name: "Windows 11 Pro",
    description: "Sistema operativo profesional",
    badge: "Nuevo",
    icon: Monitor,
    iconColor: "#00A4EF",
    features: [
      "Interfaz moderna y optimizada",
      "Funciones de seguridad avanzadas",
      "BitLocker y Remote Desktop",
      "Actualizaciones de por vida",
      "Licencia digital permanente",
    ],
  },
  {
    name: "Adobe Creative Cloud",
    description: "Herramientas para diseño profesional",
    icon: Palette,
    iconColor: "#FF0000",
    features: [
      "Photoshop, Illustrator, Premiere Pro",
      "Más de 20 aplicaciones creativas",
      "Almacenamiento en la nube",
      "Fuentes y plantillas premium",
      "Actualizaciones constantes",
    ],
  },
  {
    name: "AutoCAD 2024",
    description: "Software de diseño CAD líder",
    icon: Ruler,
    iconColor: "#E51937",
    features: [
      "Diseño 2D y 3D profesional",
      "Herramientas de automatización",
      "Colaboración en la nube",
      "Bibliotecas de símbolos",
      "Soporte técnico especializado",
    ],
  },
  {
    name: "Antivirus Kaspersky",
    description: "Protección total para tu equipo",
    badge: "Recomendado",
    icon: Shield,
    iconColor: "#00A88E",
    features: [
      "Protección en tiempo real",
      "Anti-phishing y anti-ransomware",
      "VPN integrada",
      "Control parental",
      "Optimizador de rendimiento",
    ],
  },
  {
    name: "CorelDRAW Graphics Suite",
    description: "Diseño vectorial profesional",
    icon: PenTool,
    iconColor: "#7C4DFF",
    features: [
      "Ilustración y diseño de logos",
      "Edición de fotos avanzada",
      "Maquetación de páginas",
      "Tipografía profesional",
      "Compatible con formatos AI y PSD",
    ],
  },
  {
    name: "QuickBooks Pro",
    description: "Contabilidad para tu negocio",
    icon: Calculator,
    iconColor: "#2CA01C",
    features: [
      "Facturación electrónica",
      "Control de inventario",
      "Reportes financieros",
      "Gestión de impuestos",
      "Sincronización bancaria",
    ],
  },
  {
    name: "Norton 360 Premium",
    description: "Seguridad completa multi-dispositivo",
    icon: Lock,
    iconColor: "#FFC107",
    features: [
      "Protección para 10 dispositivos",
      "100GB de respaldo en la nube",
      "VPN ilimitada",
      "Monitor de Dark Web",
      "Protección contra robo de identidad",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      
      <section id="productos" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ✨ Licencias Oficiales
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Software Original Garantizado
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Adquiere las mejores herramientas profesionales con licencias oficiales. Todos nuestros
              productos incluyen garantía, soporte técnico y actualizaciones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <div id="desarrollo">
        <SoftwareDevelopment />
      </div>
      <div id="servicios">
        <TechnicalServices />
      </div>
      <ContactSection />
      
      <footer className="bg-secondary py-12 text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
                <div>
          
            <div className="flex items-center gap-2">
              <img src={logoLight} alt="QORINET " className="w-7 h-7 object-contain block dark:hidden" />
              <img src={logoDark} alt="QORINET" className="w-30 h-12 object-contain  dark:block" />
            </div>
              <p className="text-[10px] text-muted-foreground tracking-wider">TECNOLOGÍA CONFIABLE</p>
          </div>
            </div>
            
            <p className="text-sm max-w-2xl mx-auto text-secondary-foreground/90">
              Tu socio tecnológico de confianza. Especialistas en software original, desarrollo web a medida 
              y servicios técnicos profesionales.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-xs text-secondary-foreground/70 pt-4">
              <span>✓ Software Original Certificado</span>
              <span>✓ Desarrollo Web Profesional</span>
              <span>✓ Soporte Técnico Especializado</span>
              <span>✓ Atención Inmediata</span>
            </div>
            
            <div className="border-t border-secondary-foreground/20 pt-6 mt-6">
              <p className="text-sm">
                © {new Date().getFullYear()} <span className="font-bold">G-FLORES</span>. Todos los derechos reservados.
              </p>
              <p className="text-xs mt-2 text-secondary-foreground/60">
                Perú • Cajamarca • WhatsApp: 976 830 280
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
