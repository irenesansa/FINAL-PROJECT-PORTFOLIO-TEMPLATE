// Dark mode toggle functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});
// Scroll to top functionality
const scrollToTopBtn = document.getElementById("scrollToTop");

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Project data
const projectData = {
  nogue: {
    title: "NOGUE",
    category: "Wireframes, Identidad Visual y Dirección Creativa",
    description:
      "Proyecto académico desarrollado para el curso de Diseño Editorial. NOGUE es una revista satírica que critica la moda y la cultura del consumo a través de la parodia, la fotografía y un diseño gráfico audaz. Creamos todo el contenido —incluyendo visuales, maquetación y dirección de arte— con una estética inspirada en el hazlo tú mismo (DIY).",
    mainImage: "https://ik.imagekit.io/photoiss/portada.jpg",
  },
  greeno: {
    title: "GREENO",
    category: "App Development, UX/UI Design",
    description:
      "MORE CONTROL OF RECEIPTS BY GETTING EVERYTHING ON YOUR SMARTPHONE NO NEED TO SEND TO YOUR EMAIL PAPER RECEIPTS THEY ALREADY START THE DECOMPOSITION PROCESS AND YOU LOSE ALL THE INFORMATION. EL OBJETIVO DE GREENO BUSCA LA CONEXIÓN DEL CONSUMIDOR CON LA CONEXIÓN SOSTENIBLE. ELIMINANDO LA IMPRESIÓN DE TICKETS Y AYUDANDO AL NEGOCIO CON LA IMPRESIÓN DE MÚLTIPLES ALBARANES DE CARGA Y DESCARGA DE PRODUCTOS.",
    mainImage:
      "https://ik.imagekit.io/photoiss/Captura%20de%20pantalla%202025-09-08%20a%20las%2018.58.19.png",
  },
  starbucks: {
    title: "STARBUCKS",
    category: "Campaña Gráfica, Dirección Creativa",
    description:
      "CAMPAÑA GRÁFICA PARA STARBUCKS SOBRE LA CULTURA DE LA NAVIDAD Y EL CALOR DEL HOGAR EN ESTA FECHA TAN ESPECIAL. SE BUSCA REPRESENTAR LA TRADICIÓN Y LA FAMILIA AMERICANA CON EL SABOR DE LA CULTURA Y LOS MEJORES COMPONENTES Y DESARROLLAR CREAR EMOCIONES EN BASE A LA NOSTALGIA.",
    mainImage:
      "https://ik.imagekit.io/photoiss/blanco%20y%20negro%20navidad.png",
  },
  polydor: {
    title: "POLYDOR",
    category: "Investigación Discográfica, Branding Musical",
    description:
      "EL PROYECTO CONSTA DE DESARROLLAR LA CREACIÓN DE LA DISCOGRAFÍA MUSICAL DE LA BANDA BRITÁNICA LITTLE MIX. DONDE SE IDENTIFICAN DE LA MISMA MANERA ALGUNOS ÁLBUMES CONCEPTUALES. GRÁFICA Y DE MANERA CONJUNTA PRESENTANDO LAS CARACTERÍSTICAS DE CADA ÁLBUM QUE ELLAS HAN REALIZADO. EL TRABAJO DESTACA LA HISTORIA DE LA BANDA Y EL PROPIO ÉXITO QUE CONSIGUIÓ AL LLEVARSE POR SER EL PRIMER GRUPO EN GANAR UN FACTOR X EN LA CATEGORÍA DE GRUPO.",
    mainImage: "https://ik.imagekit.io/photoiss/fotos-01.png",
  },
};

// Modal functionality
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const workCards = document.querySelectorAll(".work-card");

workCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.getAttribute("data-project");
    const project = projectData[projectId];

    if (project) {
      // Update modal content
      document.getElementById("modalProjectTitle").textContent = project.title;
      document.getElementById("modalProjectName").textContent = project.title;
      document.getElementById("modalProjectCategory").textContent =
        project.category;
      document.getElementById("modalProjectDescription").textContent =
        project.description;

      // Update main image
      const mainImage = document.getElementById("modalMainImage");
      mainImage.style.backgroundImage = `url('${project.mainImage}')`;
      mainImage.style.backgroundSize = "cover";
      mainImage.style.backgroundPosition = "center";

      // Show modal
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close modal on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
