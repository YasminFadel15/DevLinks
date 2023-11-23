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

document.getElementById("baixar").addEventListener("click",function() {
//fetch para carregar o conteúdo do arquivo PDF
fetch("curriculo.pdf")
    //converte a resposta em um objeto blob (representação binária de dados)
    .then(response => response.blob())
    .then(blob => {
        const download = function() {
            //cria um elemento a invisível e o adiciona ao corpo do documento
            const a = document.createElement("a");
            a.style = "display: none";
            document.body.appendChild(a);

            //configura o link de download 
            a.href = window.URL.createObjectURL(blob);
            a.download = "curriculo.pdf";
            //simula um click no download e revoga o link
            a.click();
            window.URL.revokeObjectURL(a.href);
        };
        download();
    })
    .catch(error => console.error('Erro ao carregar o arquivo PDF:', error));
})

