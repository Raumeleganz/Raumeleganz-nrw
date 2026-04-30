import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        
        {/* Final CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
          {/* Decorative Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Bereit für Ihre Traumdecke?
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
              Vereinbaren Sie jetzt Ihren kostenlosen Beratungstermin und lassen Sie sich von unseren Experten beraten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="px-8 py-4 text-lg bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-block hover:scale-105"
              >
                Jetzt Beratung anfragen
              </a>
              <a
                href="tel:+4921112345678"
                className="px-8 py-4 text-lg bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 inline-block hover:scale-105"
              >
                0211 123 456 78
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
