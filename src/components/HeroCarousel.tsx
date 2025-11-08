import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroSoftware from "@/assets/hero-software.jpg";
import heroComputers from "@/assets/hero-computers.jpg";
import heroWebdev from "@/assets/hero-webdev.jpg";

const slides = [
  {
    image: heroSoftware,
    title: "Software Original a tu Alcance",
    subtitle: "100% Garantizado",
    description: "Las mejores marcas de software con licencias oficiales y soporte completo",
  },
  {
    image: heroComputers,
    title: "Computadoras de Última Generación",
    subtitle: "Accesorios y Suministros de Marca",
    description: "Equipos de alto rendimiento con las mejores marcas del mercado",
  },
  {
    image: heroWebdev,
    title: "Lleva tu Negocio al Siguiente Nivel",
    subtitle: "Vende tus Productos o Servicios por Internet",
    description: "Creamos una página web ideal para tu necesidad",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
              <div className="relative h-[600px] w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0">
                  {/* Overlay azul → transparente */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/95 via-blue-400/50 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
                      <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {slide.subtitle}
                        </p>
                      </div>
                      <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                        {slide.description}
                      </p>
                      <Button
                        variant="hero"
                        size="lg"
                        className="text-base md:text-lg"
                        onClick={() => {
                          document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Contáctanos
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-background/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
