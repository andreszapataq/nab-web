// Hamburger Menu
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)

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

function addFade(icon) {
    icon.classList.add('fa-fade')
}

function removeFade(icon) {
    icon.classList.remove('fa-fade')
}

addressItem.addEventListener('mouseover', function() {addFade(addressIcon)})
addressItem.addEventListener('mouseout', function() {removeFade(addressIcon)})

phoneItem.addEventListener('mouseover', function() {addFade(phoneIcon)})
phoneItem.addEventListener('mouseout', function() {removeFade(phoneIcon)})

emailItem.addEventListener('mouseover', function() {addFade(emailIcon)})
emailItem.addEventListener('mouseout', function() {removeFade(emailIcon)})