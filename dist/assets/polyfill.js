
// polyfill for swiper for IE
Number.isNaN = Number.isNaN || function(value) {
    return typeof value === 'number' && isNaN(value);
}
