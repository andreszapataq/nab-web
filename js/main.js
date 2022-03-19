// Find Us Effect
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

// Contact Icon Effect
const contactItem = document.getElementById('contact-item')
const contactIcon = document.getElementById('fa-contact-icon')

function addFade() {
    contactIcon.classList.add('fa-fade')
}

function removeFade() {
    contactIcon.classList.remove('fa-fade')
}

contactItem.addEventListener('mouseover', addFade)
contactItem.addEventListener('mouseout', removeFade)