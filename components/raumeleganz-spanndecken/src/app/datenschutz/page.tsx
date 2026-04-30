import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Raumeleganz Spanndecken',
  description: 'Datenschutzerklärung der Raumeleganz Spanndecken GmbH gemäß DSGVO',
  robots: 'noindex, nofollow',
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-craft-50">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-warm-200">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4">
                Datenschutzerklärung
              </h1>
              <p className="text-warm-700">
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Stand: {new Date().toLocaleDateString('de-DE')}
              </p>
            </div>

            {/* 1. Verantwortlicher */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                1. Verantwortlicher und Datenschutzbeauftragter
              </h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-warm-50 p-6 rounded-xl">
                  <p className="font-bold">Raumeleganz Spanndecken GmbH</p>
                  <p>
                    Musterstraße 123<br />
                    12345 Musterstadt
                  </p>
                  <p className="mt-3">
                    <span className="font-bold">Telefon:</span> +49 (0) 123 456789<br />
                    <span className="font-bold">E-Mail:</span>{' '}
                    <a href="mailto:info@raumeleganz-spanndecken.de" className="text-craft-600 hover:text-craft-700 underline">
                      info@raumeleganz-spanndecken.de
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Allgemeines */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <div className="text-warm-800 space-y-4">
                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  2.1 Umfang der Verarbeitung personenbezogener Daten
                </h3>
                <p>
                  Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
                  Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
                  erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach
                  Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige
                  Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die
                  Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  2.2 Rechtsgrundlage für die Verarbeitung
                </h3>
                <p>
                  Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der
                  betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung
                  (DSGVO) als Rechtsgrundlage.
                </p>
                <p>
                  Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages
                  erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage.
                </p>
                <p>
                  Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder
                  eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten
                  des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als
                  Rechtsgrundlage für die Verarbeitung.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  2.3 Datenlöschung und Speicherdauer
                </h3>
                <p>
                  Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald
                  der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn
                  dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen,
                  Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen
                  wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die
                  genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine
                  Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine
                  Vertragserfüllung besteht.
                </p>
              </div>
            </section>

            {/* 3. Website */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                3. Bereitstellung der Website und Erstellung von Logfiles
              </h2>
              <div className="text-warm-800 space-y-4">
                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  3.1 Beschreibung und Umfang der Datenverarbeitung
                </h3>
                <p>
                  Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und
                  Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei
                  erhoben:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Informationen über den Browsertyp und die verwendete Version</li>
                  <li>Das Betriebssystem des Nutzers</li>
                  <li>Den Internet-Service-Provider des Nutzers</li>
                  <li>Die IP-Adresse des Nutzers</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
                  <li>Websites, die vom System des Nutzers über unsere Website aufgerufen werden</li>
                </ul>
                <p>
                  Die Daten werden ebenfalls in den Logfiles unseres Systems gespeichert. Eine Speicherung
                  dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  3.2 Rechtsgrundlage
                </h3>
                <p>
                  Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist
                  Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  3.3 Zweck der Datenverarbeitung
                </h3>
                <p>
                  Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine
                  Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die
                  IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben. Die Speicherung in
                  Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns
                  die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer
                  informationstechnischen Systeme.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  3.4 Dauer der Speicherung
                </h3>
                <p>
                  Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht
                  mehr erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website
                  ist dies der Fall, wenn die jeweilige Sitzung beendet ist. Im Falle der Speicherung der
                  Daten in Logfiles ist dies nach spätestens sieben Tagen der Fall.
                </p>
              </div>
            </section>

            {/* 4. Kontaktformular */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                4. Kontaktformular und E-Mail-Kontakt
              </h2>
              <div className="text-warm-800 space-y-4">
                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  4.1 Beschreibung und Umfang der Datenverarbeitung
                </h3>
                <p>
                  Auf unserer Internetseite ist ein Kontaktformular vorhanden, welches für die elektronische
                  Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden
                  die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Diese Daten
                  sind:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer (optional)</li>
                  <li>Nachrichtentext</li>
                  <li>Datum und Uhrzeit der Absendung</li>
                </ul>
                <p>
                  Für die Verarbeitung der Daten wird im Rahmen des Absendevorgangs Ihre Einwilligung
                  eingeholt und auf diese Datenschutzerklärung verwiesen. Alternativ ist eine
                  Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich. In diesem Fall werden die
                  mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  4.2 Rechtsgrundlage
                </h3>
                <p>
                  Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen einer Einwilligung des
                  Nutzers Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage für die Verarbeitung der Daten, die
                  im Zuge einer Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO.
                  Zielt der E-Mail-Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzliche
                  Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  4.3 Zweck der Datenverarbeitung
                </h3>
                <p>
                  Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur
                  Bearbeitung der Kontaktaufnahme. Im Falle einer Kontaktaufnahme per E-Mail liegt hieran
                  auch das erforderliche berechtigte Interesse an der Verarbeitung der Daten.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  4.4 Dauer der Speicherung
                </h3>
                <p>
                  Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht
                  mehr erforderlich sind. Für die personenbezogenen Daten aus der Eingabemaske des
                  Kontaktformulars und diejenigen, die per E-Mail übersandt wurden, ist dies dann der Fall,
                  wenn die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die Konversation
                  dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt
                  abschließend geklärt ist.
                </p>
              </div>
            </section>

            {/* 5. Cookies */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                5. Cookies und Tracking-Technologien
              </h2>
              <div className="text-warm-800 space-y-4">
                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  5.1 Einsatz von Cookies
                </h3>
                <p>
                  Unsere Website verwendet <span className="font-bold">keine nicht-essenziellen Cookies</span>.
                  Es werden keine Statistik-, Tracking- oder Marketing-Cookies eingesetzt. Die Website
                  funktioniert ohne Ihre Einwilligung in Cookies vollständig.
                </p>
                <p>
                  Sollten wir zukünftig Cookies einsetzen, werden wir Sie vorab über ein Cookie-Banner
                  informieren und Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO einholen.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  5.2 Technisch notwendige Session-Daten
                </h3>
                <p>
                  Die technische Bereitstellung der Website erfordert die vorübergehende Speicherung Ihrer
                  IP-Adresse und Session-Informationen. Diese Daten werden nicht mit anderen Datenquellen
                  zusammengeführt und nach Ende der Sitzung automatisch gelöscht.
                </p>
              </div>
            </section>

            {/* 6. Hosting */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                6. Hosting und Server
              </h2>
              <div className="text-warm-800 space-y-4">
                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  6.1 Hosting-Anbieter
                </h3>
                <p>
                  Diese Website wird gehostet bei:
                </p>
                <div className="bg-warm-50 p-6 rounded-xl">
                  <p className="font-bold">[Hosting-Anbieter Name]</p>
                  <p>
                    [Adresse des Hosting-Anbieters]<br />
                    [PLZ Ort], Deutschland
                  </p>
                </div>
                <p>
                  Der Hoster verarbeitet in unserem Auftrag Daten, die beim Besuch dieser Website anfallen
                  (z. B. IP-Adresse, technische Informationen). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
                  DSGVO (berechtigtes Interesse an sicherer und effizienter Bereitstellung unseres
                  Internetauftritts).
                </p>
                <p>
                  Mit dem Hoster wurde ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO
                  geschlossen. Die Datenverarbeitung erfolgt ausschließlich auf Servern in Deutschland bzw.
                  innerhalb der EU.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  6.2 Content Delivery Network (CDN)
                </h3>
                <p>
                  Wir verwenden <span className="font-bold">kein externes CDN</span>. Alle Ressourcen
                  (Bilder, Schriften, Skripte) werden ausschließlich von unseren eigenen Servern
                  bereitgestellt.
                </p>
              </div>
            </section>

            {/* 7. Schriftarten */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                7. Webfonts und Typografie
              </h2>
              <div className="text-warm-800 space-y-4">
                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  7.1 Lokale Schriftarten
                </h3>
                <p>
                  Unsere Website verwendet <span className="font-bold">ausschließlich lokal gehostete
                  Schriftarten</span>. Es werden keine externen Dienste wie Google Fonts oder Adobe Fonts
                  verwendet. Ihre IP-Adresse wird daher nicht an Drittanbieter übermittelt.
                </p>
                <p>
                  Die Schriftdateien werden direkt von unserem Server geladen. Dies entspricht dem Grundsatz
                  der Datensparsamkeit gemäß Art. 5 Abs. 1 lit. c DSGVO.
                </p>
              </div>
            </section>

            {/* 8. Google Analytics */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                8. Google Analytics (Universal Analytics)
              </h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Diese Website nutzt <span className="font-bold">Google Analytics</span>, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google").
                </p>
                
                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  8.1 Umfang der Verarbeitung
                </h3>
                <p>
                  Google Analytics verwendet Cookies, die eine Analyse Ihrer Nutzung der Website ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                </p>
                <p>
                  Folgende Daten werden erfasst:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Besuchte Seiten und deren Reihenfolge</li>
                  <li>Verweildauer auf einzelnen Seiten</li>
                  <li>Verwendetes Endgerät (Desktop, Tablet, Mobil)</li>
                  <li>Verwendeter Browser und Betriebssystem</li>
                  <li>Referrer-URL (von welcher Seite Sie kamen)</li>
                  <li>IP-Adresse (anonymisiert)</li>
                  <li>Ungefähre geografische Herkunft (Land/Stadt)</li>
                  <li>Interaktionen mit Elementen der Website</li>
                </ul>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  8.2 IP-Anonymisierung
                </h3>
                <p>
                  Wir haben die <span className="font-bold">IP-Anonymisierung aktiviert</span> (anonymizeIp). Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  8.3 Zweck der Verarbeitung
                </h3>
                <p>
                  Google Analytics wird im Auftrag des Betreibers dieser Website verwendet, um:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Die Nutzung der Website zu analysieren</li>
                  <li>Reports über die Websiteaktivitäten zu erstellen</li>
                  <li>Die Website-Nutzung und Internetnutzung zu optimieren</li>
                  <li>Besucherströme zu verstehen und Inhalte zu verbessern</li>
                </ul>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  8.4 Rechtsgrundlage
                </h3>
                <p>
                  Die Rechtsgrundlage für die Nutzung von Google Analytics ist <span className="font-bold">Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO</span>. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie Ihre Cookie-Einstellungen ändern.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  8.5 Speicherdauer
                </h3>
                <p>
                  Die von uns gesendeten und mit Cookies verknüpften Daten werden nach <span className="font-bold">24 Monaten</span> automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  8.6 Drittlandtransfer und Datenschutz
                </h3>
                <p>
                  Google Analytics speichert Daten auch in den USA. Die USA gelten datenschutzrechtlich als <span className="font-bold">Drittland ohne angemessenes Datenschutzniveau</span>. Dies bedeutet, dass ein Zugriff durch US-Behörden nicht ausgeschlossen werden kann und Ihre Daten möglicherweise ohne effektiven Rechtsschutz verarbeitet werden.
                </p>
                <p>
                  Wir haben mit Google einen <span className="font-bold">Auftragsverarbeitungsvertrag</span> geschlossen, der die Einhaltung der DSGVO sicherstellt und den Schutz der Daten unserer Nutzer gewährleistet.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  8.7 Widerspruchsmöglichkeit (Opt-Out)
                </h3>
                <p>
                  Sie können die Speicherung von Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Darüber hinaus können Sie die Erfassung der durch das Cookie erzeugten Daten durch Google verhindern, indem Sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren:
                </p>
                <div className="bg-warm-50 p-6 rounded-xl">
                  <p className="font-bold mb-2">Google Analytics Opt-Out Browser Add-on:</p>
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-craft-600 hover:text-craft-700 underline break-all"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </div>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  8.8 Weitere Informationen
                </h3>
                <p>
                  Weitere Informationen zum Datenschutz bei Google Analytics finden Sie hier:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="text-craft-600 hover:text-craft-700 underline">
                      Google Analytics Datenschutz
                    </a>
                  </li>
                  <li>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-craft-600 hover:text-craft-700 underline">
                      Google Datenschutzerklärung
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 9. Google Ads */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                9. Google Ads und Conversion-Tracking
              </h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Diese Website nutzt <span className="font-bold">Google Ads</span> (früher Google AdWords), einen Online-Werbedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google").
                </p>
                
                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  9.1 Google Conversion-Tracking
                </h3>
                <p>
                  Im Rahmen von Google Ads nutzen wir das <span className="font-bold">Conversion-Tracking</span>. Wenn Sie auf eine von Google geschaltete Anzeige klicken, wird ein Cookie für das Conversion-Tracking auf Ihrem Rechner abgelegt. Diese Cookies verlieren nach 90 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung.
                </p>
                <p>
                  Folgende Informationen werden erfasst:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Click-ID der Google Ads-Anzeige</li>
                  <li>Zeitpunkt des Klicks auf die Anzeige</li>
                  <li>Besuchte Seiten auf unserer Website</li>
                  <li>Conversion-Aktionen (z.B. Formularabsendungen, Telefonanrufe)</li>
                  <li>IP-Adresse (anonymisiert)</li>
                </ul>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  9.2 Google Remarketing
                </h3>
                <p>
                  Wir nutzen außerdem die <span className="font-bold">Remarketing-Funktion</span> von Google Ads. Mit dieser Funktion können wir Website-Besuchern innerhalb des Google-Werbenetzwerks zielgerichtete, interessenbezogene Werbeanzeigen präsentieren.
                </p>
                <p>
                  Remarketing verwendet Cookies, um frühere Besucher unserer Website zu identifizieren und ihnen auf anderen Websites im Google-Werbenetzwerk personalisierte Anzeigen zu zeigen. Die Cookies enthalten keine personenbezogenen Daten.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  9.3 Zweck der Verarbeitung
                </h3>
                <p>
                  Google Ads wird verwendet, um:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Die Effektivität unserer Werbekampagnen zu messen</li>
                  <li>Conversion-Raten zu analysieren und zu optimieren</li>
                  <li>Interessenbasierte Werbung zu schalten</li>
                  <li>Return on Investment (ROI) zu ermitteln</li>
                  <li>Nutzer mit relevanteren Anzeigen anzusprechen</li>
                </ul>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  9.4 Rechtsgrundlage
                </h3>
                <p>
                  Die Rechtsgrundlage für die Nutzung von Google Ads ist <span className="font-bold">Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO</span>. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  9.5 Speicherdauer
                </h3>
                <p>
                  Die Cookies für das Conversion-Tracking haben eine Gültigkeitsdauer von <span className="font-bold">90 Tagen</span>. Remarketing-Listen-Cookies haben eine Gültigkeitsdauer von bis zu <span className="font-bold">540 Tagen</span>.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  9.6 Drittlandtransfer
                </h3>
                <p>
                  Google Ads speichert Daten auch in den USA. Die USA gelten datenschutzrechtlich als <span className="font-bold">Drittland ohne angemessenes Datenschutzniveau</span>. Es besteht das Risiko, dass US-Behörden auf Ihre Daten zugreifen, ohne dass Sie hierüber informiert werden oder Rechtsmittel einlegen können.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  9.7 Widerspruchsmöglichkeit (Opt-Out)
                </h3>
                <p>
                  Sie können die Teilnahme am Remarketing-Verfahren auf mehreren Wegen verhindern:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Durch entsprechende Cookie-Einstellungen in Ihrem Browser</li>
                  <li>Durch Deaktivierung von Cookies für Conversion-Tracking und Remarketing</li>
                  <li>Über die Google Anzeigenvorgaben unter:
                    <div className="mt-2">
                      <a 
                        href="https://www.google.com/settings/ads" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-craft-600 hover:text-craft-700 underline break-all"
                      >
                        https://www.google.com/settings/ads
                      </a>
                    </div>
                  </li>
                  <li>Über die Deaktivierungsseite der Network Advertising Initiative:
                    <div className="mt-2">
                      <a 
                        href="http://www.networkadvertising.org/managing/opt_out.asp" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-craft-600 hover:text-craft-700 underline break-all"
                      >
                        http://www.networkadvertising.org/managing/opt_out.asp
                      </a>
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  9.8 Weitere Informationen
                </h3>
                <p>
                  Weitere Informationen zu Google Ads und Datenschutz:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-craft-600 hover:text-craft-700 underline">
                      Wie Google Daten verwendet
                    </a>
                  </li>
                  <li>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-craft-600 hover:text-craft-700 underline">
                      Google Datenschutzerklärung
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 10. Spam-Schutz */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                10. Spam-Schutz bei Formularen
              </h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Zum Schutz unserer Kontaktformulare vor automatisierten Spam-Anfragen setzen wir
                  <span className="font-bold"> serverseitige Validierung</span> ein. Es werden keine externen
                  Dienste wie Google reCAPTCHA verwendet, sodass keine Daten an Drittanbieter übermittelt
                  werden.
                </p>
                <p>
                  Die Spam-Prüfung erfolgt ausschließlich durch technische Plausibilitätsprüfungen
                  (z. B. Zeitstempel, Honeypot-Felder) auf unserem Server. Rechtsgrundlage ist
                  Art. 6 Abs. 1 lit. f DSGVO (Schutz vor Missbrauch unserer Systeme).
                </p>
              </div>
            </section>

            {/* 11. Externe Medien */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                11. Externe Medien und Embeds
              </h2>
              <div className="text-warm-800 space-y-4">
                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  11.1 YouTube-Videos (Zwei-Klick-Lösung)
                </h3>
                <p>
                  Sollten wir auf unserer Website YouTube-Videos einbinden, geschieht dies ausschließlich
                  über eine <span className="font-bold">Zwei-Klick-Lösung</span>. Das bedeutet:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Beim ersten Laden der Seite wird kein Video-Inhalt von YouTube geladen und keine
                    Verbindung zu YouTube-Servern hergestellt.
                  </li>
                  <li>
                    Sie sehen zunächst nur ein Vorschaubild, das von unserem Server geladen wird.
                  </li>
                  <li>
                    Erst nach Klick auf das Vorschaubild wird das Video geladen und eine Verbindung zu
                    YouTube (Google Ireland Limited) hergestellt.
                  </li>
                  <li>
                    Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen von YouTube/Google.
                  </li>
                </ul>
                <p>
                  Weitere Informationen:{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-craft-600 hover:text-craft-700 underline"
                  >
                    Google Datenschutzerklärung
                  </a>
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  9.2 Sonstige externe Inhalte
                </h3>
                <p>
                  Wir binden <span className="font-bold">keine weiteren externen Medien</span> ein
                  (z. B. Social-Media-Plugins, Karten, externe Grafiken). Alle Bilder und Ressourcen werden
                  von unseren eigenen Servern bereitgestellt.
                </p>
              </div>
            </section>

            {/* 12. Auftragsverarbeitung */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                12. Auftragsverarbeitung
              </h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Wir haben mit allen Dienstleistern, die personenbezogene Daten in unserem Auftrag
                  verarbeiten, einen Vertrag zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO
                  abgeschlossen. Dies betrifft insbesondere:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Hosting-Provider (Serverbereitstellung)</li>
                  <li>E-Mail-Dienstleister (sofern extern)</li>
                  <li>Technische Wartung und Support</li>
                </ul>
                <p>
                  Alle Auftragsverarbeiter sind sorgfältig ausgewählt und vertraglich verpflichtet, die
                  DSGVO einzuhalten. Die Datenverarbeitung erfolgt ausschließlich nach unserer Weisung.
                </p>
              </div>
            </section>

            {/* 11. Rechte der Betroffenen */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                13. Rechte der betroffenen Person
              </h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO
                  und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  11.1 Auskunftsrecht
                </h3>
                <p>
                  Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene
                  Daten, die Sie betreffen, von uns verarbeitet werden. Liegt eine solche Verarbeitung vor,
                  können Sie von dem Verantwortlichen über folgende Informationen Auskunft verlangen: die
                  Zwecke, zu denen die personenbezogenen Daten verarbeitet werden; die Kategorien von
                  personenbezogenen Daten, welche verarbeitet werden; die Empfänger bzw. die Kategorien von
                  Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt
                  wurden oder noch offengelegt werden.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  11.2 Recht auf Berichtigung
                </h3>
                <p>
                  Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem
                  Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen,
                  unrichtig oder unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich
                  vorzunehmen.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  11.3 Recht auf Löschung („Recht auf Vergessenwerden")
                </h3>
                <p>
                  Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen
                  Daten unverzüglich gelöscht werden, sofern einer der folgenden Gründe zutrifft:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Die Daten sind für die Zwecke, für die sie erhoben wurden, nicht mehr notwendig</li>
                  <li>Sie widerrufen Ihre Einwilligung und es fehlt an anderweitiger Rechtsgrundlage</li>
                  <li>Sie legen Widerspruch ein und es liegen keine vorrangigen Gründe für die Verarbeitung vor</li>
                  <li>Die Daten wurden unrechtmäßig verarbeitet</li>
                </ul>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  11.4 Recht auf Einschränkung der Verarbeitung
                </h3>
                <p>
                  Sie haben das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu
                  verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sie bestreiten die Richtigkeit der Daten</li>
                  <li>Die Verarbeitung ist unrechtmäßig, aber Sie lehnen die Löschung ab</li>
                  <li>Die Daten werden für Rechtsansprüche benötigt</li>
                  <li>Sie haben Widerspruch eingelegt und es wird noch geprüft</li>
                </ul>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  11.5 Recht auf Datenübertragbarkeit
                </h3>
                <p>
                  Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns
                  bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu
                  erhalten. Sie haben außerdem das Recht, diese Daten einem anderen Verantwortlichen zu
                  übermitteln, sofern die Verarbeitung auf einer Einwilligung oder einem Vertrag beruht.
                </p>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  11.6 Widerspruchsrecht
                </h3>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <p className="font-bold mb-2">
                    Wichtig: Ihr Widerspruchsrecht nach Art. 21 DSGVO
                  </p>
                  <p>
                    Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                    jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die
                    aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen. Der
                    Verantwortliche verarbeitet die personenbezogenen Daten dann nicht mehr, es sei denn,
                    er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-warm-900 mt-6 mb-3">
                  11.7 Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
                </h3>
                <p>
                  Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu
                  widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der
                  Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                </p>
                <p className="font-bold mt-4">
                  Widerruf der Einwilligung an: info@raumeleganz-spanndecken.de
                </p>
              </div>
            </section>

            {/* 12. Beschwerderecht */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                14. Beschwerderecht bei der Aufsichtsbehörde
              </h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs
                  steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, insbesondere in dem
                  Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
                  Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
                  personenbezogenen Daten gegen die DSGVO verstößt.
                </p>
                <p className="font-bold mt-6 mb-3">
                  Für Nordrhein-Westfalen zuständige Aufsichtsbehörde:
                </p>
                <div className="bg-warm-50 p-6 rounded-xl">
                  <p className="font-bold">
                    Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
                  </p>
                  <p className="mt-2">
                    Kavalleriestraße 2-4<br />
                    40213 Düsseldorf
                  </p>
                  <p className="mt-3">
                    <span className="font-bold">Telefon:</span> 0211 / 38424-0<br />
                    <span className="font-bold">Fax:</span> 0211 / 38424-10<br />
                    <span className="font-bold">E-Mail:</span>{' '}
                    <a href="mailto:poststelle@ldi.nrw.de" className="text-craft-600 hover:text-craft-700 underline">
                      poststelle@ldi.nrw.de
                    </a>
                  </p>
                  <p className="mt-3">
                    <a
                      href="https://www.ldi.nrw.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-craft-600 hover:text-craft-700 underline"
                    >
                      www.ldi.nrw.de
                    </a>
                  </p>
                </div>
                <p className="text-sm text-warm-600 mt-4">
                  Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den
                  Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich der
                  Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
                </p>
              </div>
            </section>

            {/* 13. SSL/TLS */}
            <section className="mb-10 pb-10 border-b border-warm-200">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                15. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                  Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                  <span className="font-bold"> SSL- bzw. TLS-Verschlüsselung</span>. Eine verschlüsselte
                  Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf
                  „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p>
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
                  übermitteln, nicht von Dritten mitgelesen werden. Dies gilt insbesondere für die
                  Übertragung von Formulardaten.
                </p>
              </div>
            </section>

            {/* 14. Aktualität */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">
                16. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <div className="text-warm-800 space-y-4">
                <p>
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand:{' '}
                  <span className="font-bold">{new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </p>
                <p>
                  Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter
                  gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese
                  Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit
                  auf dieser Seite von Ihnen abgerufen und ausgedruckt werden.
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

