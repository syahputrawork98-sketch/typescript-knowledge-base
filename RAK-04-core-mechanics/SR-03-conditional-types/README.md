# SR-03: Conditional Types

> *"`T extends U ? X : Y` adalah if-else untuk tipe — dan dengan `infer`, ia menjadi pattern matching yang sangat powerful."*

## Gambaran Sub-Rak
Conditional Types memungkinkan logika bercabang di level tipe. Ini adalah mekanisme di balik `ReturnType<T>`, `Exclude<T, U>`, `Extract<T, U>`, dan semua derivasi tipe yang bergantung pada kondisi.

**Source:** [TypeScript Handbook — Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `ConditionalTypeBasics` | `T extends U ? X : Y` anatomy, constraint checking, *Distributive Conditional Types* |
| **BK-02** | `InferAndPatternMatch` | `infer` keyword: extracting types from structure, `ReturnType`, `Parameters`, `InstanceType`, recursive conditionals |

---
*Kembali ke [RAK-04: Core Mechanics](../README.md)*
