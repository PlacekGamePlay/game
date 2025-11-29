function rollNumber() {
    return Math.floor(Math.random() * 10);
}

let rollOne = 0;
let rollTwo = 0;
let rollThree = 0;

const sites = [
    "dancecrew",
    "puzzle",
    "casinoboss",
    "cowabummer",
    "policewarrant_strange"
];

const siteMap = {
    0: 0,
    1: 0,
    2: 1,
    3: 1,
    4: 2,
    5: 2,
    6: 1,
    7: 3,
    8: 3,
    9: 4
};

const textAwards = ["hi2", "hi3"];

const superRollChance = 0.06;

document.getElementById('slot').addEventListener('click', () => {

    if (Math.random() < superRollChance) {
        const forced = rollNumber();
        rollOne = forced;
        rollTwo = forced;
        rollThree = forced;
    } else {
        rollOne = rollNumber();
        rollTwo = rollNumber();
        rollThree = rollNumber();
    }

    const rollsDiv = document.getElementById('rolls');
    const prize = document.getElementById('prize');

    rollsDiv.textContent = `${rollOne} ${rollTwo} ${rollThree}`;

    prize.innerHTML = "";

    if (rollOne === rollTwo && rollTwo === rollThree) {
        const siteIndex = siteMap[rollOne];

        const jackpotText = document.createElement("div");
        jackpotText.classList.add("rewardText");
        jackpotText.textContent = "JACKPOT, JACKPOT, JACKPOT!";
        prize.appendChild(jackpotText);

        const claim = document.createElement("div");
        claim.classList.add("rewardText");
        claim.textContent = "Click here to receive your prize!";
        claim.style.cursor = "pointer";
        prize.appendChild(claim);

        claim.addEventListener("click", () => {
            window.location.href = sites[siteIndex];
        });

        return; 
    }

    const randomAward = textAwards[Math.floor(Math.random() * textAwards.length)];
    const text = document.createElement("div");
    text.classList.add("rewardText");
    text.textContent = randomAward;
    prize.appendChild(text);
});
