# SR-04: Module Resolution

> *"Module resolution adalah cara `tsc` menemukan file yang di-import — memahaminya mencegah frustasi `Cannot find module` yang misterius."*

## Gambaran Sub-Rak
Module resolution adalah algoritma yang digunakan `tsc` untuk menemukan file TypeScript/JavaScript yang di-import. Strategi resolusi berbeda (`node`, `node16`, `bundler`) menghasilkan perilaku yang sangat berbeda.

**Source:** [TypeScript Docs — Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `ResolutionStrategies` | `node` vs `node16` vs `bundler` — algoritma pencarian file, `exports` field di `package.json` |
| **BK-02** | `PathConfiguration` | Path aliasing (`paths`), `baseUrl`, `rootDirs`, debugging resolution dengan `--traceResolution` |

---
*Kembali ke [RAK-05: Ecosystem](../README.md)*
