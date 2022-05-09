const gap = 16;


const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  siguiente = document.getElementById("next"),
  anterior = document.getElementById("prev");

siguiente.addEventListener("click", e => {

    console.log(carousel.scrollWidthamicit)
    carousel.scrollBy(width + gap, 0);

    if (carousel.scrollWidth !== 0) {
        
        anterior.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        
        siguiente.style.display = "flex";
    }
});


anterior.addEventListener("click", e => {


    carousel.scrollBy(-(width + gap), 0);

    if (carousel.scrollLeft - width - gap <= 0) {

        anterior.style.display = "flex";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {

        siguiente.style.display = "flex";
    }
});

let width = carousel.offsetWidth;

window.addEventListener("resize", e => (width = carousel.offsetWidth));
