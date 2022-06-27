## Prevent Default
adalah sebuah method yang ada di dalam object event atau e. tujuaanya untuk menghentikan aksi default yang dilakukan oleh sebuah element

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
      <a href="" class="close">×</a>
    </div> 
    <div class="card">
      <img src="img/Nadia.jpeg" width="96" height="96">
      <span class="nama">Nadia</span>
      <span class="telp">08098999999999999999</span>
      <a href="" class="close">×</a>
    </div> 
    <div class="card">
      <img src="img/Rama.jpeg" width="96" height="96">
      <span class="nama">Rama</span>
      <span class="telp">08098999999999999999</span>
      <a href="" class="close">×</a>
    </div> 
    <div class="card">
      <img src="img/Dhana.jpeg" width="96" height="96">
      <span class="nama">Dhana</span>
      <span class="telp">08098999999999999999</span>
      <a href="" class="close">×</a>
    </div> 

</div>

<script src="script.js"></script>
</body>
</html>
```

kita mengganti element pembungkus close yang tadinya span menjadi a, sehingga fungsi menghilangkan card tidak berjalan, karena secara default tag a akan melempar ke halaman baru, sehingga merefresh halaman. 

### Contoh Pemakaian Prevent Default 
dengan prevent default anchor tidak akan melakukan aksi defaultya. 
```js
const close = document.querySelectorAll(".close");

close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  });
});
```