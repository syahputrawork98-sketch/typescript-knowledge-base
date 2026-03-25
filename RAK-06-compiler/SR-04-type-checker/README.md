# SR-04: Type Checker

> *"Type Checker adalah 'hakimnya' TypeScript — ia memutuskan apakah kode kamu sah secara tipe menggunakan algoritma assignability yang sangat kompleks."*

## Gambaran Sub-Rak
Type Checker adalah fase terpanjang dan terberat dalam pipeline `tsc`. Ia mengambil AST + Symbol Table dan memverifikasi konsistensi tipe menggunakan algoritma structural assignability.

**Source:** [TypeScript GitHub — checker.ts](https://github.com/microsoft/TypeScript/blob/main/src/compiler/checker.ts) (file terbesar di TypeScript codebase, ~50.000 baris)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `TypeCheckerAPI` | `ts.TypeChecker` interface, `getTypeAtLocation`, `getSymbolAtLocation`, diagnostics API |
| **BK-02** | `AssignabilityAlgorithm` | Structural assignability, type compatibility rules, excess property checking, variance checking |

---
*Kembali ke [RAK-06: Compiler](../README.md)*
