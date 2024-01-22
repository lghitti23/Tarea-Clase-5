let calcularTiempoVideos = document.querySelector("#calcular");
let $horas = document.querySelectorAll(".horas");
let $minutos = document.querySelectorAll(".minutos");
let $segundos = document.querySelectorAll(".segundos");
let $totalHoras = document.querySelector("#total-horas");
let $totalMinutos = document.querySelector("#total-minutos");
let $totalSegundos = document.querySelector("#total-segundos");
let segundosTotales = 0;
const SEGUNDOS_EN_HORA = 3600;
const FACTOR_HEX = 60;

calcularTiempoVideos.onclick = function () {
  sumaTotalHoras();
};

function sumaTotalHoras() {
  for (let i = 0; i < $horas.length; i++) {
    segundosTotales +=
      Number($horas[i].textContent || "0") * FACTOR_HEX * FACTOR_HEX;
  }
  for (let i = 0; i < $minutos.length; i++) {
    segundosTotales += Number($minutos[i].textContent || "0") * FACTOR_HEX;
  }
  for (let i = 0; i < $segundos.length; i++) {
    segundosTotales += Number($segundos[i].textContent || "0");
  }

  let restoDivisionEnHoras = segundosTotales % SEGUNDOS_EN_HORA;
  let horas = (segundosTotales - restoDivisionEnHoras) / SEGUNDOS_EN_HORA;
  let restoDivisionEnMinutos = restoDivisionEnHoras % FACTOR_HEX;
  let minutos = (restoDivisionEnHoras - restoDivisionEnMinutos) / FACTOR_HEX;

  $totalHoras.textContent = horas;
  $totalMinutos.textContent = minutos;
  $totalSegundos.textContent = restoDivisionEnMinutos;
}
