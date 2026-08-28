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

document.addEventListener("DOMContentLoaded", function () {
    var slideshows = document.querySelectorAll(".slideshow");
    if (!slideshows.length) return;

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var pdfFrame = document.getElementById("pdfFrame");
    var captionText = document.getElementById("caption");
    var closeBtn = modal.querySelector(".close");
    var modalPrev = modal.querySelector(".modal-prev");
    var modalNext = modal.querySelector(".modal-next");

    var activeImages = [];
    var activeIndex = 0;
    var activeShowInMain = null;

    slideshows.forEach(function (slideshow) {
        var items = JSON.parse(slideshow.getAttribute("data-images"));
        var mainImg = slideshow.querySelector(".slideshow-main-img");
        var mainWrap = slideshow.querySelector(".slideshow-main");
        var slidePrev = slideshow.querySelector(".slide-prev");
        var slideNext = slideshow.querySelector(".slide-next");
        var localIndex = 0;

        function showInMain(index) {
            localIndex = index;
            var item = items[index];
            var isPdf = item.type === "pdf";

            mainImg.src = isPdf ? item.thumb : item.src;
            mainImg.alt = item.alt || "";
        }

        slideNext.addEventListener("click", function () {
            showInMain((localIndex + 1) % items.length);
        });
        slidePrev.addEventListener("click", function () {
            showInMain((localIndex - 1 + items.length) % items.length);
        });
        mainImg.addEventListener("click", function () {
            activeImages = items;
            activeIndex = localIndex;
            activeShowInMain = showInMain;
            showInModal(activeIndex);
            modal.style.display = "block";
        });
    });

    function showInModal(index) {
        activeIndex = index;
        var item = activeImages[index];
        var isPdf = item.type === "pdf";

        modalImg.style.display = isPdf ? "none" : "block";
        pdfFrame.style.display = isPdf ? "block" : "none";

        if (isPdf) {
            pdfFrame.src = item.src;
        } else {
            pdfFrame.src = "";
            modalImg.src = item.src;
        }
        captionText.innerHTML = item.alt || "";
        if (activeShowInMain) activeShowInMain(index);
    }
    function closeModal() {
        modal.style.display = "none";
        pdfFrame.src = "";
    }
    function nextModal() { showInModal((activeIndex + 1) % activeImages.length); }
    function prevModal() { showInModal((activeIndex - 1 + activeImages.length) % activeImages.length); }

    closeBtn.onclick = closeModal;
    modalNext.onclick = nextModal;
    modalPrev.onclick = prevModal;
    modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", function (e) {
        if (modal.style.display !== "block") return;
        if (e.key === "ArrowRight") nextModal();
        else if (e.key === "ArrowLeft") prevModal();
        else if (e.key === "Escape") closeModal();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var POS = {
        farLeft:  { x: -220, scale: 0.7,  opacity: 0,    z: 0 },
        left:     { x: -110, scale: 0.85, opacity: 0.45, z: 1 },
        center:   { x: 0,    scale: 1,    opacity: 1,    z: 2 },
        right:    { x: 110,  scale: 0.85, opacity: 0.45, z: 1 },
        farRight: { x: 220,  scale: 0.7,  opacity: 0,    z: 0 }
    };

    function setPos(el, pos, animate) {
        el.style.transition = animate ? "" : "none";
        el.style.transform = "translate(-50%, -50%) translateX(" + pos.x + "%) scale(" + pos.scale + ")";
        el.style.opacity = pos.opacity;
        el.style.zIndex = pos.z;
    }

    function fillCarouselCard(el, clip) {
        var wrap = el.querySelector(".cv-video");
        wrap.innerHTML =
            '<img class="cv-thumb" src="https://img.youtube.com/vi/' + clip.id + '/hqdefault.jpg" alt="">' +
            '<button class="cv-play" aria-label="Play video">&#9658;</button>';
        wrap.setAttribute("data-embed", "https://www.youtube.com/embed/" + clip.id + "?autoplay=1");
        el.querySelector(".cv-caption").textContent = clip.caption;
    }

    function initCarousel(root) {
        var data = JSON.parse(root.getAttribute("data-clips"));
        var n = data.length;
        var index = 0;
        var animating = false;

        var cards = Array.from(root.querySelectorAll(".cv-card"));
        var prevBtn = root.querySelector(".cv-prev-btn");
        var nextBtn = root.querySelector(".cv-next-btn");
        var slots = { prev: cards[0], active: cards[1], next: cards[2] };

        function fill(el, i) {
            fillCarouselCard(el, data[((i % n) + n) % n]);
        }

        fill(slots.prev, index - 1);
        fill(slots.active, index);
        fill(slots.next, index + 1);
        setPos(slots.prev, POS.left, false);
        setPos(slots.active, POS.center, false);
        setPos(slots.next, POS.right, false);

        function goNext() {
            if (animating || n < 2) { return; }
            animating = true;
            var exiting = slots.prev;
            setPos(exiting, POS.farLeft, true);
            setPos(slots.active, POS.left, true);
            setPos(slots.next, POS.center, true);

            var done = false;
            function finish() {
                if (done) return;
                done = true;
                exiting.removeEventListener("transitionend", onTransitionEnd);
                clearTimeout(fallback);
                index++;
                slots = { prev: slots.active, active: slots.next, next: exiting };
                fill(slots.next, index + 1);
                setPos(slots.next, POS.right, false);
                void slots.next.offsetWidth;
                slots.next.style.transition = "";
                animating = false;
            }
            function onTransitionEnd(e) {
                if (e.propertyName === "transform") finish();
            }
            exiting.addEventListener("transitionend", onTransitionEnd);
            var fallback = setTimeout(finish, 600);
        }

        function goPrev() {
            if (animating || n < 2) return;
            animating = true;
            var exiting = slots.next;
            setPos(exiting, POS.farRight, true);
            setPos(slots.active, POS.right, true);
            setPos(slots.prev, POS.center, true);

            var done = false;
            function finish() {
                if (done) return;
                done = true;
                exiting.removeEventListener("transitionend", onTransitionEnd);
                clearTimeout(fallback);
                index--;
                slots = { prev: exiting, active: slots.prev, next: slots.active };
                fill(slots.prev, index - 1);
                setPos(slots.prev, POS.left, false);
                void slots.prev.offsetWidth;
                slots.prev.style.transition = "";
                animating = false;
            }
            function onTransitionEnd(e) {
                if (e.propertyName === "transform") finish();
            }
            exiting.addEventListener("transitionend", onTransitionEnd);
            var fallback = setTimeout(finish, 600);
        }

        nextBtn.addEventListener("click", goNext);
        prevBtn.addEventListener("click", goPrev);

        var touchStartX = 0;
        var SWIPE_THRESHOLD = 50;

        root.addEventListener("touchstart", function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        root.addEventListener("touchend", function (e) {
            var delta = e.changedTouches[0].screenX - touchStartX;
            if (Math.abs(delta) < SWIPE_THRESHOLD) return;
            if (delta < 0) goNext();
            else goPrev();
        }, { passive: true });
    }

   document.querySelectorAll(".cv-carousel").forEach(function (root) {
    try {
        initCarousel(root);
    } catch (err) {
        console.error("Carousel failed to initialize:", root, err);
    }
});

    document.addEventListener("click", function (e) {
        var playBtn = e.target.closest(".cv-play");
        if (!playBtn) return;
        var wrap = playBtn.closest(".cv-video");
        var embedUrl = wrap.getAttribute("data-embed");
        wrap.innerHTML = '<iframe src="' + embedUrl + '" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    });
});
(function () {
    var modal = document.getElementById("myModal");
    if (!modal) return;

    var touchStartX = 0;
    var SWIPE_THRESHOLD = 50;   // minimum finger travel (px) to count as an intentional swipe

    modal.addEventListener("touchstart", function (e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener("touchend", function (e) {
        var touchEndX = e.changedTouches[0].screenX;
        var delta = touchEndX - touchStartX;
        if (Math.abs(delta) < SWIPE_THRESHOLD) return;

        var nextBtn = modal.querySelector(".modal-next");
        var prevBtn = modal.querySelector(".modal-prev");
        if (delta < 0 && nextBtn) nextBtn.click();
        else if (delta > 0 && prevBtn) prevBtn.click();
    }, { passive: true });
})();
