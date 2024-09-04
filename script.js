const list = document.querySelectorAll('.item')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

const count = list.length
let active = 0

next.onclick = () => {
    const activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
    
    active = active === count - 1 ? 0 : active + 1
    list[active].classList.add('active')
}

prev.onclick = () => {
    const activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
    
    active = active === 0 ? count - 1 : active - 1
    list[active].classList.add('active')
}
