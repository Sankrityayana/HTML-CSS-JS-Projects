const characters = document.querySelectorAll('.container span');

characters.forEach((character) => {
    character.addEventListener('click', (e) => {
        e.target.classList.toggle("active")
    })
    character.addEventListener("animationend", (e) => {
        e.target.classList.toggle("active")
    })
})