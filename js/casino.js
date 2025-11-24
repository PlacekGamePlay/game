const sites = [
    "dancecrew",
    "puzzle",
    "casinoboss",
    "cowabummer",
    "policewarrant_strange"
];

const textAwards = [
    "hi2",
    "hi3"
];

document.getElementById('slot').addEventListener('click', () => {
    const chance = Math.random();
    if (chance < 0.5) {
        const randomSite = sites[Math.floor(Math.random() * sites.length)];
        window.location.href = randomSite;
    } else {
        const randomAward = textAwards[Math.floor(Math.random() * textAwards.length)];

        const slotImg = document.getElementById('slot');
        const prize = document.getElementById('prize');

        slotImg.style.display = 'none';
        prize.textContent = randomAward;
    }
});
