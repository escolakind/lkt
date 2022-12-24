var img = document.getElementById("userPhoto");


function mostrar(e) {
    if (e.classList.contains("fa-moon-o")) { //se tem lua
        e.classList.remove("fa-moon-o"); //remove classe icone lua
        e.classList.add("fa-sun-o"); //coloca classedo sol
        e.style.color = "rgb(225, 225, 0)";
        document.body.style.background = '#0f144c';
        document.querySelector('#userName').style.color = '#fff';
        
        document.getElementById("userPhoto").src = "logo.jpg"

        document.getElementById('favicon').setAttribute('href','icon.png')
        
        let links = document.querySelectorAll('.link');
        
        links[0].style.background = 'white';
        links[0].style.color = 'black';

        links[1].style.background = 'white';
        links[1].style.color = 'black';

        links[2].style.background = 'white';
        links[2].style.color = 'black';

        let circulos = document.querySelectorAll('.circulo');
        // Pega apenas o primeiro do array
        circulos[0].style.filter = 'grayscale(100%)';
        // pega todos
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(100%)';
        }

    } else { //senão
        e.classList.remove("fa-sun-o"); //remove classe icone lua
        e.classList.add("fa-moon-o"); //coloca classedo sol
        e.style.color = "#585858";
        document.body.style.background = 'rgb(254, 254, 254)';
        document.querySelector('#userName').style.color = '';

        document.getElementById("userPhoto").src = "logo.jpg"

        document.getElementById('favicon').setAttribute('href','icon.png')

        let links = document.querySelectorAll('.link');
        
        links[0].style.background = '#0f144c';
        links[0].style.color = 'white';

        links[1].style.background = '#0f144c';
        links[1].style.color = 'white';

        links[2].style.background = '#0f144c';
        links[2].style.color = 'white';
        

        let circulos = document.querySelectorAll('.circulo');
        // Pega apenas o primeiro do array
        circulos[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }
    }
}