// DOM Selection
// document.getElementById()

const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "grey";
judul.innerHTML = "Gema Nadia Ramadhana";

// document.getElementsByTagName
const p = document.getElementsByTagName("p");
// p.style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "ini diubah menggunakan getElementByClassName";
