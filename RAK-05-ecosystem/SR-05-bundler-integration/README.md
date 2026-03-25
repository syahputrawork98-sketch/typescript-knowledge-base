# SR-05: Bundler Integration

> *"Bundler modern tidak menjalankan `tsc` — mereka hanya strip types. Memahami perbedaan ini mengubah cara kamu setup proyek TypeScript."*

## Gambaran Sub-Rak
Integrasi TypeScript dengan bundler modern (Vite, esbuild, SWC, Webpack) bekerja berbeda dari `tsc` tradisional. Sub-Rak ini membahas trade-offs antara transpile-only mode vs full type-checking.

**Source:** [TypeScript Docs — Integrating with Build Tools](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `TranspileOnly` | Vite, esbuild, SWC — transpile-only mode, `isolatedModules` requirement, type-check terpisah |
| **BK-02** | `FullTypeCheck` | Webpack + `ts-loader`/`fork-ts-checker`, `tsc --noEmit` dalam CI, trade-offs performa |

---
*Kembali ke [RAK-05: Ecosystem](../README.md)*
