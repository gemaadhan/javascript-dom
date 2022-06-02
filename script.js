//buat tag p kosong
const pBaru = document.createElement("p");
//buat isinya
const teksPBaru = document.createTextNode("Paragraph Baru");
//pindahkan isi ke dalam tag p
pBaru.appendChild(teksPBaru);

//simpan pBaru di akhir Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// =================

//buat tag li kosong
const liBaru = document.createElement("li");
//buat isinya
const teksLiBaru = document.createTextNode("Item Baru");
//pindahkan isi ke dalam tag li
liBaru.appendChild(teksLiBaru);

//kita cari bungkus nya dulu
const ul = document.querySelector("section#b ul");

//kita perlu select li nomor 2 karena kita akan sisipkan elemen baru di bawahny
const li2 = ul.querySelector("li:nth-child(2)");

//didalam ul, sisipkan liBaru sebelum li2
ul.insertBefore(liBaru, li2);
