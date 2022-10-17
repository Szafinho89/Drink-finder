const search = document.querySelector('.search')
const li = document.querySelectorAll('li')


const searchEngine = () => {
    li.forEach(el => {
        const match = new RegExp(search.value, 'i').test(el.textContent) //flaga i mowi ze ingorujemy wielkosc znaków
        
        if (!match) {
            el.style.display= 'none'
        } else {
            el.style.display= 'block'
        }
    })
}

search.addEventListener('keyup', searchEngine)

