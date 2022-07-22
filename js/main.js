alert("Bienvenid@ a mi primer prueba");

console.log("Calculadora de Plan Ahora para turismo");

let tipoDeViaje = prompt("Marca 1 si viajas dentro del pais");

let importe = prompt("Ingresa el importe de tu vuelo");

function planExtra() {
  alert(
    "El importe total del vuelo con el Plan Ahora 6 es: $" + 1.12 * importe
  );
}
function planMedium() {
  alert(
    "El importe total del vuelo con el Plan Ahora 12 es: $" + 1.17 * importe
  );
}
function planAhorro() {
  alert(
    "El importe total del vuelo con el Plan Ahora 18 es: $" + 1.22 * importe
  );
}

if (tipoDeViaje == "1") {

  while (importe != "0") {

  let cuotasElegidas = Number(
      prompt(
        "Podes optar por el Plan Ahora 6, 12 y 18 ¿En cuantas cuotas deseas financiar?"
      )
    );

    if (cuotasElegidas === 6) {
      planExtra();
    } else if (cuotasElegidas === 12) {
      planMedium();
    } else if (cuotasElegidas === 18) {
      planAhorro();
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

//Arrays//

const Destinos = ["Bariloche, puertoIguazú, Jujuy, marDelPlata"];
const Categorias = [
  { id: 1, categoria: "treking" },
  { id: 2, categoria: "tirolesa" },
  { id: 3, categoria: "aerosilla" },
  { id: 4, categoria: "visitasGuiadas" },
];

for (const categoria of Categorias) {
  console.log(categoria.id);
  console.log(categoria.categoria);
}
