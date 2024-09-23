
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('preview-button');
const slideContent = document.getElementById('slide-content');
const reviews = document.querySelectorAll('.review');
const cicles = document.querySelectorAll('.slide-content-circle');

const reviewsArray = [...reviews]; 
const ciclesArray = [...cicles];

let slideIndex = 0;
let i = 0;

ciclesArray[0].style.transform = `scale(1.5)`;


nextButton.addEventListener('click', () => {
    if (i < reviewsArray.length - 1) {
    i++;
    let viewPort = window.innerWidth
    if (viewPort > 900) {
        // ViewPort is wider than 900px
        slideIndex -= 60;
    } else if (viewPort <= 900 && viewPort > 650) {
        // ViewPort is between 651px and 900px
        slideIndex -= 40;
    } else if (viewPort <= 650 && viewPort > 450) {
        // ViewPort is between 451px and 650px
        slideIndex -= 25.75;
    } else if (viewPort <= 450) {
        // ViewPort is 450px or less
        slideIndex -= 16.75;
    }

    slideContent.style.transform = `translateX(${slideIndex}rem)`;
    console.log(i);
        if (i > 0 && i < reviewsArray.length - 2) {
            ciclesArray[0].style.transform = `scale(1)`;
            ciclesArray[1].style.transform = `scale(1.5)`;
            ciclesArray[2].style.transform = `scale(1)`;
        } else if ( i > 0 && i == reviewsArray.length - 1) {
            ciclesArray[0].style.transform = `scale(1)`;
            ciclesArray[1].style.transform = `scale(1)`;
            ciclesArray[2].style.transform = `scale(1.5)`;
        }
    }
});

prevButton.addEventListener('click', () => {
    if (i > 0) {
    i--;
    let viewPort = window.innerWidth
    if (viewPort > 900) {
        // ViewPort is wider than 900px
        slideIndex += 60;
    } else if (viewPort <= 900 && viewPort > 650) {
        // ViewPort is between 651px and 900px
        slideIndex += 40;
    } else if (viewPort <= 650 && viewPort > 450) {
        // ViewPort is between 451px and 650px
        slideIndex += 25.75;
    } else if (viewPort <= 450) {
        // ViewPort is 450px or less
        slideIndex += 16.75;
    }
    slideContent.style.transform = `translateX(${slideIndex}rem)`;
    console.log(i);
    if (i > 0 && i < reviewsArray.length - 1) {
        ciclesArray[0].style.transform = `scale(1)`;
        ciclesArray[1].style.transform = `scale(1.5)`;
        ciclesArray[2].style.transform = `scale(1)`;
    } else if ( i == 0 && i < reviewsArray.length - 2) {
        ciclesArray[0].style.transform = `scale(1.5)`;
        ciclesArray[1].style.transform = `scale(1)`;
        ciclesArray[2].style.transform = `scale(1)`;
    }
    }
});
