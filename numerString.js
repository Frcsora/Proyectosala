function imprimirEventos() {
   const contenedorEventos = document.querySelector('body');

   document.querySelectorAll('.evento').forEach(evento => evento.remove());

   for (let i = 0; i < eventos.length; i++) {
       const evento = eventos[i];

       const divEvento = document.createElement('div');
       divEvento.className = 'evento';

       divEvento.innerHTML = `
           <div class="evento-fecha">
               <p class="fecha dia">${new Date(evento.fecha).getDate()}</p>
               <p class="fecha mes">${new Date(evento.fecha).toLocaleString('en', { weekday: 'long' })}</p>
           </div>
           <div class="evento-info">
               <h1>${evento.nombre}</h1>
               <p class="evento-descripcion">${evento.descripcion}</p>
               <p class="fecha hora">${evento.hora}</p>
               <p class="temporada">${evento.temporada}</p>
           </div>
           <img src="/ProyectoSalaVentas/03_Print_A3_Halloween_Deathlight.jpg" alt="Imagen del evento" class="evento-imagen">
           <button class="evento-boton">Mas Info</button>
       `;

       contenedorEventos.appendChild(divEvento);
   }
}

document.querySelector('.CreacionInformacion button').addEventListener('click', crearEvento);

const eventos = [];

function crearEvento() {
    const nombre = document.querySelector('input[placeholder="Nombre del evento"]').value;
    const fecha = document.querySelector('input[type="date"]').value;
    const capacidad = document.querySelector('input[placeholder="Capacidad"]').value;
    const campo1 = document.querySelectorAll('input')[3].value;
    const campo2 = document.querySelectorAll('input')[4].value;
    const campo3 = document.querySelectorAll('input')[5].value;
    const fechaMilisegundos = Date.parse(fecha)
    const fecha2 = new Date(fechaMilisegundos)
    const temporada = determinarTemporada(fecha2)
    const nuevoEvento = { nombre, fecha, capacidad, descripcion: campo1, hora: campo2, otroCampo: campo3, temporada: temporada };
    programarRecordatorio(fecha2, campo3)
    eventos.push(nuevoEvento);
    imprimirEventos();
    
}

document.querySelector('.CreacionInformacion button').addEventListener('click', crearEvento);

const evento = document.getElementById('evento');


document.addEventListener("DOMContentLoaded", function() {
  const botonSticky = document.querySelector(".boton-sticky");
  const formulario = document.querySelector(".CreacionInformacion");

   botonSticky.addEventListener("click", () => {
      formulario.classList.toggle("visible");
   });
});

function calcularPrecioEntrada() {
   const precioBase = 30.25;
   let precioFinal = 0;


   let tipoEntrada = document.getElementById("tipoEntrada").value;
   let numPerson = parseInt(document.getElementById("personas").value);


   if (isNaN(numPerson) || numPerson <= 0) {
       document.getElementById("resultado").innerHTML = "Introduce un número válido de personas";
       return;
   }


   switch (tipoEntrada) {
       case "general":
           precioFinal = precioBase * numPerson;
           break;
       case "infantil":
           precioFinal = (precioBase - precioBase * 0.25) * numPerson;
           break;
       case "pmr":
           precioFinal = (precioBase - precioBase * 0.25) * numPerson;
           break;
       case "carneJoven":
           precioFinal = (precioBase - precioBase * 0.25) * numPerson;
           break;
       case "+65anos":
           precioFinal = (precioBase - precioBase * 0.25) * numPerson;
           break;
       case "packFamiliar3":
           precioFinal = (precioBase - precioBase * 0.35) * numPerson;
           break;
       case "packFamiliar4":
           precioFinal = (precioBase - precioBase * 0.35) * numPerson;
           break;
       case "pack10":
           precioFinal = (precioBase - precioBase * 0.21) * numPerson;
           break;
       case "club":
           precioFinal = (precioBase - precioBase * 0.20) * numPerson;
           break;
   }


  //Con Math.round, redondeamos al valor entero más cercano
   precioFinal = Math.round(precioFinal);


   document.getElementById("resultado").innerHTML = "El precio de la entrada es: " + precioFinal.toFixed(2) + "€";
}
