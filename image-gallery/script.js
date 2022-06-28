const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");
container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    e.target.parentElement.previousElementSibling.src = e.target.src;
    e.target.parentElement.previousElementSibling.classList.add("fade");
    setTimeout(function () {
      e.target.parentElement.previousElementSibling.classList.remove("fade");
    }, 500);

    //looping semua thumb untuk menghapus kalau masih ada kelas active
    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
  e.stopPropagation();
});
