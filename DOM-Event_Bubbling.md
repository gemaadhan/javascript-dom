## EVENT BUBBLING
ketika kita memberikan sebuah event pada element, event tersebut ikut berlaku kepada elemen pembungkusnya juga, atau seperti gelembung.


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
