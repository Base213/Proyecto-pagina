//lee el archivo "menu_superior.html" que contiene el codigo fuente
if (document.getElementById('mini_producto')) {
    var tarjeta = document.getElementById('mini_producto').outerHTML;
    var tarjetas = '';
    for (i = 0; i < 20; i++) {
    tarjetas = tarjetas + tarjeta;
    }
    document.getElementById('mini_producto').outerHTML = tarjetas;
}

if (document.getElementById('menu')) {
    fetch('/menu_superior.html').then(response => {
    return response.text();
    }).then(htmlContent => {
    document.getElementById('menu').innerHTML = htmlContent;
    window.scrollTo(0, 0);
    });
};
