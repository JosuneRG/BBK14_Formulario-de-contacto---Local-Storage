
//Creamos las variables para recoger los valores que insertas yetc del formulario
const campoNombre = document.getElementById('Nombre');
const campoEmail = document.getElementById('email');
const campoMessage = document.getElementById('message');
const campoUrl = document.getElementById('url');
const btnSubmit = document.getElementById('submit');
const btnSubmit1 = document.getElementById('submit1');
// localStorage.setItem('Nombre', 'Jane')
// localStorage.setItem('email', 'Jane')
// localStorage.setItem('message', 'Jane')
// localStorage.setItem('url', 'Jane')

//1 - Creamos la funcion del evento boton
function onSubmit(event) {
    
    event.preventDefault()
    console.log('hola');

    //Insertamos todos los valores en localstorage el primer usuario
    //1 -Nombre
    const valorNombre = Nombre.value;
    localStorage.setItem('Nombre',valorNombre);

    //2- Email
    const valorEmail = email.value;
    localStorage.setItem('email',valorEmail);
  
    //3 - Message
    const valorMessage = message.value;
    localStorage.setItem('message',valorMessage);

    //4 - url
    const valorUrl = url.value;
    localStorage.setItem('url',valorUrl);

    console.log("El nombre insertado es:", valorNombre);
    console.log("El email insertado es:", valorEmail)
    console.log("El mensjae insertado es:", valorMessage)
    console.log("La url insertado es:", valorUrl)
}

//Llamamos a la funcion del boton
btnSubmit.addEventListener('click',onSubmit);

//Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
function onSubmit1(event) {
    
    event.preventDefault()

    //declarar la variable para recoger el valor introducido en el campo
    const valorNombre = Nombre.value;
    const valorEmail = email.value;
    const valorMessage = message.value;
    const valorUrl = url.value;

    localStorage.setItem('user1', JSON.stringify({
        //Variables nuevas name1, email1...
        name1: valorNombre,
        email1: valorEmail,
        message1: valorMessage,
        url1: valorUrl
    }))
}

//Llamamos a la funcion del boton
btnSubmit1.addEventListener('click',onSubmit1);

//3 - Crea un botón para borrar todos los contactos guardados en Local Storage
const btnDeleteStorage = document.getElementById('deleteStorage');

function deleteStorage()
{
    event.preventDefault();
    localStorage.clear();
}

//Llamamos a la funcion del boton
btnDeleteStorage.addEventListener('click',deleteStorage);





