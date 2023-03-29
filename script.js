const btn = document.getElementById("btn");
const shapes = [
    "quad-circle-1",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-1",
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle",
    "polygon-1",
    "polygon-2",
    "polygon-3"
];

const colors = ["#F83735", "#112BA9", "#FAC13A", "#B7E5D7", "#B2EDFF", "#FEC5C4", "#318882"];
const boxes = document.querySelectorAll(".container div");
let generatePattern = () => {
    boxes.forEach((box) => {
        box.className = "";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[j];
    });
};

btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);