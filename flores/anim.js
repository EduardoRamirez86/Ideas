window.onload = function () {
  // Crear elementos necesarios
  var body = document.body;
  var audio = document.createElement("audio");
  audio.src = "sound/The Weeknd - Die For You (Sub. Español).mp3";
  audio.controls = true;
  body.appendChild(audio);

  var lyrics = document.createElement("div");
  lyrics.id = "lyrics";
  body.appendChild(lyrics);

  // Array de objetos que contiene cada línea de la letra y su tiempo de aparición
  var lyricsData = [
    { text: "I'm findin' ways to articulate", time: 0 },
    { text: "The feeling I'm goin' through", time: 5 },
    { text: "I just can't say I don't love you", time: 10 },
    { text: "Cause I love you, yeah", time: 15 },
    { text: "It's so hard to say it, but I do", time: 20 },
    { text: "And I need you, yeah", time: 25 },
    { text: "I don't even know why", time: 30 },
    { text: "I don't even know how", time: 35 },
    { text: "I just know that I do", time: 40 },
    { text: "But I know I die for you", time: 45 },
    { text: "I die for you", time: 50 },
    { text: "I'm just in love with you", time: 55 },
    { text: "I die for you", time: 60 },
    { text: "But I die for you", time: 65 },
    { text: "I die for you", time: 70 },
  ];

  // Función para actualizar las letras basadas en el tiempo del audio
  function updateLyrics() {
    var currentTime = Math.floor(audio.currentTime); // Obtener el tiempo actual de la canción
    var currentLine = lyricsData.find(function (line) {
      return currentTime >= line.time && currentTime < line.time + 5;
    });

    if (currentLine) {
      // Actualizar el texto de las letras
      lyrics.textContent = currentLine.text;
    }
  }

  // Ejecutar la función updateLyrics cada 100 ms para mantener la sincronización
  setInterval(updateLyrics, 100);

  // Reproducir la canción cuando se cargue la página
};

// Función para ocultar el título después de un cierto tiempo
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);



