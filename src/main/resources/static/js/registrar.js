// Call the dataTables jQuery plugin
$(document).ready(function() {
    //on ready
});

async function registrarUsuario(){
    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.telefono = document.getElementById('txtTelefono').value;
    datos.password = document.getElementById('txtPassword').value;

    let repetirPassword = document.getElementById('txtRepeatPassword').value;

    if (repetirPassword != datos.password){
        alert ('La contraseña que escribiste es diferente');
        return;
    }


      const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      alert("La cuenta fue creada con exito!");
      //window.location.href = 'login.html'
      location.reload()

}

//autocompletado por dni

var boton = document.getElementById("botonb");


const dniini = document.getElementById('txtDni');
const botonBuscar = document.getElementById('botonb');
const documento = document.getElementById('txtDni');
const nombress = document.getElementById('txtNombre');
const apellidoss = document.getElementById('txtApellido');

botonBuscar.addEventListener('click', traer);


function traer(){
    const dni = dniini.value;

fetch (
        `https://dniruc.apisperu.com/api/v1/dni/${encodeURIComponent(dni)}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRlc2Fycm9sbGFkb3JAcGF0cm9sLmNvbS5wZSJ9.JJo1ILgQu-w0zv4sTmUqKWl_H5MOcNOo3m4PAME20NE`
      )
    .then(response => response.json())
    .then(({dni, nombres, apellidoMaterno, apellidoPaterno}) => {

        documento.value = dni;
        nombress.value = nombres;
        apellidoss.value = `${apellidoPaterno} ${apellidoMaterno}`;

    });
}
console.log(traer);
//fin autocompletar dni

