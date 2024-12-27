const galleryImages = [
    { src: "./img/00001-25dic.jpeg", caption: "" },
    { src: "./img/00002-25dic.jpeg", caption: "" },
    { src: "./img/00003-25dic.jpeg", caption: "" },
    { src: "./img/00004-25dic.jpeg", caption: "" },
    { src: "./img/00005-25dic.jpeg", caption: "" },
    { src: "./img/00006-25dic.jpeg", caption: "" },
    { src: "./img/00007-25dic.jpeg", caption: "" },
    { src: "./img/00008-25dic.jpeg", caption: "" },
    { src: "./img/00009-25dic.jpeg", caption: "" },
    { src: "./img/00010-25dic.jpeg", caption: "" },
    { src: "./img/00011-25dic.jpeg", caption: "" },
    { src: "./img/00012-25dic.jpeg", caption: "" },
    { src: "./img/00013-25dic.jpeg", caption: "" },
    { src: "./img/00014-25dic.jpeg", caption: "" },
    { src: "./img/00015-25dic.jpeg", caption: "" },
    { src: "./img/00016-25dic.jpeg", caption: "" },
    { src: "./img/00017-25dic.jpeg", caption: "" },
    { src: "./img/00018-25dic.jpeg", caption: "" },
    { src: "./img/00019-25dic.jpeg", caption: "" },
    { src: "./img/00020-25dic.jpeg", caption: "" },

    { src: "./img/00021-25dic.jpeg", caption: "" },
    { src: "./img/00022-25dic.jpeg", caption: "" },
    { src: "./img/00023-25dic.jpeg", caption: "" },
    { src: "./img/00024-25dic.jpeg", caption: "" },
    { src: "./img/00025-25dic.jpeg", caption: "" },
    { src: "./img/00026-25dic.jpeg", caption: "" },
    { src: "./img/00027-25dic.jpeg", caption: "" },
    { src: "./img/00028-25dic.jpeg", caption: "" },
    { src: "./img/00029-25dic.jpeg", caption: "" },
    { src: "./img/00030-25dic.jpeg", caption: "" },
    { src: "./img/00031-25dic.jpeg", caption: "" },
    { src: "./img/00032-25dic.jpeg", caption: "" },
    { src: "./img/00033-25dic.jpeg", caption: "" },
    { src: "./img/00034-25dic.jpeg", caption: "" },
    { src: "./img/00035-25dic.jpeg", caption: "" },
    { src: "./img/00036-25dic.jpeg", caption: "" },
    { src: "./img/00037-25dic.jpeg", caption: "" },
    { src: "./img/00038-25dic.jpeg", caption: "" },
    { src: "./img/00039-25dic.jpeg", caption: "" },
    { src: "./img/00040-25dic.jpeg", caption: "" },

    { src: "./img/00041-25dic.jpeg", caption: "" },
    { src: "./img/00042-25dic.jpeg", caption: "" },
    { src: "./img/00043-25dic.jpeg", caption: "" },
    { src: "./img/00044-25dic.jpeg", caption: "" },
    { src: "./img/00045-25dic.jpeg", caption: "" },
    { src: "./img/00046-25dic.jpeg", caption: "" },
    { src: "./img/00047-25dic.jpeg", caption: "" },
    { src: "./img/00048-25dic.jpeg", caption: "" },
    { src: "./img/00049-25dic.jpeg", caption: "" },
    { src: "./img/00050-25dic.jpeg", caption: "" },
    { src: "./img/00051-25dic.jpeg", caption: "" },
    { src: "./img/00052-25dic.jpeg", caption: "" },
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