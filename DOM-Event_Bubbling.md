## EVENT BUBBLING
ketika kita memberikan sebuah event pada element, event tersebut ikut berlaku kepada elemen pembungkusnya juga, atau seperti gelembung.

```js
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

### TES EVENT BUBBLING
kalau dipencet dimanapun dibagian dari card. event nya terpanggil. kemudian ketika mengclcik tombol close maka event pada card juga ikut terpanggil. karena tombol close termasuk bagian dari card. dan dia akan trus mengecek ke parent nya sampai ndak ada event. 
```js
const close = document.querySelectorAll(".close");
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    alert("udah tak hapus og");
    e.preventDefault();
  });
});

const cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    alert("ok");
  });
});
```

Sehingga kita perlu stop event bubbling nya dengan stopProgpagation()
```js
...
e.target.parentElement.style.display = "none";
alert("udah tak hapus og");
e.preventDefault();
e.stopPropagation();
...
```
