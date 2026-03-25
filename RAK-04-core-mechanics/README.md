# RAK-04: Core Mechanics — The Internal Logic

> **"Type system TypeScript bukan sekedar anotasi — ia adalah bahasa pemrograman di dalam bahasa pemrograman."**

Rak keempat masuk ke ruang mesin sistem tipe. Ini bukan tentang *cara pakai*, melainkan *bagaimana ia bekerja* di level algoritma. Generics bukan sekadar `<T>` — ia adalah fungsi yang beroperasi di ranah tipe. Conditional types adalah *if-else* untuk tipe. Di sini kita berpikir seperti compiler.

## Struktur Sub-Rak

| Sub-Rak | Slug | Konten |
|:---|:---|:---|
| **SR-01** | `generics` | Generic Functions, Generic Interfaces, Generic Constraints (`extends`), *Default Type Parameters*, variance |
| **SR-02** | `mapped-types` | `{ [K in keyof T]: ... }`, `Readonly<T>`, `Partial<T>`, `Required<T>`, `Pick<T>`, `Omit<T>`, *Remapping* |
| **SR-03** | `conditional-types` | `T extends U ? X : Y`, `infer`, `Exclude`, `Extract`, `ReturnType`, *Distributive Conditional Types* |
| **SR-04** | `template-literal-types` | `` `${...}` `` di level tipe, `Uppercase`/`Lowercase`/`Capitalize`, string manipulation types |
| **SR-05** | `type-inference` | Algoritma inferensi TypeScript, *Contextual Typing*, *Best Common Type*, `infer` scoping rules |
| **SR-06** | `utility-types` | Semua built-in Utility Types, implementasi manual di baliknya, komposisi tipe kompleks |

---
*Kembali ke [TypeScript Knowledge Base](../README.md)*
