const numeros = [];

const listaDeNumeros = document.querySelectorAll("li");

obtenerNumeros();

document.querySelector("#promedio").textContent += obtenerPromedio(numeros);
document.querySelector("#mayor").textContent += obtenerMayor(numeros);
document.querySelector("#menor").textContent += obtenerMenor(numeros);
document.querySelector("#mas-frecuente").textContent +=
  obtenerMasFrecuente(numeros);

function obtenerNumeros() {
  for (let i = 0; i < listaDeNumeros.length; i++) {
    numeros.push(Number(listaDeNumeros[i].textContent));
  }
}
function obtenerPromedio(numeros) {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }
  return acumulador / numeros.length;
}

function obtenerMayor(numeros) {
  let maximo = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }
  return maximo;
}

function obtenerMenor(numeros) {
  let minimo = 100000000;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < minimo) {
      minimo = numeros[i];
    }
  }
  return minimo;
}

function obtenerMasFrecuente(numeros) {
  let masRepetido;

  for (let i = 0; i < numeros.length; i++) {
    let vecesRepetidas = 0;
    let maximo = 0;

    for (let j = 0; j < numeros.length; j++) {
      if (numeros[i] === numeros[j] && i != j) {
        vecesRepetidas++;
      }
    }

    if (vecesRepetidas > maximo) {
      masRepetido = numeros[i];
    }
  }

  return masRepetido;
}
