// const close = document.querySelectorAll(".close");
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     // alert("udah tak hapus og");
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// const container = document.querySelector(".container");
const body = document.getElementsByTagName("BODY")[0];

// container.addEventListener("click", function (e) {
body.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.stopPropagation();
  }
});
