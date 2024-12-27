const galleryImages = [
    { src: "./img/00001-18dic.jpeg", caption: "" },
    { src: "./img/00002-18dic.jpeg", caption: "" },
    { src: "./img/00003-18dic.jpeg", caption: "" },
    { src: "./img/00004-18dic.jpeg", caption: "" },
    { src: "./img/00005-18dic.jpeg", caption: "" },
    { src: "./img/00006-18dic.jpeg", caption: "" },
    { src: "./img/00007-18dic.jpeg", caption: "" },
    { src: "./img/00008-18dic.jpeg", caption: "" },
    { src: "./img/00009-18dic.jpeg", caption: "" },
    { src: "./img/00010-18dic.jpeg", caption: "" },
    { src: "./img/00011-18dic.jpeg", caption: "" },
    { src: "./img/00012-18dic.jpeg", caption: "" },
    { src: "./img/00013-18dic.jpeg", caption: "" },
    { src: "./img/00014-18dic.jpeg", caption: "" },
    { src: "./img/00015-18dic.jpeg", caption: "" },
    { src: "./img/00016-18dic.jpeg", caption: "" },
    { src: "./img/00017-18dic.jpeg", caption: "" },
    { src: "./img/00018-18dic.jpeg", caption: "" },
    { src: "./img/00019-18dic.jpeg", caption: "" },
    { src: "./img/00020-18dic.jpeg", caption: "" },

    { src: "./img/00021-18dic.jpeg", caption: "" },
    { src: "./img/00022-18dic.jpeg", caption: "" },
    { src: "./img/00023-18dic.jpeg", caption: "" },
    { src: "./img/00024-18dic.jpeg", caption: "" },
    { src: "./img/00025-18dic.jpeg", caption: "" },
    { src: "./img/00026-18dic.jpeg", caption: "" },
    { src: "./img/00027-18dic.jpeg", caption: "" },
    { src: "./img/00028-18dic.jpeg", caption: "" },
    { src: "./img/00029-18dic.jpeg", caption: "" },
    { src: "./img/00030-18dic.jpeg", caption: "" },
    { src: "./img/00031-18dic.jpeg", caption: "" },
    { src: "./img/00032-18dic.jpeg", caption: "" },
    { src: "./img/00033-18dic.jpeg", caption: "" },
    { src: "./img/00034-18dic.jpeg", caption: "" },
    { src: "./img/00035-18dic.jpeg", caption: "" },
    { src: "./img/00036-18dic.jpeg", caption: "" },
    { src: "./img/00037-18dic.jpeg", caption: "" },
    { src: "./img/00038-18dic.jpeg", caption: "" },
    { src: "./img/00039-18dic.jpeg", caption: "" },
    { src: "./img/00040-18dic.jpeg", caption: "" },

    { src: "./img/00041-18dic.jpeg", caption: "" },
    { src: "./img/00042-18dic.jpeg", caption: "" },
    { src: "./img/00043-18dic.jpeg", caption: "" },
    { src: "./img/00044-18dic.jpeg", caption: "" },
    { src: "./img/00045-18dic.jpeg", caption: "" },
    { src: "./img/00046-18dic.jpeg", caption: "" },
    { src: "./img/00047-18dic.jpeg", caption: "" },
    { src: "./img/00048-18dic.jpeg", caption: "" },
    { src: "./img/00049-18dic.jpeg", caption: "" },
    { src: "./img/00050-18dic.jpeg", caption: "" },
    { src: "./img/00051-18dic.jpeg", caption: "" },
    { src: "./img/00052-18dic.jpeg", caption: "" },
    { src: "./img/00053-18dic.jpeg", caption: "" },
    { src: "./img/00054-18dic.jpeg", caption: "" },
    { src: "./img/00055-18dic.jpeg", caption: "" },
    { src: "./img/00056-18dic.jpeg", caption: "" },
    { src: "./img/00057-18dic.jpeg", caption: "" },
    { src: "./img/00058-18dic.jpeg", caption: "" },
    { src: "./img/00059-18dic.jpeg", caption: "" },
    { src: "./img/00060-18dic.jpeg", caption: "" },
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