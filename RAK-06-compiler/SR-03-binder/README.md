# SR-03: Binder

> *"Binder adalah fase antara parser dan type checker — ia membangun Symbol Table yang menghubungkan setiap identifier dengan deklarasinya."*

## Gambaran Sub-Rak
Binder mengambil AST dari parser dan menambahkan lapisan semantik: setiap identifier di-resolve ke symbol-nya, flow nodes dibangun untuk Control Flow Analysis, dan scope hierarchy dibentuk.

**Source:** [TypeScript Compiler Internals — Binder](https://basarat.gitbook.io/typescript/overview/binder) | [TypeScript GitHub — binder.ts](https://github.com/microsoft/TypeScript/blob/main/src/compiler/binder.ts)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `SymbolTable` | Symbol creation, Symbol Table structure, `ts.Symbol` interface, Declaration merging di binder |
| **BK-02** | `FlowNodes` | Flow Node graph, *Definite Assignment Analysis*, reachability tracking, `FlowFlags` |

---
*Kembali ke [RAK-06: Compiler](../README.md)*
