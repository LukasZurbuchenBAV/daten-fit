# Daten-Fit – Datenmanagement-Quiz

Spielerisches Lernquiz der Datenmanagement-Community entlang des Datenlebenszyklus:
1. Definieren, beschreiben · 2. Erfassen, erheben · 3. Bearbeiten, kontrollieren ·
4. Analysieren, präsentieren · 5. Publizieren, teilen · ∞ Historisieren, archivieren, löschen

## Dateien
- `index.html` – die App (nicht anfassen nötig)
- `fragen.js` – **alle Inhalte**: Phasen, Fragen, Entscheidungsbäume

## Neue Frage hinzufügen
In `fragen.js` einen Block kopieren, `id` eindeutig machen, Inhalt anpassen:

```js
{
  id: "pub-05", phase: "publizieren", typ: "single",
  frage: "…?",
  optionen: ["A", "B", "C"],
  richtig: [0],
  erklaerung: "…",
  hilfsmittel: { titel: "Entscheidungsbaum OGD", url: "https://intranet…" }
},
```
Typen: `single`, `multi`, `wahrfalsch`. Index startet bei 0.

## Hilfsmittel verlinken
Solange `url: ""` → Anzeige «in Erarbeitung». Sobald auf dem Intranet publiziert, URL eintragen.

## Spielmechanik
10 Punkte pro richtige Antwort, +5 Serienbonus ab 3 in Folge. Reifegrad pro Phase (Stufe 1–5)
= Anteil gemeisterter Fragen. Abzeichen bei 100 %. Fortschritt bleibt lokal im Browser.

## Publizieren
Settings → Pages → Branch `main`, Ordner `/ (root)`.
