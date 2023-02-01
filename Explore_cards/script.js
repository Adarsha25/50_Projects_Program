const fromPanels = document.querySelectorAll('.panel')

fromPanels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    fromPanels.forEach(panel => {
        panel.classList.remove('active')
    })
}