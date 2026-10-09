const images = document.querySelectorAll(".image-card img");

let currentIndex = 0;

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

lightbox.innerHTML = `
    <button class="close">X</button>
    <button class="prev">&#10094;</button>
    <img class="lightbox-img">
    <button class="next">&#10095;</button>
`;

document.body.appendChild(lightbox);

const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function openImage(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = "flex";
}

images.forEach((image, index) => {
    image.addEventListener("click", function () {
        openImage(index);
    });
});

nextBtn.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;
});

closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".image-card");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        const filter = this.dataset.filter;

        cards.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});