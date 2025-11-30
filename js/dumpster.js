const colors = [
    { hex: "#ff0000", name: "Red", chance: 5 },
    { hex: "#58ae98", name: "Green", chance: 10 },
    { hex: "#84357d", name: "Purple", chance: 0 },
    { hex: "#85a3d8", name: "Cyan", chance: 0 },
    { hex: "#1b215a", name: "Blue", chance: 0 },
    { hex: "#b55515", name: "Orange", chance: 0 },
    { hex: "#8f8f8f", name: "Gray", chance: 0 }
];

let totalSpecified = colors.reduce((sum, c) => sum + c.chance, 0);
let remaining = 100 - totalSpecified;
let unspecified = colors.filter(c => c.chance === 0);
let each = remaining / unspecified.length;
unspecified.forEach(c => c.chance = each);

const rand = Math.random() * 100;
let cumulative = 0;
let chosen;
for (let i = 0; i < colors.length; i++) {
    cumulative += colors[i].chance;
    if (rand < cumulative) {
        chosen = colors[i];
        break;
    }
}

document.body.setAttribute("style", `background-color: ${chosen.hex};`);

const text = document.getElementById("text");
const soul = document.getElementById("soul"); 
const dump = document.getElementById("dump"); 

text.classList.add("hidden");
if (soul) soul.style.display = "none";
if (dump) dump.style.display = "none";

if (chosen.hex === "#ff0000" && soul) {
    soul.style.display = "block";
    soul.style.cursor = "pointer";
    soul.addEventListener("click", () => {
        window.location.href = "diagnosis";
    });
} else if (chosen.hex === "#58ae98" && dump) {
    dump.style.display = "block";
    dump.style.cursor = "pointer";
    dump.addEventListener("click", () => {
        window.location.href = "policewarrant";
    });
} else {
    text.innerHTML = `
        <p>${chosen.name}.</p>
        <p>That is how you remember it.</p>
        <p>But isn't something missing?</p>
    `;
    text.classList.remove("hidden");
}
