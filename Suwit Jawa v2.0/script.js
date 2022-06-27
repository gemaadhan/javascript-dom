// Membuat Fungsi pilihan komputer menjadi Random
// Kita bisa menyingkat if else menggunakan return
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// Membuat hasil suwit computer vs player
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

// //kita kasih akibat kalao kita klik elemen gajah
// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   //kita ganti gambar nya si komputer
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   //kita tampilkan hasilnya
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// //kita kasih akibat kalao kita klik elemen orang
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   //kita ganti gambar nya si komputer
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   //kita tampilkan hasilnya
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// //kita kasih akibat kalao kita klik elemen semut
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   //kita ganti gambar nya si komputer
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   //kita tampilkan hasilnya
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// Membuat Fungsi Putar pada computer
// menggunakan Timing
function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime(); // get waktu sekarang
  // untuk melakukan sesuatu secara berulang ulang selama internal waktu tertentu
  // setiap 100 ms/ 0,1 detik lakukan fungsi
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// kita buat kode yang lebih efektif
// kita seleksi semua img
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      //kita ganti gambar nya si komputer
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      //kita tampilkan hasilnya
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
