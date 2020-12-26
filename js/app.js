const UiSearch = document.querySelector('.search');
const UiInput = document.querySelector('.input');
const UiBtn = document.querySelector('.btn');


UiBtn.addEventListener('click', function () {
    UiSearch.classList.toggle('active');
    UiInput.focus();
});
