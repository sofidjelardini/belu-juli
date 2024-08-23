const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minutesElement = document.getElementById('minutos');

// Establecemos la fecha objetivo (30 de noviembre de 2024)
const targetDate = new Date('2024-11-30');

// Función para actualizar el temporizador
function updateTimer() {
  // Obtenemos la fecha y hora actual
  const currentDate = new Date();

  // Calculamos la diferencia entre la fecha objetivo y la fecha actual en milisegundos
  const difference = targetDate - currentDate;

  // Calculamos los días, horas y minutos restantes
  const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  // Actualizamos los elementos HTML con los valores de días, horas y minutos
  daysElement.textContent = dias;
  hoursElement.textContent = horas;
  minutesElement.textContent = minutos;

  // Si la fecha objetivo aún no ha pasado, llamamos a la función nuevamente después de 1 segundo
  if (difference > 0) {
    setTimeout(updateTimer, 1000);
  }
}

updateTimer();
