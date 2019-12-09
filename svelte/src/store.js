


import { writable } from 'svelte/store';

export const activePage = writable("Bureautique");

export const notifChannel = writable(10)

export const storage = writable({})
export const db = writable({})
export const fb = writable({})

export const initListingSlider = () => {
if ($('.hotel_slider').length) {
    var hotelSlider = $('.hotel_slider');

    let re = hotelSlider.owlCarousel(
        {
            loop: true,
            nav: false,
            dots: false,
            margin: 16,
            responsive:
            {
                0: { items: 2 },
                320: { items: 3 },
                480: { items: 4 },
                575: { items: 5 },
                768: { items: 5 },
                992: { items: 5 },
                1199: { items: 5 }
            }
        });

    /* Custom nav events */
    if ($('.hotel_slider_prev').length) {
        var prev = $('.hotel_slider_prev');

        prev.on('click', function () {
            hotelSlider.trigger('prev.owl.carousel');
        });
    }

    if ($('.hotel_slider_next').length) {
        var next = $('.hotel_slider_next');

        next.on('click', function () {
            hotelSlider.trigger('next.owl.carousel');
        });
    return re
    }
}
	}