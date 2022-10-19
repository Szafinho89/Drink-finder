const search = document.querySelector('.search')
const li = document.querySelectorAll('li')
console.log(li);

const searchEngine = (e) => {
    let text = (e.target.value.toLowerCase());

    li.forEach(el => {
        el.classList.remove('show', 'hide')

        if(el.textContent.toLowerCase().includes(text)) {
            el.classList.add('show')
        } else {
            el.classList.add('hide')
        }

    })
}

search.addEventListener('keyup', searchEngine)