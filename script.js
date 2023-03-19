const panels = document.querySelectorAll('.panel')

panels.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses()
        card.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(card => {
        card.classList.remove('active')
    })
}