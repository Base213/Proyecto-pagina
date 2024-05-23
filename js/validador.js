$(document).ready(function() {

  // Método de validación para RUT chileno
  $.validator.addMethod("rutChileno", function(value, element) {
      // Eliminar puntos y guión del RUT
      value = value.replace(/[.-]/g, "");
  
      // Validar que el RUT tenga 8 o 9 dígitos
      if (value.length < 8 || value.length > 9) {
          return false;
      }
  
      // Validar que el último dígito sea un número o una 'K'
      var validChars = "0123456789K";
      var lastChar = value.charAt(value.length - 1).toUpperCase();
      if (validChars.indexOf(lastChar) == -1) {
          return false;
      }
  
      // Calcular el dígito verificador
      var rut = parseInt(value.slice(0, -1), 10);
      var factor = 2;
      var sum = 0;
      var digit;
      while (rut > 0) {
          digit = rut % 10;
          sum += digit * factor;
          rut = Math.floor(rut / 10);
          factor = factor === 7 ? 2 : factor + 1;
      }
      var dv = 11 - (sum % 11);
      dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
  
      // Validar que el dígito verificador sea correcto
      return dv === lastChar;
  }, "Por favor ingrese un RUT válido."); 

  // Método de validación para correo electrónico
  $.validator.addMethod("emailCompleto", function(value, element) {
      // Expresión regular para validar correo electrónico
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
  
      // Validar correo electrónico con la expresión regular
      return regex.test(value);
  
  }, 'Ingrese un correo válido');

  // Método de validación para nombre y apellido (no permitir números)
  $.validator.addMethod("noNumeros", function(value, element) {
      return this.optional(element) || !/\d/.test(value); // Comprueba si el valor contiene algún número
  }, "No se permiten números en este campo");

    // El siguiente Javascript obliga a que la caja de texto del rut, siempre escriba la letra "K" en mayúscula
    if (document.getElementById('rut')) {
        document.getElementById('rut').addEventListener('keyup', function(e) {
            e.target.value = e.target.value.toUpperCase();
        });
    }

  // Validación del formulario
  $("#formulario").validate({
      // Reglas de validación para cada campo
      rules: {
          rut: {
              required: true,
              rutChileno: true // Utiliza el método de validación personalizado para el RUT
          },
          nombre: {
              required: true,
              noNumeros: true // No permitir números en el nombre
          },
          apellido: {
              required: true,
              noNumeros: true // No permitir números en el apellido
          },
          email: {
              required: true,
              emailCompleto: true // Utiliza el método de validación personalizado para el correo electrónico
          },
          direccion: "required",
          password: {
              required: true,
              minlength: 6 // Mínimo 6 caracteres para la contraseña
          },
          repassword: {
              required: true,
              equalTo: "#password" // Debe ser igual al campo de contraseña original
          }
      },
      // Mensajes de error personalizados para cada campo
      messages: {
          rut: {
              required: "El RUT es un campo obligatorio",
              rutChileno: "El formato del RUT no es válido"
          },
          nombre: {
              required: "El nombre es un campo obligatorio"
          },
          apellido: {
              required: "El apellido es un campo obligatorio"
          },
          email: {
              required: "El correo electrónico es un campo obligatorio",
              emailCompleto: "Ingrese un correo electrónico válido"
          },
          direccion: "La dirección es un campo obligatorio",
          password: {
              required: "La contraseña es un campo obligatorio",
              minlength: "La contraseña debe tener al menos 6 caracteres"
          },
          repassword: {
              required: "Por favor, confirme su contraseña",
              equalTo: "Las contraseñas no coinciden"
          }
      },
  });

  $("#formulario-bodega").validate({
    // Reglas de validación para cada campo
    rules: {
        categoria: {
            required: true,
        },
        nombre: {
            required: true,
        },
        cantidad: {
            required: true,
            number: true,
            min: 0,
        },
    },
    // Mensajes de error personalizados para cada campo
    messages: {
        categoria: {
            required: "La categoria es un campo obligatorio",
        },
        nombre: {
            required: "El nombre es un campo obligatorio",
        },
        cantidad: {
            required: "La cantidad es un campo obligatorio",
            number: "El campo debe ser númerico",
            min: "La cantidad debe ser mayor o igual que 0"
        },
    },
    });

});
