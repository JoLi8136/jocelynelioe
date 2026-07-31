if (document.body.classList.contains("home")) {
  window.onscroll = function () { scrollFunction(); };
}

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

// Lightbox Images, Videos, PDFs
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  if (!modal) return;

  var modalImg = document.getElementById("img01");
  var modalVideo = document.getElementById("video01");
  var modalPdf = document.getElementById("pdf01");
  var captionText = document.getElementById("caption");
  var closeBtn = modal.querySelector(".close");

  function hideAllModalContent() {
    modalImg.style.display = "none";
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.style.display = "none";
    modalPdf.removeAttribute("src");
    modalPdf.style.display = "none";
  }
  function closeModal() {
    modal.style.display = "none";
    hideAllModalContent();
  }

  document.querySelectorAll(".lightbox-img").forEach(function (img) {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      modalImg.src = this.getAttribute("data-full") || this.src;
      modalImg.style.display = "block";
      captionText.innerHTML = this.alt || "";
      modal.style.display = "block";
    });
  });

  document.querySelectorAll(".lightbox-video").forEach(function (trigger) {
    trigger.style.cursor = "pointer";
    trigger.addEventListener("click", function () {
      modalVideo.src = this.getAttribute("data-src");
      modalVideo.style.display = "block";
      modalVideo.play();
      captionText.innerHTML = this.getAttribute("data-caption") || "";
      modal.style.display = "block";
    });
  });

  document.querySelectorAll(".lightbox-pdf").forEach(function (trigger) {
    trigger.style.cursor = "pointer";
    trigger.addEventListener("click", function () {
      modalPdf.src = this.getAttribute("data-src");
      modalPdf.style.display = "block";
      captionText.innerHTML = this.getAttribute("data-caption") || "";
      modal.style.display = "block";
    });
  });

  document.querySelectorAll(".lightbox-web").forEach(function (trigger) {
  trigger.style.cursor = "pointer";
  trigger.addEventListener("click", function () {
    hideAllModalContent();
    modalPdf.src = this.getAttribute("data-src");
    modalPdf.style.display = "block";
    captionText.innerHTML = this.getAttribute("data-caption") || "";
    modal.style.display = "block";
  });
});

  if (closeBtn) { closeBtn.onclick = closeModal; }
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });
});

