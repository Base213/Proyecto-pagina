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

(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  
  const contraseña1 = document.getElementById("contraseña1");
  const contraseña2 = document.getElementById("contraseña2");
  const contraseña2ErrorMessage = document.querySelector("#contraseña2 + .invalid-feedback");
  
  contraseña1.addEventListener("input", () => {
    if (contraseña1.value !== contraseña2.value) {
      contraseña2.setCustomValidity("Las contraseñas no coinciden.");
      contraseña2ErrorMessage.style.display = "block";
    } else {
      contraseña2.setCustomValidity("");
      contraseña2ErrorMessage.style.display = "none";
    }
  });
  
  contraseña2.addEventListener("input", () => {
    if (contraseña1.value !== contraseña2.value) {
      contraseña2.setCustomValidity("Las contraseñas no coinciden.");
      contraseña2ErrorMessage.style.display = "block";
    } else {
      contraseña2.setCustomValidity("");
      contraseña2ErrorMessage.style.display = "none";
    }
  });
  
  function mostrarMensaje() {
    alert("El producto a sido añadido correctamente");
  }

  function generarPassword() {
    // Longitud de la contraseña
    var longitud = 12;
    
    // Caracteres posibles para la contraseña
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    
    var password = "";
    for (var i = 0; i < longitud; i++) {
      password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    // Mostrar la contraseña generada en un cuadro de diálogo
    alert("Tu contraseña generada es: " + password);
  }