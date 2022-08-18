var goodsSwiper = new Swiper(".goodsSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
        // when window width is >= 480px
        912: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1370: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1740: {
            slidesPerView: 5,
            spaceBetween: 83,
        }
    }
});

var cityBikeSlider = new Swiper(".cityBikeSlider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

