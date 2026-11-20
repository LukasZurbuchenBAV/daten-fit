/* =====================================================================
   DATENMANAGEMENT-QUIZ – Fragenkatalog
   ---------------------------------------------------------------------
   Erweitern: Einfach neue Objekte in "fragen" oder "baeume" einfügen.
   Kein Programmieren nötig – nur Komma und Anführungszeichen beachten.

   Fragetypen (typ):
     "single"     – genau eine Antwort richtig  -> richtig: [index]
     "multi"      – mehrere Antworten richtig   -> richtig: [index, index]
     "wahrfalsch" – optionen: ["Wahr","Falsch"] -> richtig: [0] oder [1]
   Index beginnt bei 0 (erste Option = 0).

   hilfsmittel (optional): Link auf Intranet-Hilfsmittel.
     url: "" lassen, solange das Hilfsmittel noch nicht publiziert ist
     -> wird als "in Erarbeitung" angezeigt.

   HINWEIS: Inhalte sind allgemeine Beispielfragen. Vor Publikation
   mit den BAV-Weisungen / Rollenbeschrieben abgleichen.
   ===================================================================== */

window.QUIZ = {
  titel: "Daten-Fit",
  untertitel: "Das Quiz der Datenmanagement-Community",

  phasen: [
    { id: "definieren",  nr: "1", titel: "Definieren, beschreiben",   icon: "📐" },
    { id: "erfassen",    nr: "2", titel: "Erfassen, erheben",         icon: "📥" },
    { id: "bearbeiten",  nr: "3", titel: "Bearbeiten, kontrollieren", icon: "🔧" },
    { id: "analysieren", nr: "4", titel: "Analysieren, präsentieren", icon: "📊" },
    { id: "publizieren", nr: "5", titel: "Publizieren, teilen",       icon: "🌐" },
    { id: "archivieren", nr: "∞", titel: "Historisieren, archivieren, löschen", icon: "🗄️" }
  ],

  fragen: [
    /* ---------- 1. Definieren, beschreiben ---------- */
    {
      id: "def-01", phase: "definieren", typ: "single",
      frage: "Wer entscheidet grundsätzlich, wer auf einen Datenbestand zugreifen darf?",
      optionen: ["Die IT bzw. der Betrieb", "Der Dateneigner (Data Owner)", "Wer die Daten zuerst erfasst hat", "Die Datenmanagement-Fachstelle"],
      richtig: [1],
      erklaerung: "Der Dateneigner trägt die fachliche Verantwortung und entscheidet über Zugriff und Nutzung. Die IT setzt um, die Fachstelle berät.",
      hilfsmittel: { titel: "AKV Dateneigner", url: "" }
    },
    {
      id: "def-02", phase: "definieren", typ: "multi",
      frage: "Welche Angaben gehören zu einer guten Beschreibung (Metadaten) eines Datensatzes? (mehrere richtig)",
      optionen: ["Verständlicher Titel und Beschreibung", "Verantwortliche Stelle / Kontakt", "Aktualisierungsrhythmus", "Lieblingsfarbe der Projektleitung"],
      richtig: [0, 1, 2],
      erklaerung: "Titel, Beschreibung, Verantwortlichkeit und Aktualität sind Kernmetadaten – sie machen Daten auffindbar und verständlich (z. B. auf i14y).",
      hilfsmittel: { titel: "Leitfaden Metadaten", url: "" }
    },
    {
      id: "def-03", phase: "definieren", typ: "wahrfalsch",
      frage: "Ein Datensatz muss erst ins Dateninventar, wenn er fertig und publiziert ist.",
      optionen: ["Wahr", "Falsch"],
      richtig: [1],
      erklaerung: "Inventarisiert wird früh – sobald ein Datenbestand für die Aufgabenerfüllung relevant ist. Nur was bekannt ist, kann gesteuert werden.",
      hilfsmittel: { titel: "Entscheidungsbaum Dateninventar", url: "" }
    },
    {
      id: "def-04", phase: "definieren", typ: "single",
      frage: "Wozu dient ein Fachbegriffs-Glossar im Datenmanagement vor allem?",
      optionen: ["Damit alle unter einem Begriff dasselbe verstehen", "Für die Rechtschreibprüfung", "Als Ersatz für Metadaten", "Um Datenmengen zu reduzieren"],
      richtig: [0],
      erklaerung: "Ein gemeinsames Begriffsverständnis ist die Basis für vergleichbare, kombinierbare Daten – intern und mit Partnern.",
      hilfsmittel: null
    },

    /* ---------- 2. Erfassen, erheben ---------- */
    {
      id: "erf-01", phase: "erfassen", typ: "single",
      frage: "Was besagt das Once-Only-Prinzip?",
      optionen: ["Daten werden nur einmal pro Jahr erhoben", "Personen und Unternehmen sollen dieselben Angaben der Verwaltung nur einmal liefern müssen", "Jeder Datensatz darf nur einmal genutzt werden", "Daten werden nach einmaligem Gebrauch gelöscht"],
      richtig: [1],
      erklaerung: "Once-Only: Bereits vorhandene Daten werden (mit Rechtsgrundlage) wiederverwendet statt erneut erhoben. Deshalb lohnt sich der Blick ins Inventar vor jeder Erhebung.",
      hilfsmittel: null
    },
    {
      id: "erf-02", phase: "erfassen", typ: "multi",
      frage: "Was klärst du VOR einer neuen Datenerhebung? (mehrere richtig)",
      optionen: ["Gibt es die Daten schon (intern oder bei anderen Stellen)?", "Gibt es eine Rechtsgrundlage, v. a. bei Personendaten?", "Wer wird Dateneigner?", "Welche Excel-Schriftart verwendet wird"],
      richtig: [0, 1, 2],
      erklaerung: "Wiederverwendung prüfen, rechtliche Grundlage klären und Ownership festlegen – bevor Aufwand entsteht.",
      hilfsmittel: { titel: "Checkliste neue Datenerhebung", url: "" }
    },
    {
      id: "erf-03", phase: "erfassen", typ: "wahrfalsch",
      frage: "Freitextfelder sind für die spätere Auswertung meist besser als vordefinierte Auswahllisten.",
      optionen: ["Wahr", "Falsch"],
      richtig: [1],
      erklaerung: "Auswahllisten (Codelisten) sichern Einheitlichkeit und Auswertbarkeit. Freitext nur, wo wirklich nötig.",
      hilfsmittel: null
    },
    {
      id: "erf-04", phase: "erfassen", typ: "single",
      frage: "Welches Prinzip gilt beim Erheben von Personendaten?",
      optionen: ["So viel wie möglich – man weiss nie", "Nur so viel wie für den Zweck nötig (Datenminimierung)", "Alles, solange es freiwillig ist", "Nur Daten von Bundesangestellten"],
      richtig: [1],
      erklaerung: "Verhältnismässigkeit und Zweckbindung (DSG): nur erheben, was für die Aufgabe erforderlich ist.",
      hilfsmittel: null
    },

    /* ---------- 3. Bearbeiten, kontrollieren ---------- */
    {
      id: "bea-01", phase: "bearbeiten", typ: "multi",
      frage: "Welche sind typische Dimensionen der Datenqualität? (mehrere richtig)",
      optionen: ["Vollständigkeit", "Korrektheit", "Aktualität", "Dateigrösse"],
      richtig: [0, 1, 2],
      erklaerung: "Gängige Dimensionen: Vollständigkeit, Korrektheit, Konsistenz, Aktualität, Eindeutigkeit. Die Dateigrösse sagt nichts über Qualität.",
      hilfsmittel: { titel: "Datenqualitäts-Check", url: "" }
    },
    {
      id: "bea-02", phase: "bearbeiten", typ: "single",
      frage: "Du entdeckst einen Fehler in Daten einer anderen Sektion. Was tust du?",
      optionen: ["Selbst in meiner Kopie korrigieren und weiterarbeiten", "Der/dem Datenverantwortlichen melden, damit an der Quelle korrigiert wird", "Ignorieren, ist nicht mein Bereich", "Die Daten löschen"],
      richtig: [1],
      erklaerung: "Fehler an der Quelle beheben – sonst entstehen widersprüchliche Versionen. Melden ist gelebte Datenqualität.",
      hilfsmittel: { titel: "AKV Datenverantwortliche", url: "" }
    },
    {
      id: "bea-03", phase: "bearbeiten", typ: "wahrfalsch",
      frage: "«Daten_final_v3_neu_wirklichfinal.xlsx» ist ein gutes Zeichen für sauberes Versionsmanagement.",
      optionen: ["Wahr", "Falsch"],
      richtig: [1],
      erklaerung: "Besser: eine Quelle, Versionierung durch das System (z. B. SharePoint-Versionsverlauf) und klare Namenskonventionen.",
      hilfsmittel: null
    },
    {
      id: "bea-04", phase: "bearbeiten", typ: "single",
      frage: "Wer legt fest, welche Informationssicherheits-Klassifizierung ein Datenbestand erhält?",
      optionen: ["Die Person, die das Dokument zufällig speichert", "Die fachlich verantwortliche Stelle (Dateneigner)", "Der Drucker-Support", "Niemand – alles ist automatisch öffentlich"],
      richtig: [1],
      erklaerung: "Die fachlich verantwortliche Stelle klassifiziert (z. B. intern, vertraulich, geheim gemäss ISG) und bestimmt damit den Schutzbedarf.",
      hilfsmittel: null
    },

    /* ---------- 4. Analysieren, präsentieren ---------- */
    {
      id: "ana-01", phase: "analysieren", typ: "single",
      frage: "Was gehört zwingend zu einer Grafik in einem Bericht?",
      optionen: ["Möglichst viele Farben", "Quelle und Stand der Daten", "3D-Effekt", "Ein Logo"],
      richtig: [1],
      erklaerung: "Quelle und Datenstand machen Aussagen nachvollziehbar und überprüfbar.",
      hilfsmittel: null
    },
    {
      id: "ana-02", phase: "analysieren", typ: "wahrfalsch",
      frage: "Eine y-Achse, die nicht bei 0 beginnt, kann bei Balkendiagrammen Unterschiede übertrieben darstellen.",
      optionen: ["Wahr", "Falsch"],
      richtig: [0],
      erklaerung: "Bei Balken wird die Länge verglichen – eine abgeschnittene Achse verzerrt. Bei Liniendiagrammen ist es oft vertretbar.",
      hilfsmittel: null
    },
    {
      id: "ana-03", phase: "analysieren", typ: "multi",
      frage: "Du möchtest Daten für eine Analyse mit einem KI-Tool auswerten. Was prüfst du? (mehrere richtig)",
      optionen: ["Klassifizierung der Daten", "Enthalten die Daten Personendaten?", "Ist das Tool für diese Daten zugelassen?", "Ob das Tool einen Dark Mode hat"],
      richtig: [0, 1, 2],
      erklaerung: "Klassifizierte oder personenbezogene Daten gehören nur in dafür freigegebene Tools.",
      hilfsmittel: null
    },
    {
      id: "ana-04", phase: "analysieren", typ: "single",
      frage: "Zwei Berichte zeigen für dieselbe Kennzahl unterschiedliche Werte. Häufigste Ursache?",
      optionen: ["Unterschiedliche Definitionen oder Stichtage", "Der Bildschirm ist falsch kalibriert", "Zufall", "Die Kennzahl ist geheim"],
      richtig: [0],
      erklaerung: "Fast immer liegt es an unterschiedlichen Definitionen, Filtern oder Stichtagen – zurück zu Phase 1!",
      hilfsmittel: null
    },

    /* ---------- 5. Publizieren, teilen ---------- */
    {
      id: "pub-01", phase: "publizieren", typ: "single",
      frage: "Was bedeutet «Open by Default» für Behördendaten?",
      optionen: ["Alle Daten werden sofort publiziert, auch Personendaten", "Daten werden grundsätzlich offen publiziert, sofern keine rechtlichen oder sicherheitsrelevanten Gründe dagegen sprechen", "Daten sind nur auf Anfrage erhältlich", "Nur Statistiken dürfen publiziert werden"],
      richtig: [1],
      erklaerung: "Das EMBAG verankert für die Bundesverwaltung den Grundsatz offener Daten – mit Ausnahmen z. B. für Personendaten, Geschäftsgeheimnisse oder Sicherheitsaspekte.",
      hilfsmittel: { titel: "Entscheidungsbaum OGD", url: "" }
    },
    {
      id: "pub-02", phase: "publizieren", typ: "single",
      frage: "Wo publiziert die Bundesverwaltung offene Behördendaten (OGD) zentral?",
      optionen: ["opendata.swiss", "Auf dem persönlichen Laufwerk", "Per E-Mail-Verteiler", "Im Intranet"],
      richtig: [0],
      erklaerung: "opendata.swiss ist das Portal für offene Behördendaten. Metadaten werden u. a. über i14y verwaltet.",
      hilfsmittel: null
    },
    {
      id: "pub-03", phase: "publizieren", typ: "multi",
      frage: "Was macht Daten wirklich wiederverwendbar? (mehrere richtig)",
      optionen: ["Maschinenlesbares Format (z. B. CSV statt PDF)", "Klare Nutzungsbedingungen", "Gute Metadaten", "Ein schön gestaltetes Deckblatt"],
      richtig: [0, 1, 2],
      erklaerung: "Maschinenlesbar, beschrieben und rechtlich klar – das ist der Kern der FAIR-Prinzipien.",
      hilfsmittel: null
    },
    {
      id: "pub-04", phase: "publizieren", typ: "wahrfalsch",
      frage: "Sind Personendaten anonymisiert, kann eine Publikation unter Umständen möglich sein.",
      optionen: ["Wahr", "Falsch"],
      richtig: [0],
      erklaerung: "Korrekt anonymisierte Daten sind keine Personendaten mehr. Achtung: Re-Identifikation durch Kombination muss ausgeschlossen sein.",
      hilfsmittel: null
    },

    /* ---------- Historisieren, archivieren, löschen ---------- */
    {
      id: "arc-01", phase: "archivieren", typ: "single",
      frage: "Daten werden für die Aufgabe nicht mehr gebraucht. Was gilt in der Bundesverwaltung?",
      optionen: ["Sofort löschen", "Dem Bundesarchiv anbieten, bevor gelöscht wird", "Auf einen USB-Stick kopieren", "Für immer behalten, Speicher ist billig"],
      richtig: [1],
      erklaerung: "Gemäss Archivierungsgesetz (BGA) besteht eine Anbietepflicht: Erst was das Bundesarchiv als nicht archivwürdig bewertet, darf vernichtet werden.",
      hilfsmittel: null
    },
    {
      id: "arc-02", phase: "archivieren", typ: "single",
      frage: "Was ist «Historisierung» von Daten?",
      optionen: ["Daten werden in ein Museum gebracht", "Frühere Zustände werden nachvollziehbar mit Gültigkeitszeitraum aufbewahrt", "Alte Daten werden überschrieben", "Daten werden ausgedruckt"],
      richtig: [1],
      erklaerung: "Historisierung hält fest, welcher Wert wann gültig war (z. B. «gültig von/bis») – wichtig für Nachvollziehbarkeit und Zeitreihen.",
      hilfsmittel: null
    },
    {
      id: "arc-03", phase: "archivieren", typ: "wahrfalsch",
      frage: "Personendaten dürfen beliebig lange aufbewahrt werden, solange sie gut geschützt sind.",
      optionen: ["Wahr", "Falsch"],
      richtig: [1],
      erklaerung: "Personendaten sind zu vernichten oder zu anonymisieren, sobald sie für den Zweck nicht mehr nötig sind (vorbehältlich Archivierung).",
      hilfsmittel: null
    },
    {
      id: "arc-04", phase: "archivieren", typ: "single",
      frage: "Wer sollte Aufbewahrungsfristen für einen Datenbestand festlegen?",
      optionen: ["Die fachlich verantwortliche Stelle, gestützt auf rechtliche Vorgaben", "Der Speicherplatz entscheidet", "Jede Person für sich", "Niemand"],
      richtig: [0],
      erklaerung: "Fristen gehören zur Verantwortung des Dateneigners und werden idealerweise im Inventar dokumentiert.",
      hilfsmittel: null
    }
  ],

  /* =====================================================================
     ENTSCHEIDUNGSBÄUME – interaktive Hilfsmittel zum Durchklicken
     Jeder Knoten hat entweder "frage" + "ja"/"nein" (Ziel-Knoten-ID)
     oder "ergebnis" (Endpunkt). Beispielinhalte – bitte durch die
     offiziellen BAV-Bäume ersetzen, sobald erarbeitet.
     ===================================================================== */
  baeume: [
    {
      id: "baum-inventar", phase: "definieren", titel: "Gehört mein Datenbestand ins Dateninventar?",
      start: "k1",
      knoten: {
        k1: { frage: "Wird der Datenbestand für die Aufgabenerfüllung des BAV genutzt?", ja: "k2", nein: "e-nein" },
        k2: { frage: "Ist es eine strukturierte Sammlung (Tabelle, Datenbank, Fachanwendung) und nicht nur ein Einzeldokument?", ja: "k3", nein: "e-dok" },
        k3: { frage: "Wird er länger als ein einmaliges Projekt genutzt oder von mehreren Personen verwendet?", ja: "e-ja", nein: "e-pruefen" },
        "e-ja":     { ergebnis: "✅ Ja – ins Dateninventar aufnehmen und Dateneigner bestimmen." },
        "e-pruefen":{ ergebnis: "🤔 Eher nein – aber mit der Fachstelle Datenmanagement kurz prüfen." },
        "e-dok":    { ergebnis: "📄 Nein – Einzeldokumente gehören in die Geschäftsverwaltung (GEVER), nicht ins Dateninventar." },
        "e-nein":   { ergebnis: "❌ Nein – kein Inventareintrag nötig." }
      }
    },
    {
      id: "baum-ogd", phase: "publizieren", titel: "Kann ich diese Daten als OGD publizieren?",
      start: "k1",
      knoten: {
        k1: { frage: "Enthalten die Daten Personendaten (auch indirekt bestimmbar)?", ja: "k1b", nein: "k2" },
        k1b:{ frage: "Lassen sie sich zuverlässig anonymisieren oder aggregieren?", ja: "k2", nein: "e-nein" },
        k2: { frage: "Sind die Daten höher als «intern» klassifiziert oder enthalten sie Geschäftsgeheimnisse Dritter?", ja: "e-nein", nein: "k3" },
        k3: { frage: "Hat das BAV die Rechte an den Daten (keine Lizenzeinschränkungen Dritter)?", ja: "e-ja", nein: "e-klaeren" },
        "e-ja":     { ergebnis: "✅ Kandidat für OGD – Metadaten erfassen und via i14y / opendata.swiss publizieren." },
        "e-klaeren":{ ergebnis: "⚖️ Rechte zuerst mit Datenlieferant und Rechtsdienst klären." },
        "e-nein":   { ergebnis: "🔒 Nicht als OGD publizieren – ggf. eingeschränkte Weitergabe prüfen." }
      }
    }
  ]
};
