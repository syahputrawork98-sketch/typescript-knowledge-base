# SR-01: Lexer & Parser

> *"Source code adalah teks. Lexer mengubahnya menjadi token. Parser mengubah token menjadi pohon (AST). Tanpa dua langkah ini, compiler buta."*

## Gambaran Sub-Rak
Dua fase pertama pipeline `tsc`: Scanner/Lexer yang memecah source code menjadi token leksikal, dan Parser yang mengorganisasi token menjadi AST (Abstract Syntax Tree) berstruktur.

**Source:** [TypeScript Compiler Internals](https://basarat.gitbook.io/typescript/overview/scanner) | [TypeScript GitHub — scanner.ts](https://github.com/microsoft/TypeScript/blob/main/src/compiler/scanner.ts)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `LexerInternals` | Scanner anatomy, token kinds (`SyntaxKind`), trivia (whitespace/comments), scanning incrementally |
| **BK-02** | `ParserInternals` | Recursive descent parsing, node creation, error recovery, `createSourceFile` API |

---
*Kembali ke [RAK-06: Compiler](../README.md)*
