import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getCityBySlug, getAllCitySlugs } from "@/data/cities.generated";
import { notFound } from "next/navigation";
import { Phone, Mail, CheckCircle2, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ stadt: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs();
  return slugs.map((slug) => ({
    stadt: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stadt } = await params;
  const city = getCityBySlug(stadt);
  
  if (!city) {
    return {
      title: "Stadt nicht gefunden",
    };
  }

  return {
    title: `Spanndecken ${city.name} - Professionelle Montage | Raumeleganz`,
    description: `Hochwertige Spanndecken in ${city.name} ✓ Schnelle Montage ✓ 10 Jahre Garantie ✓ Kostenlose Beratung. Ihr Experte für Premium-Spanndecken in ${city.name} und Umgebung.`,
  };
}

export default async function StadtPage({ params }: PageProps) {
  const { stadt } = await params;
  const city = getCityBySlug(stadt);

  if (!city) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-yellow-600 to-yellow-500 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8" />
              <span className="text-xl font-semibold">Einsatzgebiet</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Spanndecken in {city.name}
            </h1>
            <p className="text-xl text-white/90">
              Ihr professioneller Partner für hochwertige Spanndecken in {city.name} und Umgebung
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-xl text-gray-700 leading-relaxed">
              Als erfahrene Spanndecken-Experten sind wir in <strong>{city.name}</strong> für Sie da. 
              Wir bieten professionelle Beratung, hochwertige Materialien und eine schnelle, 
              saubere Montage – alles aus einer Hand.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Unsere Leistungen in {city.name}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Wohnraumdecken",
                  icon: "🏠",
                  desc: "Elegante Spanndecken für Ihr Zuhause"
                },
                {
                  title: "Lichtdecken & LED",
                  icon: "💡",
                  desc: "Moderne Beleuchtungskonzepte"
                },
                {
                  title: "Akustikdecken",
                  icon: "🔊",
                  desc: "Verbesserte Raumakustik"
                },
                {
                  title: "Badezimmer",
                  icon: "💧",
                  desc: "Feuchtigkeitsresistent & pflegeleicht"
                },
                {
                  title: "Gewerbliche Lösungen",
                  icon: "🏢",
                  desc: "Für Büros, Praxen & Geschäfte"
                },
                {
                  title: "Sonderformen",
                  icon: "🎨",
                  desc: "Individuelle Gestaltungen"
                }
              ].map((service, i) => (
                <div 
                  key={i}
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-yellow-600/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Warum Spanndecken in {city.name}?
            </h2>
            
            <div className="space-y-6">
              {[
                "Über 10 Jahre Erfahrung in der Region",
                "Kostenlose Beratung und Aufmaß vor Ort",
                "Hochwertige Materialien von führenden Herstellern",
                "Schnelle Montage meist an nur einem Tag",
                "Saubere, staubfreie Installation",
                "10 Jahre Garantie auf Material und Verarbeitung",
                "TÜV-zertifizierte Qualität",
                "Faire und transparente Preise"
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-gradient-to-br from-yellow-600 to-yellow-500 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bereit für Ihre neue Spanndecke?
              </h2>
              <p className="text-xl text-white/90">
                Vereinbaren Sie jetzt einen kostenlosen Beratungstermin in {city.name}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Phone className="w-10 h-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Telefonisch</h3>
                <a href="tel:+4921112345678" className="text-white/90 hover:text-white">
                  0211 123 456 78
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Mail className="w-10 h-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Per E-Mail</h3>
                <a href="mailto:info@raumeleganz-spanndecken.de" className="text-white/90 hover:text-white text-sm break-all">
                  info@raumeleganz-spanndecken.de
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Clock className="w-10 h-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Öffnungszeiten</h3>
                <p className="text-white/90 text-sm">
                  Mo - Fr: 08:00 - 18:00<br />
                  Sa: 10:00 - 14:00
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt"
                className="px-8 py-4 bg-white text-yellow-600 text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-center"
              >
                Jetzt Beratung anfragen
              </a>
              <a 
                href="tel:+4921112345678"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-full border-2 border-white hover:bg-white hover:text-yellow-600 transition-all duration-300 text-center"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </section>

        {/* SEO Text */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Spanndecken {city.name} – Qualität aus Meisterhand
              </h2>
              
              <p>
                Sie suchen nach einer modernen und eleganten Lösung für Ihre Decke in <strong>{city.name}</strong>? 
                Spanndecken bieten zahlreiche Vorteile gegenüber herkömmlichen Deckenverkleidungen und sind die 
                perfekte Wahl für Renovierungen, Neubauten und gewerbliche Objekte.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Vorteile von Spanndecken
              </h3>
              
              <p>
                Spanndecken überzeugen durch ihre vielfältigen Gestaltungsmöglichkeiten, schnelle Montage und 
                lange Lebensdauer. Die Oberflächen sind pflegeleicht, feuchtigkeitsresistent und können in 
                nahezu jeder Farbe und Struktur realisiert werden.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Ihr Experte in {city.name}
              </h3>
              
              <p>
                Mit langjähriger Erfahrung und einem Team aus qualifizierten Fachkräften sind wir der richtige 
                Partner für Ihr Spanndecken-Projekt in <strong>{city.name}</strong>. Von der ersten Beratung 
                bis zur finalen Montage begleiten wir Sie kompetent und zuverlässig.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

