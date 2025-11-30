const sites = [
    "dancecrew",
    "puzzle",
    "casinoboss",
    "cowabummer",
    "policewarrant_strange"
];

const textAwards = [
    "10G. That's somethin' alright.",
    "25G. Get me some Nice Cream!",
    "50G! We're getting there!",
    "120G! That can get you to teleport!",
    "250G. Nice.",
    "500G... It's... Congrats, dude.",
    "999G Are you ******* kidding me?!"
];

const slotImg = document.getElementById('slot');
const prize = document.getElementById('prize');

const audioLost = document.getElementById('audioLost');
const audioText = document.getElementById('audioText');
const jackpotAudio = document.getElementById('jackpot');
const audioStock = document.getElementById('stock');
const goSiteAudio = document.getElementById('gosite');
const audioRoll = document.getElementById('audioRoll')

let jackpotTriggered = false;
let prizeWins = 0;

slotImg.addEventListener('click', () => {

    if (jackpotTriggered) return;
    if (prizeWins >= 3) return;

    prize.textContent = "";

    const chance = Math.random();

    audioLost.onended = null;
    audioText.onended = null;
    jackpotAudio.onended = null;
    audioRoll.onended = null;

    audioRoll.currentTime = 0;
    audioRoll.volume = 0.25;
    audioRoll.play();
    slotImg.src = "images/slotRoll.gif";

    audioRoll.onended = () => {


        if (chance < 0.63) {
            prize.textContent = "Didn't get anything. One more?";
            slotImg.src = "images/slotMachine.png";
            audioLost.currentTime = 0;
            audioLost.volume = 0.25;
            audioLost.play();
        }
        else if (chance < 0.89) {
            const prizeChance = Math.random() * 26;
            let selectedPrize;

            if (prizeChance < 7.5) {
                selectedPrize = textAwards[0];
                slotImg.src = "images/slotG10.png";
            }
            else if (prizeChance < 13) {
                selectedPrize = textAwards[1];
                slotImg.src = "images/slotG25.png";
            }
            else if (prizeChance < 18) {
                selectedPrize = textAwards[2];
                slotImg.src = "images/slotG50.png";
            }
            else if (prizeChance < 22) {
                selectedPrize = textAwards[3];
                slotImg.src = "images/slotG120.png";
            }
            else if (prizeChance < 25) {
                selectedPrize = textAwards[4];
                slotImg.src = "images/slotG250.png";
            }
            else {
                selectedPrize = textAwards[5];
                slotImg.src = "images/slotG500.png";
            }

            jackpotTriggered = true;
            prize.textContent = selectedPrize;
            audioText.currentTime = 0;
            audioText.volume = 0.15;
            audioText.play();

            audioText.onended = () => {
                jackpotTriggered = false;
                slotImg.src = "images/slotMachine.png";
            };

            prizeWins++;
        }
        else if (chance < 0.90) {
            jackpotTriggered = true;
            prize.textContent = textAwards[6];

            jackpotAudio.currentTime = 0;
            jackpotAudio.volume = 0.1;
            jackpotAudio.play();
            slotImg.src = "images/slotJackpot.png";

            jackpotAudio.onended = () => {
                audioStock.volume = 0.15;
                audioStock.play();
                prize.textContent = "";
                slotImg.src = "images/outStock.png";
            };

        }
        else {
            const randomSite = sites[Math.floor(Math.random() * sites.length)];
            jackpotTriggered = true;

            goSiteAudio.volume = 0.15;
            goSiteAudio.play();
            slotImg.src = "images/slotDead.png";
            goSiteAudio.onended = () => {
                jackpotTriggered = false;
                slotImg.src = "images/slotMachine.png";
                window.location.href = randomSite;
            };


        }

        if (prizeWins >= 3) {
            jackpotTriggered = true;
            audioText.onended = () => {
                audioStock.volume = 0.15;
                audioStock.play();
                prize.textContent = "";
                slotImg.src = "images/outStock.png";
            };
        }
    };
});
