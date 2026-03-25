# SR-02: AST Internals

> *"AST adalah representasi terstruktur dari kode kamu — setiap `if`, `function`, dan `identifier` adalah node dengan tipe dan posisi yang tepat."*

## Gambaran Sub-Rak
Abstract Syntax Tree adalah jantung dari `tsc`. Memahami struktur AST memungkinkan kamu menulis custom linters, transformers, dan code generators menggunakan TypeScript Compiler API.

**Source:** [TypeScript AST Viewer](https://ts-ast-viewer.com) | [TypeScript GitHub — types.ts](https://github.com/microsoft/TypeScript/blob/main/src/compiler/types.ts)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `ASTStructure` | `ts.Node` interface, `SyntaxKind` enum, parent-child relationships, `pos`/`end` spans |
| **BK-02** | `ASTTraversal` | `ts.forEachChild`, `ts.visitEachChild`, Visitor pattern, membaca AST dengan `ts-ast-viewer` |

---
*Kembali ke [RAK-06: Compiler](../README.md)*
