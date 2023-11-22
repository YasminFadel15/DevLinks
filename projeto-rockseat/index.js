function toggleMode() {
    const html = document.documentElement;

    /*
    if(html.classList.contains('light')) {
        html.classList.remove('light');
    } else {
        html.classList.add('light');
    }
    */

    html.classList.toggle("light");

    //pegar a tag img
    const img = document.querySelector("#profile img");

    //em light mode, add img light
    //substituir a imagem
     if(html.classList.contains("light")) {
        img.setAttribute("src", "./assets/assets/avatar-dark.png");
    } else {
        img.setAttribute("src", "./assets/assets/avatar-light.png");
    }
}
