// Moved here from the old homepage (VersionHistorySection / RoadmapSection).
type L = { en: string; de: string }

export const versions: { version: string; date: L; items: L[] }[] = [
  {
    version: '1.2.3',
    date: { en: 'May 2026', de: 'Mai 2026' },
    items: [
      { en: 'Echelon Analysis (beta) – new Premium feature for pro-style wind tactics: sector-by-sector crosswind risk with surface-aware physics (CORINE/OSM land use)', de: 'Windkanten-Analyse (Beta) – neue Premium-Funktion für Profi-Windtaktik: Seitenwind-Risiko Sektor für Sektor mit oberflächenbewusster Physik (CORINE/OSM-Landnutzung)' },
      { en: 'Apparent wind with terrain-aware correction – see what you really feel on the bike, not just what the forecast says', de: 'Scheinwind mit geländebewusster Korrektur – sieh, was du auf dem Rad wirklich spürst, nicht nur, was die Prognose sagt' },
      { en: 'Wind Flow Map: tailwind, headwind and crosswind sections directly on the route, with clickable segments', de: 'Wind Flow Map: Rücken-, Gegen- und Seitenwind-Abschnitte direkt auf der Route, mit anklickbaren Segmenten' },
      { en: 'Tailwind Score: one 0–100 number for how friendly the wind will be on your ride, with spectrum bar', de: 'Tailwind Score: eine Zahl von 0 bis 100, wie freundlich der Wind auf deiner Fahrt ist, mit Farbskala' },
      { en: 'Precipitation probability now terrain-aware everywhere, with realistic peak gusts in summaries', de: 'Regenwahrscheinlichkeit jetzt überall geländebewusst, mit realistischen Spitzenböen in den Zusammenfassungen' },
      { en: 'Major performance gains: faster Plan Ride, shared roughness cache, smoother first render', de: 'Deutlich schneller: flotteres Planen, gemeinsamer Rauigkeits-Cache, ruhigerer erster Seitenaufbau' },
      { en: 'Polished dark mode across Echelon, share view and weather charts', de: 'Überarbeiteter Dark Mode für Windkanten, Teilen-Ansicht und Wetterdiagramme' },
    ],
  },
  {
    version: '1.1.2',
    date: { en: 'March 2026', de: 'März 2026' },
    items: [
      { en: 'Sign in with Google and Apple on iOS and web', de: 'Anmeldung mit Google und Apple auf iOS und im Web' },
      { en: 'Web app billing via Stripe – the full Premium experience now also on the web app', de: 'Bezahlung in der Web-App über Stripe – Premium jetzt auch vollständig in der Web-App' },
      { en: 'Dedicated email confirmation screen for a clearer sign-up flow', de: 'Eigener Bestätigungsbildschirm für die E-Mail – klarere Registrierung' },
      { en: 'Wind height correction: forecasts adjusted from 10 m measurement height to rider level', de: 'Höhenkorrektur des Winds: Prognosen von 10 m Messhöhe auf Fahrerhöhe umgerechnet' },
      { en: 'Real wind gust data from all weather providers', de: 'Echte Böendaten aller Wetterdienste' },
      { en: 'More precise Apple WeatherKit wind, humidity and cloud cover', de: 'Genauerer Wind, Luftfeuchte und Bewölkung aus Apple WeatherKit' },
    ],
  },
  {
    version: '1.1.1',
    date: { en: 'December 2025', de: 'Dezember 2025' },
    items: [
      { en: 'Secure password reset directly in the app', de: 'Sicheres Zurücksetzen des Passworts direkt in der App' },
      { en: 'Better input for coffee stop duration', de: 'Bessere Eingabe der Kaffeepausen-Dauer' },
      { en: 'Clearer weather display with precise rain forecasts in the optimal time window', de: 'Klarere Wetteranzeige mit genauer Regenprognose im optimalen Zeitfenster' },
      { en: 'Fixed: view stayed zoomed in after editing a coffee stop on mobile', de: 'Behoben: Ansicht blieb nach dem Bearbeiten einer Kaffeepause auf dem Handy vergrößert' },
      { en: 'Improved order of Strava routes after connecting Strava', de: 'Bessere Reihenfolge der Strava-Routen nach dem Verbinden' },
    ],
  },
  {
    version: '1.1.0',
    date: { en: 'December 2025', de: 'Dezember 2025' },
    items: [
      { en: 'First App Store release', de: 'Erste Version im App Store' },
      { en: 'Route-specific weather forecasts and wind analysis for your direction', de: 'Routenbezogene Wetterprognosen und Windanalyse für deine Fahrtrichtung' },
      { en: 'Strava and Komoot integration', de: 'Anbindung an Strava und Komoot' },
      { en: 'Coffee stop planning with weather impact', de: 'Kaffeepausen-Planung mit Auswirkung aufs Wetter' },
      { en: 'Premium subscription and multi-source forecasting', de: 'Premium-Abo und Prognosen aus mehreren Quellen' },
    ],
  },
]

export const roadmap: { title: L; text: L }[] = [
  {
    title: { en: 'Saved Echelon analyses', de: 'Gespeicherte Windkanten-Analysen' },
    text: { en: 'Save and revisit Echelon analyses, compare scenarios for the same route and share them with your team.', de: 'Windkanten-Analysen speichern und wieder öffnen, Szenarien für dieselbe Route vergleichen und mit dem Team teilen.' },
  },
  {
    title: { en: 'Demo route for the first start', de: 'Demo-Route beim ersten Start' },
    text: { en: 'A built-in demo route so you can explore Echelon, Wind Flow Map and Tailwind Score right away – without importing anything first.', de: 'Eine eingebaute Demo-Route, damit du Windkanten, Wind Flow Map und Tailwind Score sofort ausprobieren kannst – ohne vorher etwas zu importieren.' },
  },
  {
    title: { en: 'Weather reminders', de: 'Wetter-Erinnerungen' },
    text: { en: 'An optional reminder before a planned ride if conditions shift – so you can adjust timing or route.', de: 'Eine optionale Erinnerung vor einer geplanten Fahrt, wenn sich die Bedingungen ändern – damit du Startzeit oder Route anpassen kannst.' },
  },
  {
    title: { en: 'Android app', de: 'Android-App' },
    text: { en: 'All features on Android. Until then, the web app works on any phone.', de: 'Alle Funktionen auch auf Android. Bis dahin läuft die Web-App auf jedem Handy.' },
  },
]
