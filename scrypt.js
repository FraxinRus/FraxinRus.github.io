let menuBtn = document.querySelector(".menu-btn");
let menu2 = document.querySelector(".menu2");
menuBtn.addEventListener("click", function () {
	menuBtn.classList.toggle("active");
});
menuBtn.addEventListener("click", function () {
	menu2.classList.toggle("active");
});
