// -----------sticky header------------

window.addEventListener("scroll", function(){
    let header=this.document.querySelector(".nav-2");
    header.classList.toggle("sticky", window.scrollY > 0)
})

// -----------image slider-----------

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let bars = document.getElementsByClassName("bar");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < bars.length; i++) {
        bars[i].className = bars[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    bars[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); 
}