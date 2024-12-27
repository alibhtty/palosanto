const galleryImages = [
    { src: "./img/12dic.jpg", caption: "12 Dic", route: "./diciembre/01" },
    { src: "./img/18dic.jpg", caption: "18 DIC", route: "./diciembre/02" },
    { src: "./img/25dic.jpg", caption: "25 DIC", route: "./diciembre/03" },
    { src: "./img/29dic.jpg", caption: "29 DIC", route: "./../" },
];

const galleryContainer = document.getElementById("image-gallery");

galleryImages.forEach(({ src, caption, route }) => {
    const link = document.createElement("a");
    link.href = route;
    link.className = "card_medium";

    const img = document.createElement("img");
    img.className = "img_card";
    img.src = src;
    img.alt = caption;
    img.loading = "lazy";

    const button = document.createElement("button");
    button.className = "caption_button";
    button.textContent = caption;

    link.appendChild(img);
    link.appendChild(button);
    galleryContainer.appendChild(link);
});