let content = document.querySelector('.main')
let search = document.querySelector('.search')
let material = content.children


//funcao que pega o valor recebido a cada tecla pressionada no input de busca
function searchArticle(article) {
  //aqui é um contato que vai rodar para o tanto de artigos que tem no "main", pense como se fosse uma pagina de uma revista e suas materias
  for (let i = 0; i < material.length; i++) {
    //aqui pego todo o conteudo dessas materias e boto todos em letra maiuscula
    let text = material[i].textContent.toUpperCase()
 // aqui é a condicao que vai deixar ou nao n tela, se incluir tal coisa, mantem, caso n tira
    if (text.includes(article)) {
      //aqui ele ta pecorrendo cada materia e buscando o valor a cima, se tiver, vai remover o "hide",que e uma classe no CSS que tira o elemento da tela
      material[i].classList.remove('hide')
    } else {
      //caso n tenha, vai adicionar o hide e tirar da tela
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
