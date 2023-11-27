let content = document.querySelector('.main')
let search = document.querySelector('.search')
let material = content.children

function searchArticle(article) {
  for (let i = 0; i < material.length; i++) {
    let text = material[i].textContent.toUpperCase()

    if (text.includes(article)) {
      material[i].classList.remove('hide')
    } else {
      material[i].classList.add('hide')
    }
  }
}

document.addEventListener('click', e => {
  let element = e.target
  if (element.classList.contains('heart-icon')) {
    element.classList.toggle('active')
  }
})

search.addEventListener('keydown', () => {
  let article = search.value.toUpperCase()
  searchArticle(article)
})
