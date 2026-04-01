new Swiper(".productsSwiper", {
    slidesPerView: 6,
    spaceBetween: 22,
    speed: 500,
    loop: false,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prew",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1.2, spaceBetween: 14 },
        520: { slidesPerView: 2.2, spaceBetween: 16 },
        900: { slidesPerView: 3.2, spaceBetween: 18 },
        1200: { slidesPerView: 5, spaceBetween: 22 },
    },
});

new Swiper(".recentlyProductsSwiper", {
    slidesPerView: 6,
    spaceBetween: 22,
    speed: 500,
    loop: false,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prew",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1.2, spaceBetween: 14 },
        520: { slidesPerView: 2.2, spaceBetween: 16 },
        900: { slidesPerView: 3.2, spaceBetween: 18 },
        1200: { slidesPerView: 5, spaceBetween: 22 },
    },
});

new Swiper(".similarBlogsSwiper", {
    slidesPerView: 6,
    spaceBetween: 22,
    speed: 500,
    loop: false,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prew",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1.2, spaceBetween: 14 },
        520: { slidesPerView: 2.2, spaceBetween: 16 },
        900: { slidesPerView: 2.2, spaceBetween: 18 },
        1200: { slidesPerView: 3, spaceBetween: 22 },
    },
});