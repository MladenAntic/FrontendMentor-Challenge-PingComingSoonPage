const input = document.getElementById('email')
const submit = document.getElementById('submit')
const errorMessage = document.querySelector('.error-message')

const links = document.querySelectorAll('a')
const icons = document.querySelectorAll('i')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.checkValidity()) {
        input.style.border = '1px solid var(--blue)'
        errorMessage.style.display = 'none'
    } else {
        input.style.border = '1px solid var(--light-red)'
        errorMessage.style.display = 'block'
    }
})

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', () => {
        icons[i].style.color = '#fff'
    })
    links[i].addEventListener('mouseout', () => {
        icons[i].style.color = 'var(--blue)'
    })
}