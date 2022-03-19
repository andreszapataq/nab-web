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
const addressItem = document.getElementById('address-item')
const phoneItem = document.getElementById('phone-item')
const emailItem = document.getElementById('email-item')

const addressIcon = document.getElementById('fa-building')
const phoneIcon = document.getElementById('fa-mobile-screen-button')
const emailIcon = document.getElementById('fa-envelope')

function addFade() {
    addressIcon.classList.add('fa-fade')
    phoneIcon.classList.add('fa-fade')
    emailIcon.classList.add('fa-fade')
}

function removeFade() {
    addressIcon.classList.remove('fa-fade')
    phoneIcon.classList.remove('fa-fade')
    emailIcon.classList.remove('fa-fade')
}

addressItem.addEventListener('mouseover', addFade)
addressItem.addEventListener('mouseout', removeFade)

phoneItem.addEventListener('mouseover', addFade)
phoneItem.addEventListener('mouseout', removeFade)

emailItem.addEventListener('mouseover', addFade)
emailItem.addEventListener('mouseout', removeFade)