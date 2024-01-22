let mostrarDatos = document.querySelector("#enviar");

mostrarDatos.onclick = function () {
  let $primerNombre = document.querySelector("#primer-nombre").value;
  let $segundoNombre = document.querySelector("#segundo-nombre").value;
  let $apellido = document.querySelector("#apellido").value;
  let $edadUsuario = Number(document.querySelector("#edad-usuario").value);
  let $saludoDeBienvenida = document.querySelector("#saludo-de-bienvenida");

  $saludoDeBienvenida.innerHTML = `Bienvenido ${$primerNombre}`;

  document.querySelector(
    "#mostrar-informacion-de-usuario"
  ).innerHTML = `Tu nombre es ${$primerNombre} ${$segundoNombre} ${$apellido} y tu edad es ${$edadUsuario}`;
  return false;
};
