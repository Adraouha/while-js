// ── Suma de números iterativa (while) ──────────────────

const btnStart = document.getElementById("btn-start");
const resultsDiv = document.getElementById("results");

let roundNumber = 0;

btnStart.addEventListener("click", () => {
  // Limpiar resultados anteriores
  resultsDiv.innerHTML = "";
  roundNumber = 0;

  let continuar = true;

  while (continuar) {
    // Pedir dos números
    const input1 = prompt("Introduce el primer número:");
    if (input1 === null) break; // usuario cancela

    const input2 = prompt("Introduce el segundo número:");
    if (input2 === null) break;

    const num1 = Number(input1);
    const num2 = Number(input2);
    const suma = num1 + num2;

    roundNumber++;

    // Mostrar resultado en el div
    const item = document.createElement("div");
    item.classList.add("result-item");
    item.innerHTML = `
      <div class="label">Ronda ${roundNumber}</div>
      <div class="value">${num1} + ${num2} = ${suma}</div>
    `;
    resultsDiv.appendChild(item);

    // Preguntar si quiere continuar
    const respuesta = prompt("¿Quieres continuar? (S/N)");

    if (
      respuesta === null ||
      respuesta.trim().toUpperCase() !== "S"
    ) {
      continuar = false;
    }
  }

  // Mensaje de despedida
  const bye = document.createElement("p");
  bye.classList.add("farewell");
  bye.textContent = "¡Gracias por practicar! 👋";
  resultsDiv.appendChild(bye);
});
