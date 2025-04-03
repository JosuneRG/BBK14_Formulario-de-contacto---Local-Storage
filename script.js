
//Creamos las variables para recoger los valores que insertas yetc del formulario
const campoNombre = document.getElementById('Nombre');
const campoEmail = document.getElementById('email');
const campoMessage = document.getElementById('message');
const campoUrl = document.getElementById('url');
const btnSubmit = document.getElementById('submit');



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


// 2 ------------------------------------------------------------------------------------------------
//Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave

const btnSubmit1 = document.getElementById('submit1');
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


// ---------------------------------------------------------------------------------
//3 - Crea un botón para borrar todos los contactos guardados en Local Storage

const btnDeleteStorage = document.getElementById('deleteStorage');

function deleteStorage()
{
    event.preventDefault();
    localStorage.clear();
}

//Llamamos a la funcion del boton
btnDeleteStorage.addEventListener('click',deleteStorage);


//--------------------------------------------------------------------------------------------
//4 - Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)

const btnOnsubmint2  = document.getElementById('submit2');
const listaContactos = document.getElementById('listaContactos');

function save_N_User(event) {
    
    event.preventDefault()

    // Obtener los valores de los campos
    const name = campoNombre.value;
    const email = campoEmail.value;
    const message = campoMessage.value;
    const url = campoUrl.value;

    // Obtener los contactos previos desde localStorage o inicializar un array vacío
    const contactos = JSON.parse(localStorage.getItem('contactos')) || [];
    
    // Crear un objeto con los datos del nuevo contacto
    contactos.push({ name, email, message, url});

    // Guardar la lista de contactos actualizada en localStorage
    localStorage.setItem('contactos', JSON.stringify(contactos));

    mostrarContactosDom();
} 


//--------------------------------------------------------------------------------------------
// 5 -Mostrar los datos de los contactos guardados en el DOM, le llamaremos a esta funcion en la funcion anterior

function mostrarContactosDom() {
    
    //limpiar la lista por si acaso 
    listaContactos.innerHTML = "";

     // Obtener contactos desde localStorage,es decir el array
     const contactos = JSON.parse(localStorage.getItem('contactos')) || [];
    
     //recorremosel array
    for (let i = 0; i < contactos.length; i++) 
    {
        const contacto = contactos[i];

        const li = document.createElement('li');
        
        li.innerHTML = `<strong>${contacto.name}</strong> - ${contacto.email} <br>
                        Mensaje: ${contacto.message} <br>
                        URL: <a href="${contacto.url}" target="_blank">${contacto.url}</a>`;
        listaContactos.appendChild(li);
    }
}

// Mostrar los contactos guardados al cargar la página
document.addEventListener('DOMContentLoaded', mostrarContactosDom);

//Llamamos a la funcion del boton
btnOnsubmint2.addEventListener('click',save_N_User);