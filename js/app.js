const btnElement = document.querySelector('.button')
const imgElement = document.querySelector('img')

let isOn = false

btnElement.addEventListener('click', () => {
    isOn = !isOn

    if(isOn) {
        imgElement.src = './pics/bulbon.gif'
        btnElement.textContent = 'Turn off the light'
    } else {
        imgElement.src = './pics/bulboff.gif'
        btnElement.textContent = 'Turn on the light'
    }
})