//seleccionar elementos con querySelector
//querySelector 0 o 1 elemento
//const heading = document.querySelector('.header__texto h2')//0 o 1 elemento
//heading.textContent = 'nuevo heading';//modifica contenido del h2
//console.log(heading);

//querySelectorAll devuelve de 0 a todo lo que haya
///const enlaces = document.querySelectorAll('.navegacion a');
//enlaces[0].textContent = 'nuevo contenido';//modifica en esa posicion
//enlaces[0].classList.remove('navegacion__enlace');//borra classe de esa posicion
//console.log(heading);

//getElementById 
//const heading2 = document.getElementById('heading');
//console.log(heading2);

//generar un nuevo elemento html cn js
//const nuevoEnlace = document.createElement('A');

//agregar el href
//nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto
//nuevoEnlace.textContent = 'Regístrate';

//agregar la clase
//nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo al documento
//const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(nuevoEnlace)//lo coge y lo agrega

 //console.log(nuevoEnlace);


 //para las cookies
const cookieContainer=document.querySelector(".cookie-container")
const cookieButton=document.querySelector(".cookie-btn")

cookieButton.addEventListener("click", ()=>{
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed","true")
})

setTimeout(()=>{
    if(!localStorage.getItem("cookieBannerDisplayed"))
    cookieContainer.classList.add("active");
}, 3000);

//funcion para el modo modal a la hora de pulsar en tratamientos
$(".md").click(function (e) { 
    e.preventDefault();
    
    $(".modal").toggleClass("open");
});

$(".close").click(function (e) { 
    e.preventDefault();
    $(".modal").toggleClass("open");
});

//hover con jquery
$( "h3" ).hover(
    function() {
      $( this ).append( $( "<span >DEBE REGISTRARSE PARA SOLICITAR SU CITA</span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
   
  $( "h3.fade" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });

