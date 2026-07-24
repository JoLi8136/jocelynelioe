// ===== Shared navbar scroll + mobile menu behavior =====
// Used by the CS and Arts portfolios (the "navy navbar" aesthetic).
// Safe to include on every page in those two portfolios even if a
// page has no modal/lightbox images on it.

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (!navbar) return;
  var overlay = navbar.querySelector(".overlay");
  var navHeight = overlay ? overlay.offsetHeight : navbar.offsetHeight;
  var menu = document.getElementById("mobile-menu");

  if (
    document.body.scrollTop > window.innerHeight - navHeight ||
    document.documentElement.scrollTop > window.innerHeight - navHeight ||
    (menu && menu.classList.contains("open"))
  ) {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-" + navHeight + "px";
  }
}

function openMobileMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.toggle("open");
}

function closeMobileMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.remove("open");
}

// ===== Generalized lightbox =====
// Add class="lightbox-img" to any <img>. Its "alt" text becomes the
// caption. Works for any number of images on a page (galleries,
// media pages, etc.) — not just a single #myImg like the original.
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
