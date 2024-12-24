const galleryImages = [
    { src: "./img/01.jpg", caption: "" },
    { src: "./img/02.jpg", caption: "🔥" },
    { src: "./img/03.jpg", caption: "descripcion" },
    { src: "./img/04.jpg", caption: "" },
    { src: "./img/05.jpg", caption: "" },
    { src: "./img/06.jpg", caption: "" },
    { src: "./img/07.jpg", caption: "" },
    { src: "./img/08.jpg", caption: "" },
    { src: "./img/09.jpg", caption: "" },
    { src: "./img/10.jpg", caption: "" },
];

const galleryContainer = document.getElementById("image-gallery");

galleryImages.forEach(({ src, caption }) => {
    const card = document.createElement("div");
    card.className = "card_medium card_exp";

    const img = document.createElement("img");
    img.className = "img_card";
    img.src = src; // Asegúrate de que la ruta de las imágenes sea correcta
    img.alt = caption;
    img.loading = "lazy";

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = caption;

    // Envolver la imagen y la leyenda en un contenedor <figure> si es necesario
    const figure = document.createElement("figure");
    figure.appendChild(img);
    figure.appendChild(figcaption);

    card.appendChild(figure);
    galleryContainer.appendChild(card);
});