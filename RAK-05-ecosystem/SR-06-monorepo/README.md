# SR-06: Monorepo

> *"TypeScript dalam Monorepo tanpa Project References adalah resep untuk type-check yang lambat dan stale types."*

## Gambaran Sub-Rak
Menggunakan TypeScript di monorepo memerlukan strategi khusus untuk memastikan types antar-paket konsisten dan proses build efisien. Sub-Rak ini membahas *Project References* sebagai solusi native `tsc`.

**Source:** [TypeScript Docs — Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `ProjectReferences` | `references` field di tsconfig, `composite: true`, incremental builds, `--build` mode |
| **BK-02** | `MonorepoTooling` | Turborepo + TS, Nx + TS, shared `tsconfig` base, cross-package type imports, `pnpm` workspaces |

---
*Kembali ke [RAK-05: Ecosystem](../README.md)*
