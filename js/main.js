// Map Pin Effect
const findUs = document.getElementById('find-us-item')
const faPin = document.getElementById('fa-map-pin')

function addBounce() {
    faPin.classList.add('fa-bounce')
}

function removeBounce() {
    faPin.classList.remove('fa-bounce')
}

findUs.addEventListener('mouseover', addBounce)
findUs.addEventListener('mouseout', removeBounce)