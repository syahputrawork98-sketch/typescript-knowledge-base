# RAK-05: Ecosystem — The Environment

> **"TypeScript bukan bahasa yang berdiri sendiri — ia hidup di tengah ekosistem alat yang saling bergantung."**

Rak kelima membahas TypeScript dalam konteks lingkungan nyata: bagaimana mengonfigurasi compiler, bagaimana tipe dari library pihak ketiga bekerja, dan bagaimana TypeScript berintegrasi dengan bundler modern. Setiap developer TypeScript perlu menguasai ini untuk bekerja profesional.

## Struktur Sub-Rak

| Sub-Rak | Slug | Konten |
|:---|:---|:---|
| **SR-01** | `tsconfig` | `tsconfig.json` anatomy, `compilerOptions` kritis (`strict`, `target`, `module`, `paths`, `baseUrl`), `extends`, *Project References* |
| **SR-02** | `declaration-files` | `.d.ts` files, `declare` keyword, *Ambient Declarations*, *Global Augmentation*, `/// <reference types>` |
| **SR-03** | `types-packages` | `@types/*` dari DefinitelyTyped, cara membaca `.d.ts`, *Module Augmentation*, menulis custom declarations |
| **SR-04** | `module-resolution` | `node`, `node16`, `bundler` strategies, *Path Aliasing*, `exports` field di `package.json` |
| **SR-05** | `bundler-integration` | TypeScript + Vite, esbuild, Webpack, SWC — perbedaan transpile-only vs type-check, `isolatedModules` |
| **SR-06** | `monorepo` | TypeScript di Monorepo (Turborepo/Nx), *Project References*, shared `tsconfig`, cross-package types |

---
*Kembali ke [TypeScript Knowledge Base](../README.md)*
