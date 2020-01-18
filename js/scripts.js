// changebackground on scroll

const [red, green, blue] = [69, 111, 225]
const navContent = document.querySelector('.navContent')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  navContent.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})