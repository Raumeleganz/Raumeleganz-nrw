import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum | Raumeleganz Spanndecken',
  description: 'Impressum und rechtliche Angaben der Raumeleganz Spanndecken GmbH',
  robots: 'noindex, nofollow',
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-craft-50">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-warm-200">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4">
                Impressum
              </h1>
              <p className="text-warm-700">
                Angaben gemäß § 5 TMG und verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </p>
            </div>

            {/* Company Info */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">Firmendaten</h2>
              <div className="space-y-3 text-warm-800">
                <p className="font-bold text-lg">Raumeleganz Spanndecken GmbH</p>
                <p>
                  Musterstraße 123<br />
                  12345 Musterstadt
                </p>
                <p className="pt-4">
                  <span className="font-bold">Vertreten durch:</span><br />
                  Geschäftsführer Max Mustermann
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">Kontakt</h2>
              <div className="space-y-3 text-warm-800">
                <p>
                  <span className="font-bold">Telefon:</span> +49 (0) 123 456789
                </p>
                <p>
                  <span className="font-bold">E-Mail:</span>{' '}
                  <a
                    href="mailto:info@raumeleganz-spanndecken.de"
                    className="text-craft-600 hover:text-craft-700 underline"
                  >
                    info@raumeleganz-spanndecken.de
                  </a>
                </p>
              </div>
            </section>

            {/* Register */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">Registereintrag</h2>
              <div className="space-y-3 text-warm-800">
                <p>
                  <span className="font-bold">Handelsregister:</span> Amtsgericht Musterstadt
                </p>
                <p>
                  <span className="font-bold">Registernummer:</span> HRB 12345
                </p>
              </div>
            </section>

            {/* USt-ID */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">Umsatzsteuer-ID</h2>
              <div className="text-warm-800">
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                  <span className="font-bold">DE123456789</span>
                </p>
              </div>
            </section>

            {/* Handwerkskammer */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                Zuständige Kammer & Aufsichtsbehörde
              </h2>
              <div className="space-y-3 text-warm-800">
                <p>
                  <span className="font-bold">Handwerkskammer:</span> Handwerkskammer Musterstadt
                </p>
                <p>
                  Musterweg 10<br />
                  12345 Musterstadt
                </p>
                <p>
                  <a
                    href="https://www.hwk-musterstadt.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-craft-600 hover:text-craft-700 underline"
                  >
                    www.hwk-musterstadt.de
                  </a>
                </p>
              </div>
            </section>

            {/* Berufshaftpflicht */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">Berufshaftpflichtversicherung</h2>
              <div className="space-y-3 text-warm-800">
                <p>
                  <span className="font-bold">Versicherer:</span><br />
                  Muster Versicherung AG<br />
                  Versicherungsstraße 1<br />
                  10000 Berlin
                </p>
                <p>
                  <span className="font-bold">Geltungsbereich:</span> Deutschland, EU-weit
                </p>
              </div>
            </section>

            {/* EU-OS */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                EU-Streitschlichtung
              </h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-craft-600 hover:text-craft-700 underline break-all"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>
            </section>

            {/* Verbraucherstreitbeilegung */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <div className="text-warm-800">
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
                </p>
              </div>
            </section>

            {/* Haftungsausschluss */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">Haftung für Inhalte</h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>
              </div>
            </section>

            {/* Haftung für Links */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">Haftung für Links</h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                  Seiten verantwortlich.
                </p>
                <p>
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                  überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                  permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                  Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                  Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </section>

            {/* Urheberrecht */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">Urheberrecht</h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p>
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                  gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
                  die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                  gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                  bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
                  wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </section>

            {/* Back Button */}
            <div className="pt-8 border-t border-warm-200">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-craft-600 hover:text-craft-700 font-bold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

