# SR-06: Compiler API

> *"TypeScript Compiler API adalah pintu masuk ke semua yang ada di RAK-06 ini — sebuah API publik untuk mengakses seluruh pipeline `tsc` secara programatik."*

## Gambaran Sub-Rak
TypeScript Compiler API memungkinkan developer menggunakan `tsc` sebagai library: membuat program, mengakses type information, menjalankan language services, dan membangun tooling di atasnya.

**Source:** [TypeScript Compiler API Wiki](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `ProgramAPI` | `ts.createProgram`, `ts.CompilerHost`, membaca diagnostics, mengakses AST dan Checker |
| **BK-02** | `LanguageServiceAndWatch` | `ts.LanguageService`, Watch API untuk incremental builds, `ts.server` protocol |

---
*Kembali ke [RAK-06: Compiler](../README.md)*
