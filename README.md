# Hello World

Perkenalkan nama saya **Hanif Dwy Putra S** yang sedang belajar mendalami ilmu pemrograman terutama **JavaScript**. Kali ini, saya telah membuat CRUD sederhana menggunakan sistem **JSON** dengan module node **fs**. Jadi, tidak perlu banyak konfigurasi yang dibutuhkan hanya berfokus pada letak posisi file storage target.

# Cara

Saya telah membuat contoh sederhana bagaimana menggunakan CRUD tersebut di file `app.js`
berikut code nya

```js
const BelajarJS = require("./src");
const belajar = new BelajarJS("./temp.json");

belajar.delete("Honey").then((a) => console.log(a)).catch((b) => console.error(b));
```

Diatas adalah contoh kode untuk method delete terhadap data, method yang tersedia antara lain adalah `get`, `set`, `delete`, `push`. Untuk next update saya akan tambahkan method `math` atau *mathematic* yang berfungsi untuk menambahkan angka pada suatu value.

# Donate

Terimakasih untuk melihat sejenak dari repository kecil saya ini, untuk supportnya bisa [Sawer](https://saweria.co/hanifdwyputra) atau [Traktir](https://trakteer.id/hans-putera).