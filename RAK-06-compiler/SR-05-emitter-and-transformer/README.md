# SR-05: Emitter & Transformer

> *"Emitter adalah fase terakhir: mengubah AST yang sudah diverifikasi menjadi JavaScript. Transformer API memberimu kekuatan untuk mengintervensi proses ini."*

## Gambaran Sub-Rak
Emitter mengambil AST yang sudah divalidasi dan menghasilkan output: file `.js` dan `.d.ts`. Transformer API adalah hook yang memungkinkan plugin mengubah AST sebelum emisi — fondasi dari Babel plugins dan custom macros.

**Source:** [TypeScript GitHub — emitter.ts](https://github.com/microsoft/TypeScript/blob/main/src/compiler/emitter.ts) | [Custom Transformers](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API#creating-and-printing-a-typescript-ast)

## Struktur Buku (BK)

| Buku | Slug | Konten Bab-Bab di Dalamnya |
|:---|:---|:---|
| **BK-01** | `EmitterInternals` | JS emit pipeline, Declaration emit (`.d.ts`), `--declaration`, `--sourceMap` mechanics |
| **BK-02** | `TransformerAPI` | `ts.TransformationContext`, `ts.visitNode`, menulis custom transformer, plugin architecture |

---
*Kembali ke [RAK-06: Compiler](../README.md)*
