const tUbahWarna = document.querySelector("#tUbahWarna");
const h2 = document.querySelector("h2");
tUbahWarna.addEventListener("click", function () {
  document.body.classList.toggle("biru-muda");
});

// create tombol pakai javascript
const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  //membuat angka random
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

//tangkap slider
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

//ketika mouse berjalan di dalam body
document.body.addEventListener("mousemove", function (event) {
  //posisi mouse
  // posisi mouse sumbu x
  // console.log(event.clientX);
  //possii mouse sumbu y
  // console.log(event.clientY);
  // ukuran browser
  // console.log(window.innerWidth);

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);

  const yPos = Math.round((event.clientY / window.innerWidth) * 255);

  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
});
