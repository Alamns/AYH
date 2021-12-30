const checkbox = document.querySelector('#checkbox');
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    checkbox.setAttribute('checked', true);
}

checkbox.addEventListener('change', function (event) {
    if (this.checked) {
        document.body.classList.remove('is-light-mode');
        document.body.classList.add('is-dark-mode');

        $('.color-body-card').removeClass("color-body-card").addClass("color-body-card2");
        $('.border-card').removeClass("border-card").addClass("border-card2");
    } else {
        document.body.classList.remove('is-dark-mode');
        document.body.classList.add('is-light-mode');

        $('.color-body-card2').removeClass("color-body-card2").addClass("color-body-card");
        $('.border-card2').removeClass("border-card2").addClass("border-card");
    }
})