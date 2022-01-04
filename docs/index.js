const op = document.getElementById('open')
const cl = document.getElementById('close')
const b = document.getElementById('block')


op.addEventListener('click', () => {
    op.style.display = 'none'
    cl.style.display = 'block'
    b.classList.add('active')
})

cl.addEventListener('click', () => {
    op.style.display = 'block'
    cl.style.display = 'none'
    b.classList.remove('active')
})