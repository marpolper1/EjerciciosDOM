//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click//

const button = document.createElement('button')
button.id = 'btnToClick'

button.addEventListener('click', (e) => console.log(e))
document.body.appendChild(button)

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.//

const focusInput = document.querySelector('.focus')

focusInput.addEventListener('focus', function () {
  console.log(focusInput.value)
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.//

const valueInput = document.querySelector('.value')

valueInput.addEventListener('valueInput', function () {
  console.log(valueInput.value)
})
