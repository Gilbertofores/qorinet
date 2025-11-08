import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import logoLight from "@/assets/QN-ICON.png";
import logoBlack from "@/assets/QN-BLACK2.png";

export function Header() {
  const whatsappNumber = "976830280";
  const whatsappMessage = encodeURIComponent(
    "Hola QORINET, me gustaría obtener más información sobre sus servicios."
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div>
          
            <div className="flex items-center gap-2">
              <img src={logoLight} alt="QORINET " className="w-7 h-7 object-contain block dark:hidden" />
              <img src={logoBlack} alt="QORINET" className="w-20 h-7 object-contain  dark:block" />
            </div>
              <p className="text-[10px] text-muted-foreground tracking-wider">TECNOLOGÍA CONFIABLE</p>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("productos")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Software
            </button>
            <button
              onClick={() => scrollToSection("desarrollo")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Desarrollo Web
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios Técnicos
            </button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => window.open(`https://wa.me/51${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
              className="gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Contactar
            </Button>
          </nav>

          <Button
            variant="hero"
            size="sm"
            className="md:hidden gap-2"
            onClick={() => window.open(`https://wa.me/51${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
