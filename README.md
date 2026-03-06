# TypeScript Knowledge Base

Repositori ini adalah **basis pengetahuan terstruktur tentang TypeScript** yang disusun seperti **perpustakaan teknis**.

Tujuan utama dari repository ini adalah untuk membangun kumpulan penjelasan yang terorganisasi dengan baik mengenai TypeScript, mulai dari konsep dasar hingga topik lanjutan, termasuk sistem tipe, prinsip desain, pola penggunaan, konfigurasi compiler, serta ekosistem yang mengelilinginya.

Repository ini tidak dimaksudkan sebagai pengganti dokumentasi resmi TypeScript, tetapi sebagai **versi kurasi pribadi** yang disusun agar lebih mudah dipahami, dipelajari, dan dirujuk kembali.

Struktur repository ini dibagi menjadi beberapa **"buku" utama**, di mana setiap buku membahas satu area penting dari TypeScript.

Ke depannya, repository ini juga dirancang sebagai **sumber utama konten** yang dapat digunakan untuk membangun **website dokumentasi pribadi tentang TypeScript**.

---

# Struktur Perpustakaan

Repository ini disusun seperti **rak buku teknis**, di mana setiap direktori utama merepresentasikan sebuah buku.

## Foundations

### 01. TypeScript Tutorial

Pengantar TypeScript yang dirancang untuk memahami dasar-dasar penggunaan TypeScript.

Topik utama:

* Mengapa menggunakan TypeScript
* Instalasi TypeScript
* Type annotations dasar
* Typing variables
* Typing functions
* Typing objects
* Union types
* Literal types
* Narrowing dasar
* Generic dasar
* Contoh proyek sederhana

---

### 02. TypeScript First Principles

Membahas **prinsip dasar dan filosofi desain TypeScript**.

Topik utama:

* Static typing vs dynamic typing
* Compile-time vs runtime
* Structural typing
* Type compatibility
* Type assignability
* Type inference
* Control flow analysis
* Narrowing concept
* Soundness vs practicality
* Filosofi desain TypeScript

---

# Core Language

### 03. TypeScript Type System

Penjelasan lengkap mengenai **komponen sistem tipe dalam TypeScript**.

Topik utama:

* Primitive types
* Object types
* Arrays
* Tuples
* Union types
* Intersection types
* Literal types
* Enum
* Interface
* Type alias
* Optional properties
* Readonly properties
* Index signatures

---

### 04. TypeScript Generics

Membahas konsep **generic programming dalam TypeScript**.

Topik utama:

* Generic functions
* Generic interfaces
* Generic classes
* Generic constraints
* Default generics
* Generic inference
* Reusable generic patterns

---

### 05. TypeScript Advanced Types

Topik lanjutan dalam sistem tipe TypeScript.

Topik utama:

* Mapped types
* Conditional types
* Utility types
* keyof
* Indexed access types
* Template literal types
* infer keyword
* Recursive types

---

# Practical Usage

### 06. TypeScript for Application Modeling

Bagaimana menggunakan TypeScript untuk **memodelkan data dan struktur aplikasi nyata**.

Topik utama:

* Modeling API responses
* Discriminated unions
* State modeling
* Form state
* Error modeling
* Optional data modeling
* Pagination models
* Async state patterns

---

### 07. TypeScript Runtime Boundaries

Menjelaskan **batas kemampuan TypeScript**, terutama perbedaan antara compile-time dan runtime.

Topik utama:

* TypeScript tidak ada saat runtime
* Runtime validation
* Unsafe type assertions
* Handling external data
* JSON parsing
* API data validation
* Bridging runtime values and static types

---

### 08. TypeScript Patterns & Anti-Patterns

Kumpulan pola desain yang baik serta praktik yang perlu dihindari saat menggunakan TypeScript.

Contoh patterns:

* Discriminated union state machines
* Type-safe API wrappers
* Exhaustive switch checking
* Safe optional access
* Reusable utility types

Contoh anti-patterns:

* Overusing `any`
* Abusing type assertions
* Over-engineering generics
* Complex unreadable type logic

---

# Engineering

### 09. TypeScript Compiler & Configuration

Penjelasan tentang **TypeScript compiler dan konfigurasi proyek**.

Topik utama:

* TypeScript compiler (`tsc`)
* tsconfig.json
* Strict mode
* Target configuration
* lib configuration
* Module resolution
* Declaration files
* Project references
* Incremental compilation

---

### 10. TypeScript Modules & Project Architecture

Struktur proyek TypeScript dan manajemen modul.

Topik utama:

* ES Modules
* CommonJS
* Module resolution
* Path mapping
* Project structure
* Monorepo TypeScript
* Type sharing antar modul
* Struktur library TypeScript

---

### 11. TypeScript Testing & Tooling

Tools yang digunakan untuk mengembangkan proyek TypeScript secara efektif.

Topik utama:

* Testing TypeScript
* Type testing
* tsd
* Jest dengan TypeScript
* ts-node
* ESLint dengan TypeScript
* Prettier
* IDE tooling

---

# Companion

### 12. TypeScript Ecosystem Companion

Gambaran ekosistem yang mendukung TypeScript.

Topik utama:

* TypeScript language service
* DefinitelyTyped
* ts-node
* tsx
* Bundlers dengan TypeScript
* Framework yang mendukung TypeScript
* Linting tools
* Build tools

---

### 13. TypeScript Release Notes Companion

Dokumentasi perubahan dan evolusi TypeScript.

Topik utama:

* Ringkasan fitur per versi
* Perubahan penting
* Breaking changes
* Contoh penggunaan fitur baru

Contoh struktur:

* TypeScript 5.0
* TypeScript 5.1
* TypeScript 5.2
* TypeScript 5.3
* TypeScript 5.4
* TypeScript 5.x dan seterusnya

---

# Tujuan Repository

Repository ini bertujuan untuk:

* Menyediakan penjelasan TypeScript yang **terstruktur dan mudah dipahami**
* Menjadi **referensi pribadi jangka panjang**
* Menyusun pengetahuan TypeScript seperti **perpustakaan teknis**
* Menjadi **sumber utama konten untuk website dokumentasi TypeScript pribadi**

---

# Catatan

TypeScript terus berkembang, sehingga repository ini akan terus diperbarui untuk mencerminkan perubahan dan fitur terbaru dari bahasa tersebut.
