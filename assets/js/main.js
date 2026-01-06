// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
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

  // Modal scroll to top functionality
  const modalScrollToTopBtn = document.getElementById("modalScrollToTop");

  modalScrollToTopBtn.addEventListener("click", () => {
    const modal = document.getElementById("projectModal");
    modal.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Accordion functionality for info tabs
  const tabHeaders = document.querySelectorAll(".tab-header");

  tabHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const tabItem = header.parentElement;
      const isActive = tabItem.classList.contains("active");

      // Close all tabs
      document.querySelectorAll(".tab-item").forEach((item) => {
        item.classList.remove("active");
      });

      // Open clicked tab if it wasn't active
      if (!isActive) {
        tabItem.classList.add("active");
      }
    });
  });

  // Project data
  const projectData = {
    nogue: {
      title: "NOGUE",
      category: "Wireframes, Visual Identity and Creative Direction",
      description:
        "Academic project developed for the Editorial Design course. NOGUE is a satirical magazine that critiques fashion and consumer culture through parody, photography, and bold graphic design. We created all the content—including visuals, layout, and art direction—with an aesthetic inspired by the DIY (do it yourself) ethos.",
      mainImage: "https://ik.imagekit.io/photoiss/portada.jpg",
    },
    greeno: {
      title: "GREENO",
      category: "App Development, UX/UI Design",
      description:
        "MORE CONTROL OF RECEIPTS BY GETTING EVERYTHING ON YOUR SMARTPHONE. NO NEED TO SEND TO YOUR EMAIL. PAPER RECEIPTS START THE DECOMPOSITION PROCESS AND YOU LOSE ALL THE INFORMATION. GREENO'S OBJECTIVE IS TO CONNECT CONSUMERS WITH SUSTAINABLE PRACTICES, ELIMINATING RECEIPT PRINTING AND HELPING BUSINESSES WITH THE PRINTING OF MULTIPLE PRODUCT LOADING AND UNLOADING DELIVERY NOTES.",
      mainImage:
        "https://ik.imagekit.io/photoiss/Captura%20de%20pantalla%202025-09-08%20a%20las%2018.58.19.png",
    },
    starbucks: {
      title: "STARBUCKS",
      category: "Graphic Campaign, Creative Direction",
      description:
        "GRAPHIC CAMPAIGN FOR STARBUCKS ABOUT CHRISTMAS CULTURE AND THE WARMTH OF HOME DURING THIS SPECIAL TIME. IT SEEKS TO REPRESENT AMERICAN TRADITION AND FAMILY WITH THE FLAVOR OF CULTURE AND THE BEST INGREDIENTS, CREATING EMOTIONS BASED ON NOSTALGIA.",
      mainImage:
        "https://ik.imagekit.io/photoiss/blanco%20y%20negro%20navidad.png",
    },
    polydor: {
      title: "POLYDOR",
      category: "Discographic Research, Music Branding",
      description:
        "THE PROJECT CONSISTS OF DEVELOPING THE CREATION OF THE MUSICAL DISCOGRAPHY OF THE BRITISH BAND LITTLE MIX. WHERE SOME CONCEPTUAL ALBUMS ARE IDENTIFIED IN THE SAME WAY. GRAPHIC AND JOINTLY PRESENTING THE CHARACTERISTICS OF EACH ALBUM THEY HAVE MADE. THE WORK HIGHLIGHTS THE BAND'S HISTORY AND THE SUCCESS THEY ACHIEVED BY BEING THE FIRST GROUP TO WIN THE X FACTOR IN THE GROUP CATEGORY.",
      mainImage: "https://ik.imagekit.io/photoiss/fotos-01.png",
    },
  };

  // Modal functionality
  const modal = document.getElementById("projectModal");
  const modalClose = document.getElementById("modalClose");
  const workCards = document.querySelectorAll(".work-card");

  const projectOrder = ["nogue", "greeno", "starbucks", "polydor"];

  const openProject = (projectId) => {
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

      // Show/hide the correct gallery for this project
      const allGalleries = document.querySelectorAll(".project-gallery");
      allGalleries.forEach((gallery) => {
        if (gallery.getAttribute("data-project") === projectId) {
          gallery.style.display = "grid";
        } else {
          gallery.style.display = "none";
        }
      });

      // Update explore more items with next projects
      const currentIndex = projectOrder.indexOf(projectId);
      const nextIndex1 = (currentIndex + 1) % projectOrder.length;
      const nextIndex2 = (currentIndex + 2) % projectOrder.length;

      const nextProject1 = projectData[projectOrder[nextIndex1]];
      const nextProject2 = projectData[projectOrder[nextIndex2]];

      const exploreItem1 = document.getElementById("explore-item-1");
      const exploreItem2 = document.getElementById("explore-item-2");

      if (nextProject1) {
        exploreItem1.setAttribute("data-project", projectOrder[nextIndex1]);
        exploreItem1.querySelector(
          ".explore-image"
        ).style.backgroundImage = `url('${nextProject1.mainImage}')`;
        exploreItem1.querySelector(".explore-label").textContent =
          nextProject1.title;
      }

      if (nextProject2) {
        exploreItem2.setAttribute("data-project", projectOrder[nextIndex2]);
        exploreItem2.querySelector(
          ".explore-image"
        ).style.backgroundImage = `url('${nextProject2.mainImage}')`;
        exploreItem2.querySelector(".explore-label").textContent =
          nextProject2.title;
      }

      // Show modal
      modal.classList.add("active");
      document.body.style.overflow = "hidden";

      // Trigger scroll animations
      setTimeout(observeGalleryItems, 100);
    }
  };

  workCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      openProject(projectId);
    });
  });

  // Add click handlers to explore items
  document.addEventListener("click", (e) => {
    const exploreItem = e.target.closest(".explore-item");
    if (exploreItem) {
      const projectId = exploreItem.getAttribute("data-project");
      if (projectId) {
        modal.scrollTop = 0;
        openProject(projectId);
      }
    }
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

  // Scroll animation for gallery items
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe gallery items when modal is opened
  const observeGalleryItems = () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item) => {
      item.classList.remove("visible");
      observer.observe(item);
    });

    // Also observe explore items
    const exploreItems = document.querySelectorAll(".explore-item");
    exploreItems.forEach((item) => {
      item.classList.remove("visible");
      observer.observe(item);
    });
  };
});
