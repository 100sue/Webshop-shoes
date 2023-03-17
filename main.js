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
]

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

