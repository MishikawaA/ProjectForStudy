
    let slideIndex = 1;
    let slideTimer; // Variável para armazenar o temporizador

    showSlides(slideIndex);

    function currentSlide(n) {
        clearTimeout(slideTimer); // Limpa o temporizador ao usar os dots manualmente
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active-dot');
        }

        slides[slideIndex - 1].classList.add('active');
        dots[slideIndex - 1].classList.add('active-dot');

        // Adicione novamente a chamada para a transição automática após 3 segundos
        slideTimer = setTimeout(() => {
            showSlides(slideIndex += 1);
        }, 3000);
    } 
