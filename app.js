// Array para almacenar los nombres
let listaAmigos = [];
const emojis = ["😊", "😁", "😎", "🥳", "🎉", "🎈", "💖", "✨", "🤗"];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar a la lista
  listaAmigos.push(nombre);
  input.value = ""; // Limpiar el input
  actualizarLista();
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista antes de actualizar

  listaAmigos.forEach((nombre, index) => {
    const li = document.createElement("li");

    // Seleccionamos un emoji aleatorio
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    // Agregamos el emoji y el nombre
    li.innerHTML = `<span class="name-emoji">${emoji}</span> ${nombre}`;

    // Botón para eliminar un nombre
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.innerHTML = `<span class="material-symbols-outlined">close</span>`;
    botonEliminar.onclick = () => eliminarAmigo(index);

    li.appendChild(botonEliminar);
    lista.appendChild(li);
  });
}

// Función para eliminar un nombre de la lista
function eliminarAmigo(index) {
  listaAmigos.splice(index, 1);
  actualizarLista();
}

// Función para sortear un amigo
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Agrega al menos un amigo antes de sortear.");
    return;
  }

  const indiceGanador = Math.floor(Math.random() * listaAmigos.length);
  const ganador = listaAmigos[indiceGanador];

  // Mostrar el resultado en la lista de resultados
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<p>🎉 ¡El amigo secreto es: <strong>${ganador}</strong>! 🎉</p>`;
}
