document.addEventListener('click', e => {
  let element = e.target

  if (element.classList.contains('heart-icon')) {
    element.classList.toggle('active')
  }
})
