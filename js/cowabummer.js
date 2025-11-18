document.addEventListener('DOMContentLoaded', () => {
    const cowImage = document.getElementById('cowImage');

    const handleClick = () => {
        cowImage.src = 'images/cowabummer.gif';
        cowImage.style.cursor = 'default'; 
        cowImage.removeEventListener('click', handleClick); 

        const audio = new Audio('audios/helpme.ogg');
        audio.volume = 0.1;
        audio.play();

        setTimeout(() => {
            cowImage.remove();
        }, 2400);
    };

    cowImage.addEventListener('click', handleClick);
});
