const search = document.querySelector('.search')
const li = document.querySelectorAll('li')
console.log(li);

const searchEngine = (e) => {
    let text = (e.target.value.toLowerCase());

    li.forEach(el => {
        el.classList.remove('show', 'hide')
        if(el.textContent.toLowerCase().indexOf(text) === -1) {
            // console.log(el.textContent);
            el.classList.add('hide')
        } else {
            // console.log(el.textContent);
            el.classList.add('show')
        }
        // const newLi = document.getElementsByTagName('li')
        // console.log(newLi);
    })
}


search.addEventListener('keyup', searchEngine)