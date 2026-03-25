# SR-02: Narrowing

> *"Type Narrowing adalah fitur TypeScript yang paling underrated — ia mengubah `if` biasa menjadi mesin type-safety."*

## Gambaran Sub-Rak
Narrowing adalah proses di mana TypeScript mempersempit tipe dari yang luas ke yang spesifik berdasarkan alur kontrol kode. Di baliknya ada algoritma *Control Flow Analysis* yang menganalisis setiap cabang `if`, `switch`, dan `while`.

**Source:** [TypeScript Handbook — Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `NarrowingFundamentals` | `typeof` guards, truthiness narrowing, equality narrowing, `in` operator, `instanceof` |
| **BK-02** | `AdvancedNarrowing` | Control Flow Analysis internals, Type Predicates (`val is X`), Discriminated Unions, `never` exhaustiveness |

---
*Kembali ke [RAK-02: Foundation](../README.md)*
