## Latihan DOM
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latihan DOM</title>
<style>

/* untuk meng akali body nya biar full, karena kalo ga height bodynya mengikuti kontentnnya */
    html,body{
      height: 100%;
    }
    body{
      text-align: center;
    }
    .biru-muda {
        background-color : lightblue;
    }

    .kotak {
      width: 25px;
      height: 25px;
      margin: 10px auto;
    }

    .merah {
      background-color: red;
    }
    .hijau {
      background-color: green;
    }
    .biru {
      background-color: blue;
    }
  </style>
</head>
<body>
  <h2>Latihan DOM</h2>
  <button type="button" id="tUbahWarna">Ubah Warna</button>

  <script src="script.js"></script>
</body>
</html>
```

### Merubah Warna Ketika Tombol di Klik
```js
const tUbahWarna = document.querySelector("#tUbahWarna");
const h2 = document.querySelector("h2");
tUbahWarna.addEventListener("click", function () {
  document.body.style.backgroundColor = "salmon";
});
```

### Merubah Warna dan Menghilangkan Warna Ketika Tombol di Klik
```js
const tUbahWarna = document.querySelector("#tUbahWarna");
const h2 = document.querySelector("h2");
tUbahWarna.addEventListener("click", function () {
  document.body.classList.toggle("biru-muda");
});
```

### Merubah Warna Random
```js 
// create tombol pakai javascript
const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  //membuat angka random
  const r = Math.round(Math.random() * 255 + 1);//rumus buat bikin angka random maksimal 255
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
```

### Merubah Warna Menggunakan Slider
```js
//tangkap slider
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

//event change menangkap event ketika diganti
//event input mengangkap event secara langsung(lebih smooth)
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
```

### Merubah Warna ketika mouse digerakkan
```js
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
```