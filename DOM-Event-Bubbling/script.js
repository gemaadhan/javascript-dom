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

// const containter = document.querySelector(".container");
// containter.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (e.target.className == "close") {
//     e.target.parentElement.style.display = "none";
//   }
// });
