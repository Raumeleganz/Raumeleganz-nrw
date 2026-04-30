import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsere Leistungen - Premium Spanndecken | Raumeleganz",
  description: "Wohnraumdecken, Lichtdecken, Akustikdecken - Entdecken Sie unsere vielfältigen Spanndecken-Lösungen für jeden Raum und Anspruch in NRW.",
};

export default function LeistungenPage() {
  const services = [
    {
      title: "Wohnraumdecken",
      icon: "🏠",
      description: "Elegante Spanndecken für Wohnzimmer, Schlafzimmer und Küchen",
      features: [
        "Große Auswahl an Farben und Oberflächen",
        "Matt, glänzend oder satiniert",
        "Perfekt glatte Oberfläche",
        "Individuelle Gestaltungsmöglichkeiten"
      ],
      image: "/images/wohnraum.jpg"
    },
    {
      title: "Lichtdecken & LED",
      icon: "💡",
      description: "Moderne Beleuchtungskonzepte mit integrierten LED-Systemen",
      features: [
        "Indirekte Beleuchtung",
        "LED-Spots und Panels",
        "Hinterleuchtete Decken",
        "Energieeffiziente Lösungen"
      ],
      image: "/images/lichtdecken.jpg"
    },
    {
      title: "Akustikdecken",
      icon: "🔊",
      description: "Verbesserte Raumakustik für Büros, Restaurants und Wohnräume",
      features: [
        "Schallabsorption bis zu 90%",
        "Reduzierung von Nachhall",
        "Ideal für große Räume",
        "Kombinierbar mit Lichtkonzepten"
      ],
      image: "/images/akustik.jpg"
    },
    {
      title: "Badezimmer & Feuchträume",
      icon: "💧",
      description: "Feuchtigkeitsresistente Spanndecken für Badezimmer und Küchen",
      features: [
        "100% wasserfest",
        "Schimmelresistent",
        "Einfache Reinigung",
        "Perfekt für Feuchträume"
      ],
      image: "/images/bad.jpg"
    },
    {
      title: "Gewerbliche Lösungen",
      icon: "🏢",
      description: "Professionelle Spanndecken für Büros, Praxen und Geschäfte",
      features: [
        "Schnelle Montage",
        "Minimale Betriebsunterbrechung",
        "Brandschutzklasse B1",
        "Hygienisch und pflegeleicht"
      ],
      image: "/images/gewerbe.jpg"
    },
    {
      title: "Sonderformen & Design",
      icon: "🎨",
      description: "Individuelle Lösungen für außergewöhnliche Raumkonzepte",
      features: [
        "3D-Effekte und Wölbungen",
        "Bedruckte Spanndecken",
        "Mehrstufige Konstruktionen",
        "Kreative Lichtinszenierungen"
      ],
      image: "/images/design.jpg"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-yellow-600 to-yellow-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-xl text-white/90">
              Premium Spanndecken-Lösungen für jeden Raum und Anspruch
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl flex items-center justify-center">
                      <span className="text-gray-500 text-lg">Bild folgt</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Interessiert? Lassen Sie sich beraten!
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Unsere Experten beraten Sie gerne kostenlos und unverbindlich
            </p>
            <a 
              href="/kontakt"
              className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-lg font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Jetzt Beratungstermin vereinbaren
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

