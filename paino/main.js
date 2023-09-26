
const keys = document.querySelectorAll('.key');
const audioElements = document.querySelectorAll('audio');
keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        const audio = Array.from(audioElements).find(element => element.getAttribute('data-note') === note);
        if(audio){
            audio.currentTime = 0;
            audio.play();
        }
    })
})