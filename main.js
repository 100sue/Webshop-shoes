// Mise en place et déclaration des constantes :

const imgContainer = document.querySelector(".showcase > div");
const img = document.querySelector(".showcase img");
const shadow = document.querySelector(".shadow");


const thumb = document.querySelectorAll(".thumbs img");
const titleOverlay = document.querySelector(".titleOverlay");
const title = document.querySelector(".titleText");
const desc = document.querySelector(".description");
const sizes = document.querySelectorAll(".sizes > li");
const stars = document.querySelectorAll(".stars span");
const price = document.querySelector(".price");
const colorBtn = document.querySelectorAll(".color");


const pag = document.querySelectorAll(".pag");
const prev = document.querySelector(".arr-left");
const next = document.querySelector(".arr-right");
const shoeNum = document.querySelector(".shoe-num");
const shoeTotal = document.querySelector(".shoe-total");

// Mise en place de variables, voir ordre ds dossier image : shoe1-1/img1.png

let id = 1;
let colorType = 1;
let shoe = 1;

// Data : details des chaussures

const colors = [
    [
        "#ae001b",
        "#111111"
    ],
    [
        "linear-gradient(0deg, orange, red)",
        "#bda08e"
    ],
    [
        "linear-gradient(0deg, #00b8ea 0%, #e56da6 100%)",
        "linear-gradient(0deg, #dae766, #b2afaa)"
    ],
];


const prices = ["150", "250", "175"];

const names = [
    [
        "Red Nike Jordan Aura",
        "Black Nike Jordan Aura"
    ],
    [
        "Black/orange Nike Air Max 95",
        "Beige/grey Nike Air Max 95"
    ],
    [
        "Colorful Nike Jordan Delta 2 SP",
        "Gray Nike Jordan Delta 2 SP"
    ],
];

const descriptions = [
    [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tellus, fermentum at ligula quis, ultricies mollis nunc. Nam et dignissim nisi. In ut elementum augue, ut placerat diam. Duis. ",
    ],
    [
        " Nike Air 95 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tellus, fermentum at ligula quis, ultricies mollis nunc. Nam et dignissim nisi. In ut elementum augue, ut placerat diam. Duis. ",
    ],
    [
        "Jordan Delta 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tellus, fermentum at ligula quis, ultricies mollis nunc. Nam et dignissim nisi. In ut elementum augue, ut placerat diam. Duis. ",
    ],
];

const ratings = [4, 5, 3];


// Fonction: Récupéreration de  l'image à partir du chemin du dossier.

function getImage(imgType, shoe, colorType, id, extension) {
    return "img/" + imgType + "/shoe" + shoe + "-" + colorType + 
    "/img" + id + "." + extension;
}


// Fonction Reset: Réinitialisation de l'etat actif du bouton.

function resetActive(element, elementClass, i) {
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove(elementClass + "-active");
    }
    element[i].classList.add(elementClass + "-active");
}

// Fonction Animation: Activation puis désactivation de l'anim, permettant de la réctiver après.

function animate(element, time, anim) {
    element.style.animation = anim;

    setTimeout(() => {
        element.style.animation = "none";
    }, time);

}

// Fonction Couleurs: cette fonction réassigne les couleurs pour les boutons couleurs.
// Changements de couleurs avec les chaussures correspondantes.

function assignColors(i, shoe) {
    colorBtn[i].style.background = colors[shoe - 1][i];
}

// Fonction Notation: définir une note en "remplissant" les étoiles.
// cette fonction prend le nombre du tableau des notes et remplit le même nombre d'étoiles.
// Ajout/suppression des étoiles.

function resetStars(shoe) {
// Reset    
    for (let i = 0; i < stars.length; i++) {
        stars[i].innerText = "star_outline";
    }
// Ajout
    for (let i = 0; i < ratings[shoe]; i++) {
        stars[i].innerText = "star";
    }
}

// Changement de la taille de la chaussure.

for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", (e) => {
        resetActive(sizes, "size", i);
    });
}

// Configuration de toutes les données initiales pour la première chaussure qui se charge.

shoeTotal.innerText = "0" + pag.length;
shoeNum.innerText = "0" + shoe;
price.innerText = "€" + prices[0];
resetStars(shoe - 1);
title.innerText = names[0][0];
desc.innerText = descriptions[0];


// Changement d'images :
 
for (let i = 0; i < thumb.length; i++) {
    thumb[i].addEventListener("click", (e) => {
        id = i + 1;
// définir l'image principale sur l'image miniature cliquée:    
        img.src = getImage("showcase", shoe, colorType, id, "png");
// Ajout de la classe active à la vignette cliquée:
        resetActive(thumb, "thumb", i)
// Ajout du "fondu enchainé" de l'anim
        animate(imgContainer, 550, "fade 00ms ease-in-out")
    });
}

for (let i = 0; i < colorBtn.length; i++) {
    assignColors(i, shoe);
    colorBtn[i].addEventListener("click", () => {
        colorType = i + 1;

        // Changement del'image de la vitrine       
        setTimeout(() => {
            img.src = getImage ("showcase", shoe, colorType, id, "png");
        }, 450);

        // Changement des vignettes 
for (let i = 0; i < thumb.length; i++) {
    thumb[i].src = getImage("thumbs", shoe, colorType, i + 1, "jpg")
}
// définir la classe active sur le bouton cliqué
resetActive(colorBtn, "color", i);

// Changement du titre
title.innerText = names [shoe - 1][i];

// Ajout des anims:
animate(img, 550, "jump 500ms ease-in-out");
animate(shadow, 550, "shadow 500ms ease-in-out");
animate(titleOverlay, 850, "title 800ms ease");
    });
}

// Sliders
function slider(shoe) {
    setTimeout(() => {
        img.src = getImage ("showcase", shoe, colorType, id, "png");
    }, 600);

    for (let i = 0; i < thumb.length; i++) {
        thumb[i].src = getImage("thumbs", shoe, colorType, i + 1, "jpg");
    }
    for (let i = 0; i < colorBtn.length; i++) {
        assignColors(i, shoe);
    }
    resetActive(pag, "pag", shoe - 1);
    desc.innerText = descriptions[shoe - 1];
    title.innerText = names[shoe - 1][colorType - 1];
    price.innerText = "€" + prices[shoe - 1];
    resetStars(shoe - 1);
    shoeNum.innerText = "0" + shoe;
    animate(img, 1550, "replace 1.5s ease-in");
    animate(shadow, 1550, "shadow2 1.5s ease-in");
    animate(titleOverlay, 850, "title 800ms ease");
}

prev.addEventListener("click", () => {
    shoe--;
    if (shoe < 1) {
        shoe = pag.length;
    }
    slider(shoe);
});

next.addEventListener("click", () => {
    shoe++;
    if (shoe > pag.length) {
        shoe = 1;
    }
    slider(shoe);
});

// Pagination

for (let i = 0; i < pag.length; i++) {
    pag[i].addEventListener("click", () => {
        slider(i + 1);
        shoe = i + 1;
    });
}