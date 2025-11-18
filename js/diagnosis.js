
document.getElementById("body").addEventListener("click", function () {
    const body = document.getElementById("body");
    const nerves = document.getElementById("nerves");
    const text = document.getElementById("text");
    const sound = document.getElementById("sound");

    body.style.display = "none";

    nerves.classList.remove("hidden");
    text.classList.remove("hidden");


    sound.volume = 0.3;
    sound.play();

    const paragraphs = text.querySelectorAll("p");

    let totalDelay = 0;

    paragraphs.forEach((p) => {
        const charCount = p.textContent.length;
        const lineDelay = charCount * 100;

        setTimeout(() => {
            p.style.transition = "opacity 5s ease, color 5s ease";
            p.style.opacity = "1";
            p.style.color = "white";
        }, totalDelay);

        totalDelay += lineDelay;
    });
});
