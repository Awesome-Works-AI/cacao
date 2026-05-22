# Cacao

> **EUDR compliance dla plantacji kakao.** Working name. Landing-only, pre-MVP.
>
> Deadline regulacyjny: **30 grudnia 2026** — moment, w którym małe i mikro operacje wchodzą pod pełen reżim EU Deforestation Regulation (Regulation EU 2023/1115).

## Co to jest

Cacao to projekt narzędzi compliance dla właścicieli plantacji kakao i drobnych eksporterów, którzy muszą spełnić EUDR przed wejściem partii na rynek UE. Trzy moduły:

1. **GPS Mapping & Polygons** — geolokacja każdej działki ≥4 ha, polygony FAO-compliant.
2. **Due Diligence Statement (DDS)** — auto-generowany dossier z cytowanymi źródłami (GPS, satelita, faktury skupu).
3. **Risk & Satellite Alerts** — codzienny crosscheck z GLAD/RADD, alerty deforestacji przed inspekcją.

## Struktura repo

```
cacao/
├── README.md
└── landing/         # Astro 5 + Tailwind 4 landing page (PL + EN)
```

## Status

Lokalny dev, bez deploymentu. Sklonowane ze struktury `metyra/landing/` (własny projekt AwesomeWorks).

## Parent org

AwesomeWorks · Rafał Łazicki
