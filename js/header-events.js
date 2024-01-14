const search_icon = document.querySelector('[data-element="form-search-icon"]');
const search_input = document.querySelector('[data-element="form-search"] input');
const burger_menu = document.querySelector('[data-element="burger"]');
const navigation = document.querySelector('[data-element="navigation-wrapper"]');

const filter_icon = document.querySelector('[data-element="filter-icon"]');
const filter_wrapper = document.querySelector('[data-element="filter-wrapper"]');
const filter_overlay = document.querySelector('[data-element="overlay"]');
const filter_close_icon = document.querySelector('[data-element="filter-icon-close"]');

search_icon.addEventListener('click', () => {
    search_input.classList.toggle('show');
    navigation.classList.remove('show');
});

burger_menu.addEventListener('click', () => {
    navigation.classList.toggle('show');
    search_input.classList.remove('show');
});

filter_icon.addEventListener('click', () => {
    filter_wrapper.classList.add('show');
});

filter_overlay.addEventListener('click', () => {
    filter_wrapper.classList.remove('show');
});

filter_close_icon.addEventListener('click', () => {
    filter_wrapper.classList.remove('show');
});
