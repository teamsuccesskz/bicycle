var goodsSwiper = new Swiper(".goodsSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
        950: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1370: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1800: {
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

var favouriteSlider = new Swiper(".favouriteSlider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
        950: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1370: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1800: {
            slidesPerView: 3,
            spaceBetween: 82,
        }
    }
});

