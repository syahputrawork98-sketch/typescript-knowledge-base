# SR-02: Mapped Types

> *"Mapped Types adalah mesin transformasi tipe — satu deklarasi `{ [K in keyof T]: ... }` bisa menggantikan puluhan interface manual."*

## Gambaran Sub-Rak
Mapped Types memungkinkan transformasi struktural tipe secara otomatis. Ini adalah mekanisme di balik `Readonly<T>`, `Partial<T>`, `Required<T>`, dan semua utility types serupa.

**Source:** [TypeScript Handbook — Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `MappedTypeBasics` | `{ [K in keyof T]: T[K] }` anatomy, `+?`/`-?` modifiers, `+readonly`/`-readonly` |
| **BK-02** | `MappedTypeAdvanced` | Key remapping dengan `as`, filtering keys, template literal dalam mapped types, recursive mapped types |

---
*Kembali ke [RAK-04: Core Mechanics](../README.md)*
