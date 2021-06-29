let galleryId = "";
let counter = 0;

const limits = {
  dining: 1,
  beds: 2,
  sofas: 1,
  tables: 1,
};

window.onload = () => {
  const year = document.querySelector("#year");
  year.innerHTML = new Date().getFullYear();

  const gallery = document.querySelector("#gallery");
  const categories = document.querySelectorAll(".category");

  categories.forEach((category) => {
    category.addEventListener("click", (event) => {
      gallery.classList.add("flex");
      gallery.classList.remove("hidden");
      gallery.scrollIntoView();

      galleryId = event.currentTarget.id;
      counter = 0;
      setImageSrc();
    });
  });

  const next = document.querySelector("#next");
  const back = document.querySelector("#back");

  next.addEventListener("click", () => {
    counter = (counter + 1) % limits[galleryId];
    setImageSrc();
  });

  back.addEventListener("click", () => {
    counter = Math.abs((counter - 1) % limits[galleryId]);
    setImageSrc();
  });
};

const setImageSrc = () => {
  const slider = document.querySelector("#slider");
  slider.src = `/img/gallery/${galleryId}/${counter}.png`;
};
