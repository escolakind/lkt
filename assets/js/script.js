var img = document.getElementById("userPhoto");


function mostrar(e) {
    if (e.classList.contains("fa-moon-o")) { //se tem lua
        e.classList.remove("fa-moon-o"); //remove classe icone lua
        e.classList.add("fa-sun-o"); //coloca classedo sol
        e.style.color = "rgb(225, 225, 0)";
        document.body.style.background = 'rgb(24, 28, 75)';
        document.querySelector('#userName').style.color = '#fff';
        
        document.getElementById("userPhoto").src = "/logo-2.jpeg"
        
        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        links[0].style.background = 'white';
        links[0].style.color = 'black';
        // pega todos
        for (let i = 1; i < links.length; i++) {
            links[i].style.filter = 'grayscale(100%)';
        }

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

        document.getElementById("userPhoto").src = "/logo.jpeg"

        let links = document.querySelectorAll('.link');
        links[0].style.background = 'rgb(24, 28, 75)';
        links[0].style.color = 'white';
        // Pega apenas o primeiro do array
        links[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        // Pega apenas o primeiro do array
        circulos[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }
    }

}