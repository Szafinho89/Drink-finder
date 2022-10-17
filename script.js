const search = document.querySelector('.search')
const li = document.querySelectorAll('li')


const searchEngine = (e) => {

    li.forEach(el => {
        const text = e.target.value.toLowerCase()
        const contentLi = el.textContent.toLowerCase()


        if (contentLi.indexOf(text) !== -1) {
            el.style.display= 'block'
        } else {
            el.style.display= 'none'
        }
    })
}


// Alternative solution:

// const searchEngine2 = () => {
//     const text = search.value.toLowerCase()

//     for (let el of li) {
//         const contentLi = el.textContent.toLowerCase()
//         if (contentLi.indexOf(text) !== -1) {
//             el.style.display= 'block'
//         } else el.style.display= 'none'
//         }
// }


search.addEventListener('keyup', searchEngine)