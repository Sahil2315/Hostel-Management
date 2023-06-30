let admbars = document.getElementById('admbars')
let admnav = document.getElementById('admnav')

let toggle = 1

admbars.addEventListener('click', () => {
  if (toggle == 1) {
    admnav.style.display = 'block'
    admnav.style.height = '250px'
    admnav.style.overflowY = 'hidden'
    toggle = 0
  }
  else {
    admnav.style.display = 'none'
    admnav.style.height = '83vh'
    admnav.style.overflowY = 'visible'
    toggle = 1
  }
})