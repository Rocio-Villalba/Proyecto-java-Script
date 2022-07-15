alert("Bienvenid@ a mi primer prueba");

console.log("Calculadora de Plan Ahora para turismo");

let tipoDeViaje = prompt("Marca 1 si viajas dentro del pais");
if (tipoDeViaje == "1") {
  let importe = prompt("Ingresa el importe de tu vuelo");
  function financiacion1() {
    alert(
      "El importe total del vuelo con el Plan Ahora 6 es: $" + 1.12 * importe
    );
  }
  function financiacion2() {
    alert(
      "El importe total del vuelo con el Plan Ahora 12 es: $" + 1.17 * importe
    );
  }
  function financiacion3() {
    alert(
      "El importe total del vuelo con el Plan Ahora 18 es: $" + 1.22 * importe
    );
  }
  while (importe != "0") {
    let cuotasElegidas = Number(
      prompt(
        "Podes optar por el Plan Ahora 6, 12 y 18 ¿En cuantas cuotas deseas financiar?"
      )
    );
    if (cuotasElegidas === 6) {
      financiacion1();
    } else if (cuotasElegidas === 12) {
      financiacion2();
    } else if (cuotasElegidas === 18) {
      financiacion3();
    } else {
      alert("La opción ingresada no es válida para el Plan Ahora");
    }
    alert("Ingresa un monto superior a $0 para volver calcular");
    importe = prompt(
      "Introduce el importe o marca 0 para salir de la calculadora"
    );
  }
} else {
  document.write(
    "Si tu viaje es al exterior, solo podrás abonar en 1 solo pago"
  );
}
