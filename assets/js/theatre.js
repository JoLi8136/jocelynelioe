// Mobile menu toggle for the theatre portfolio's simple sticky nav
function openMobileMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.toggle("open");
}
function closeMobileMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.remove("open");
}


document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  if (!modal) return;

  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var closeBtn = modal.querySelector(".close");
  var triggers = document.querySelectorAll(".lightbox-img");

  triggers.forEach(function (img) {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.getAttribute("data-full") || this.src;
      captionText.innerHTML = this.alt || "";
    });
  });

  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.style.display = "none";
  });
});
