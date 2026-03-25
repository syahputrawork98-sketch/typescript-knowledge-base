# RAK-06: Compiler — The Machine Room

> **"Memahami `tsc` dari dalam adalah perbedaan antara developer yang menggunakan TypeScript dan arsitek yang menguasainya."**

Rak keenam adalah ruang mesin paling dalam. Di sini kita membedah `tsc` bukan sebagai alat, melainkan sebagai sistem. Mulai dari cara teks source code diubah menjadi token, lalu AST, lalu graph tipe, hingga akhirnya diemit sebagai JavaScript. Ini adalah pengetahuan yang memungkinkan kamu mem-build plugin, custom transformer, dan language tooling.

## Struktur Sub-Rak

| Sub-Rak | Slug | Konten |
|:---|:---|:---|
| **SR-01** | `lexer-and-parser` | Scanner/Lexer: tokenisasi source code. Parser: mengubah token menjadi AST (*Abstract Syntax Tree*) |
| **SR-02** | `ast-internals` | Struktur AST TypeScript, `ts.Node`, *SyntaxKind* enum, cara membaca & traversal AST dengan `ts.forEachChild` |
| **SR-03** | `binder` | Binder phase: membangun *Symbol Table*, resolusi nama (Name Resolution), *Flow Nodes* untuk Control Flow Analysis |
| **SR-04** | `type-checker` | Type Checker API: `getTypeAtLocation`, *Assignability Algorithm*, *Structural Compatibility*, error diagnostics |
| **SR-05** | `emitter-and-transformer` | Emitter: AST → JavaScript/Declaration files. Transformer API: menulis custom transformations |
| **SR-06** | `compiler-api` | `ts.createProgram`, `LanguageService`, *Watch API*, build tools yang membangun di atas Compiler API |

---
*Kembali ke [TypeScript Knowledge Base](../README.md)*
