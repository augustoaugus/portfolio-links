const icon = document.querySelector('footer>span')
const copyright = document.querySelector('footer>p')
const address = document.querySelector('footer>address')

icon.addEventListener('click', function () {
    copyright.classList.toggle('remove')
    address.classList.toggle('remove')
})