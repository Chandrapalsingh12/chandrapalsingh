// NavBar
nav_link = document.getElementById("nav_link")
document.getElementById("hameburg").onclick = function () {
    if (nav_link.style.display === "flex") {
        nav_link.style.display = "none"
        document.getElementById("hamval").classList.remove('active')

    } else {
        nav_link.style.display = "flex"
        document.getElementById("hamval").classList.add('active')

        // onclick="this.classList.toggle('active')"
    }
}




var page1 = document.getElementById("page1")
var page2 = document.getElementById("page2")
var page3 = document.getElementById("page3")
var page4 = document.getElementById("page4")

var poin1 = document.getElementById("1st_page")
var poin2 = document.getElementById("2nd_page")
var poin3 = document.getElementById("3rd_page")
var poin4 = document.getElementById("4th_page")



document.getElementById("home").onclick = function () {

    page1.style.display = "grid"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "none"
    poin1.style.opacity = "1"
    poin2.style.opacity = "0.6"
    poin3.style.opacity = "0.6"
    poin4.style.opacity = "0.6"

}
document.getElementById("about").onclick = function () {
    page1.style.display = "none"
    page2.style.display = "grid"
    page3.style.display = "none"
    page4.style.display = "none"
    poin2.style.opacity = "1"
    poin1.style.opacity = "0.6"
    poin3.style.opacity = "0.6"
    poin4.style.opacity = "0.6"
}
document.getElementById("project").onclick = function () {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "flex"
    page4.style.display = "none"
    poin2.style.opacity = "0.6";
    poin1.style.opacity = "0.6";
    poin3.style.opacity = "1";
    poin4.style.opacity = "0.6";

}
document.getElementById("contact").onclick = function () {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "flex"
    poin2.style.opacity = "0.6";
    poin1.style.opacity = "0.6";
    poin3.style.opacity = "0.6";
    poin4.style.opacity = "1";

}



document.getElementById("about_me").onclick = function () {
    page1.style.display = "none"
    page2.style.display = "grid"
    page3.style.display = "none"
    page4.style.display = "none"
    poin2.style.opacity = "1"
    poin1.style.opacity = "0.6";


}

// For Media Query
const mediaQuery = window.matchMedia('(max-width: 767px)')
function allFun() {
    if (mediaQuery.matches) {
        var x = document.getElementById("nav_link");
        document.getElementById("hamval").classList.remove('active')
        x.style.display = "none";
    } else {
        console.log("Nothing");
    }


}















// Slider

$('.slides').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<div class="right_arow"><img src="images/Vector (1).png" alt="left"></div>',
    nextArrow: ' <div class="left_arow"><img src="images/Vector (2).png" alt="right"></div>',
    responsive: [
        {
            breakpoint: 1302,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});