## DOM Traversal (Penelurusan DOM)
Tujuannya adalah untuk mendapatkan element berdasarkan element yang sudah kita seleksi. 
### Kenapa Perlu di Telusuri, Kenapa tidak di seleksi aja ?

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Traversal</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<div class="container">

    <div class="card">
      <img src="img/Gema.jpeg" width="96" height="96">
      <span class="nama">Gema</span>
      <span class="telp">08098999999999999999</span>
      <span class="close">×</span>
    </div> 
    <div class="card">
      <img src="img/Nadia.jpeg" width="96" height="96">
      <span class="nama">Nadia</span>
      <span class="telp">08098999999999999999</span>
      <span class="close">×</span>
    </div> 
    <div class="card">
      <img src="img/Rama.jpeg" width="96" height="96">
      <span class="nama">Rama</span>
      <span class="telp">08098999999999999999</span>
      <span class="close">×</span>
    </div> 
    <div class="card">
      <img src="img/Dhana.jpeg" width="96" height="96">
      <span class="nama">Dhana</span>
      <span class="telp">08098999999999999999</span>
      <span class="close">×</span>
    </div> 

</div>

<script src="script.js"></script>
</body>
</html>
```


### TANPA MENGGUNAKAN DOM TRAVERSAL, hapus element card ketika close di klik
```js

const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    card[i].style.display = "none";
  });
}
```

### Dengan DOM Traversal 
```js
// DENGAN DOME TRAVERSAL
const close = document.querySelectorAll(".close");

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    // ambil close yang ke i, lalu ambil parentnya
    close[i].parentElement.style.display = "none";
  });
}

```

### Dengan DOM Traversak dan E
```js
// DENGAN DOME TRAVERSAL, dengan menggunakan event nya
const close = document.querySelectorAll(".close");

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function (e) {
    //    e akan berisi informasi dari event yang sedang terjadi
    e.target.parentElement.style.display = "none";
  });
}
```

### Dengan DOM Traversal dan Foreach
```js
const close = document.querySelectorAll(".close");

close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

```

### DOM TRAVERSAL METHOD
|Method|Hasil|
|---|---|
|parentNode|node|
|parentElement|element|
|nextSibling|node|
|nextElementSibling|element|
|previousSibling|node|
|previousElementSibling|element|

### APA BEDANYA ?

```js
const nama = document.querySelector(".nama");

// ambil parent nya
console.log("parentElement");
console.log(nama.parentElement);
console.log("parentNode");
console.log(nama.parentNode);

// ambil kakeknya
console.log("kakeknya");
console.log(nama.parentElement.parentElement);

// nextSibling //previousSibling
// akan menghasilkan node setelahnya / sebelumnya yaitu "/n" atau "enter"
console.log("nextSibling");
console.log(nama.nextSibling);


```