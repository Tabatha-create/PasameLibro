// Cambiar entre secciones
const botones = document.querySelectorAll("nav button");
const secciones = document.querySelectorAll("main section");

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;

    secciones.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === target) sec.classList.add("active");
    });
  });
});

// Datos de prueba
const libros = [
  {
    titulo: "Mujer en punto cero",
    autor: "Nawal El Saadawi",
    grupo: "Club Feminista",
    portada: "assets/img/libro1.jpg"
  }
];

const textos = [
  {
    titulo: "El eco de la luna",
    autor: "María G.",
    grupo: "Escritores Noveles",
    contenido: "Texto completo aquí..."
  }
];

// Mostrar libros
function mostrarLibros() {
  const cont = document.getElementById("listaLibros");
  cont.innerHTML = "";

  libros.forEach(l => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${l.titulo}</h3>
      <p>${l.autor}</p>
      <p>${l.grupo}</p>
    `;
    cont.appendChild(card);
  });
}

// Mostrar textos
function mostrarTextos() {
  const cont = document.getElementById("listaTextos");
  cont.innerHTML = "";

  textos.forEach(t => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${t.titulo}</h3>
      <p>${t.autor}</p>
      <p>${t.grupo}</p>
    `;
    cont.appendChild(card);
  });
}

mostrarLibros();
mostrarTextos();
