//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.//

const list = document.createElement('ul')
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

albums.forEach((texto) => {
  const li = document.createElement('li')
  li.textContent = texto
  list.appendChild(li)
})

document.body.appendChild(list)
