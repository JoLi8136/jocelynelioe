window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight-150 || document.documentElement.scrollTop > window.innerHeight-150) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-150px";
    }
}