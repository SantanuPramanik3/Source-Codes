document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");
  const cards = document.querySelectorAll(".card");
  const whatsappNumber = "916294183738"; 
  document.querySelectorAll(".buy-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
  e.preventDefault();
  const projectName = btn.getAttribute("data-project");
  const message = `Hello, I am interested in buying the project: *${projectName}*`;
  const whatsappURL =
 `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
  });
  });
  searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  cards.forEach((card) => {
  const heading = card.querySelector("h3");
  const projectName = heading
  ? heading.innerText.toLowerCase()
  : card.innerText.toLowerCase();
  if (projectName.includes(query)) {
  card.classList.remove("hide");
  card.style.order = "-1";
  } else {
  card.classList.add("hide");
  card.style.order = "0";
  }
  });
  });
  clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  cards.forEach((card) => {
  card.classList.remove("hide");
  card.style.order = "0";
  });
  });
  document.addEventListener("mouseover", (e) => {
  const card = e.target.closest(".card");
  if (card && !e.target.matches("img")) {
  card.classList.add("card-hover");
  }
  if (e.target.matches(".card img")) {
  e.target.classList.add("img-hover");
  e.target.closest(".card").classList.remove("card-hover");
  }
  });
  document.addEventListener("mouseout", (e) => {
  const card = e.target.closest(".card");
  if (card && !e.target.matches("img")) {
  card.classList.remove("card-hover");
  }
  if (e.target.matches(".card img")) {
  e.target.classList.remove("img-hover");
  }
  });

  function convertDropboxToRaw(link) {
    if (!link.includes("dropbox.com")) return link;
    return link.replace(/(\?dl=\d+)/, "?raw=1").replace(/&dl=\d+/, "&raw=1");
  }

  const imgElements = document.querySelectorAll("img");

  imgElements.forEach(img => {
    const originalSrc = img.getAttribute("src");
    if (originalSrc && originalSrc.includes("dropbox.com")) {
      const fixedSrc = convertDropboxToRaw(originalSrc);
      const preloader = new Image();
      preloader.src = fixedSrc;

      preloader.onload = function () {
        img.src = fixedSrc;
        console.log("Preloaded and updated:", fixedSrc);
      };

      preloader.onerror = function () {
        console.error("Failed to load:", fixedSrc);
      };
    }
  });
});
