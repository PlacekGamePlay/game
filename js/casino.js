const sites = [
    "dancecrew",
    "puzzle",
    "casinoboss",
    "cowabummer",
    "policewarrant_strange"
];

const textAwards = [
    "this is prize 1",
    "this is prize 2",
    "this is prize 3",
    "this is prize 4",
    "this is prize 5",
    "this is prize 6",
    "this is prize 7",
    "this is prize 8",
    "this is prize 9"
];

const slotImg = document.getElementById('slot');
const prize = document.getElementById('prize');

const audioLost = document.getElementById('audioLost');
const audioText = document.getElementById('audioText');
const jackpotAudio = document.getElementById('jackpot');

let jackpotTriggered = false;

slotImg.addEventListener('click', () => {

    if (jackpotTriggered) return;

    prize.textContent = "";

    const chance = Math.random();

    audioLost.onended = null;
    audioText.onended = null;
    jackpotAudio.onended = null;

    if (chance < 0.75) {
        prize.textContent = "you suck.";
        audioLost.currentTime = 0;
        audioLost.play();

    } else if (chance < 0.99) {
        const randomAward = textAwards[Math.floor(Math.random() * textAwards.length)];
        prize.textContent = randomAward;
        audioText.currentTime = 0;
        audioText.play();

    } else {
        jackpotTriggered = true;

        jackpotAudio.currentTime = 0;
        jackpotAudio.volume = 0.1;
        jackpotAudio.play();

        jackpotAudio.onended = () => {
            const randomSite = sites[Math.floor(Math.random() * sites.length)];
            window.location.href = randomSite;
        };
    }
});
