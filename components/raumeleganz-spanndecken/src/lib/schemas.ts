// Zentrale JSON-LD Schema Definitionen

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://raumeleganz-spanndecken.de/#organization",
  "name": "Raumeleganz Spanndecken",
  "image": "https://raumeleganz-spanndecken.de/logo.jpg",
  "url": "https://raumeleganz-spanndecken.de",
  "telephone": "+49-XXX-XXXXXXX",
  "email": "info@raumeleganz-spanndecken.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Altenessenerstr. 95",
    "addressLocality": "Düsseldorf",
    "postalCode": "40XXX",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.2277",
    "longitude": "6.7735"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.2277",
      "longitude": "6.7735"
    },
    "geoRadius": "50000",
    "description": "Nordrhein-Westfalen, Düsseldorf, Köln, Essen, Dortmund, Bochum, Wuppertal, Bielefeld, Bonn, Münster"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "€€",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "sameAs": []
};

export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist eine Spanndecke und wie funktioniert sie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine Spanndecke ist eine flexible PVC- oder Textilmembran, die unterhalb der bestehenden Decke montiert wird. Sie wird an speziellen Profilschienen befestigt und durch Erwärmen (bei PVC) oder mechanisch (bei Textil) straff gespannt. Das Ergebnis ist eine perfekt glatte, moderne Deckenoberfläche ohne Risse, Unebenheiten oder sichtbare Fugen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert die Montage einer Spanndecke?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Montage einer Spanndecke dauert je nach Raumgröße zwischen 6 und 8 Stunden. Bei einem durchschnittlichen Wohnzimmer (ca. 20 m²) ist die Installation meist an einem Tag abgeschlossen. Der Prozess ist nahezu staubfrei, es müssen keine Möbel ausgeräumt werden, und Sie können den Raum sofort nach der Montage wieder nutzen."
      }
    },
    {
      "@type": "Question",
      "name": "Was kostet eine Spanndecke pro Quadratmeter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Kosten für Spanndecken beginnen ab 79 € pro m² für matte Standardausführungen. Lackspanndecken (Hochglanz) liegen zwischen 89-160 € pro m², Satin-Spanndecken zwischen 85-150 € pro m². Der Gesamtpreis hängt von mehreren Faktoren ab: Raumgröße, Oberflächenart (matt, satin, hochglanz), Anzahl der Ecken und Aussparungen, LED-Integration sowie individuellen Designwünschen. Ein 20 m² großer Raum mit Standard-Spanndecke kostet komplett montiert etwa 1.800-2.400 €."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Vorteile haben Lackspanndecken gegenüber matten Spanndecken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lackspanndecken (Hochglanz) bieten mehrere Vorteile: Sie reflektieren Licht und lassen Räume dadurch größer und heller wirken. Der Spiegeleffekt schafft optisch bis zu 30% mehr Raumhöhe. Hochglanzoberflächen sind besonders pflegeleicht und abwaschbar – ideal für Badezimmer und Küchen. Sie wirken modern und luxuriös. Matte Spanndecken hingegen sind blendeffrei, schaffen eine ruhige Atmosphäre und eignen sich perfekt für Wohn- und Schlafzimmer."
      }
    },
    {
      "@type": "Question",
      "name": "Kann man LED-Beleuchtung in Spanndecken integrieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, LED-Beleuchtung lässt sich hervorragend in Spanndecken integrieren. Es gibt mehrere Möglichkeiten: LED-Spots als punktuelle Beleuchtung, LED-Profile für indirektes Licht an den Rändern, vollflächige Lichtdecken, bei denen die gesamte Decke zur Lichtquelle wird, und RGBW-LED-Systeme mit Farbwechsel und Dimmfunktion. Die LED-Integration wird vor der Montage geplant und die Verkabelung hinter der Spanndecke versteckt. Sie können sogar Smart-Home-Steuerung einbinden."
      }
    },
    {
      "@type": "Question",
      "name": "Wie pflegeleicht sind Spanndecken und wie lange halten sie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spanndecken sind extrem pflegeleicht und langlebig. Sie können mit einem feuchten Tuch und mildem Reinigungsmittel abgewischt werden – insbesondere Hochglanz-Oberflächen sind sehr unempfindlich. Sie sind antistatisch, ziehen keinen Staub an und sind schimmelresistent. Bei normaler Nutzung halten Spanndecken mindestens 15-20 Jahre. Wir geben 10 Jahre Garantie auf Material und Montage. Das Material ist UV-beständig, vergilbt nicht und behält dauerhaft seine Farbe und Spannkraft."
      }
    },
    {
      "@type": "Question",
      "name": "Eignen sich Spanndecken auch für Feuchträume wie Badezimmer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Spanndecken sind ideal für Feuchträume geeignet. Sie sind zu 100% wasserdicht und schützen sogar vor Wasserschäden von oben (z.B. bei Rohrbrüchen). Das Material ist schimmelresistent und antibakteriell. Besonders Lackspanndecken werden häufig in Badezimmern eingesetzt, da sie Feuchtigkeit reflektieren und sehr pflegeleicht sind. Sie können auch Lüftungsgitter und Badezimmerleuchten problemlos integrieren. Im Gegensatz zu Gipskarton oder Farbe gibt es keine Probleme mit abblätternder Farbe oder Schimmelbildung."
      }
    }
  ]
};

