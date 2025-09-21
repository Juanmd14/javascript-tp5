const comenzar = document.querySelector(".comenzar-juego");
const enviar = document.querySelector(".btn-enviar");
const input = document.getElementById("input-intento");
let numeroMagico;

comenzar.addEventListener("click", () => {
  numeroMagico = Math.floor(Math.random() * 10) + 1;
  comenzar.style.display = "none";
  input.style.display = "inline-block";
  enviar.style.display = "inline-block";
  input.value = "";
  input.focus();
  console.log(numeroMagico);
  Swal.fire("Adivina el numero del 1 al 10");
});

enviar.addEventListener("click", () => {
  const intento = parseInt(input.value);

  if (!numeroMagico) {
    alert("Comenza El Juego");
    return;
  }

  // validar si el numero es valido o se ingresa otro numero menor a 1 y mayor a 10

  if (isNaN(intento) || intento < 1 || intento > 10) {
    Swal.fire("Ingresa un numero valido entre 1 y 10");
    input.value = ""; // limpiar input
    input.focus();
    return;
  }

  if (intento === numeroMagico) {
    Swal.fire({
      title: "Adivinaste el numero magico!!!",
      icon: "success",
      draggable: true,
    });
    // confeti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    numeroMagico = null; // uso null para que reinicie una vez que acierte
    comenzar.style.display = "inline-block";
    input.style.display = "none";
    enviar.style.display = "none";
  } else {
    Swal.fire(
      intento > numeroMagico
        ? "El numero magico es menor"
        : "El numero magico es mayor"
    );
    input.value = "";
    input.focus();
  }
});
