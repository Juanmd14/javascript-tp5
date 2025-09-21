const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const reloj = document.getElementById("reloj");


setInterval(() => {
  const fecha = new Date();
  const diaSemana = diasSemana[fecha.getDay()];
  const diaMes = `${fecha.getDate()} de ${meses[fecha.getMonth()]}`;
  const hora = fecha.getHours().toString().padStart(2,"0");
  const minutos = fecha.getMinutes().toString().padStart(2,"0");
  const segundos = fecha.getSeconds().toString().padStart(2,"0");
  const ampm = hora >= 12 ? "PM" : "AM"

  reloj.innerHTML = `
  <div>${diaSemana} ${diaMes}</div>
  <div>${hora}:${minutos}:${segundos} ${ampm}</div>`;
}, 1000);
