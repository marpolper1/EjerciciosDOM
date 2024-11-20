//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".//

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const array = document.querySelector('[data-function="printHere"]')
const ul = document.createElement('ul')

places.forEach((place) => {
  const li = document.createElement('li')
  li.textContent = place
  ul.appendChild(li)
})

array.appendChild(ul)
