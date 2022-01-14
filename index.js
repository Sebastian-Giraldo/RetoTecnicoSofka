/*import { saveUser } from './firebase.js'

window.addEventListener('DomContentLoaded', () => {
    console.log("hola")
})

const userName = document.getElementById('task-form')

userName.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = userName['nombre']

    saveUser(nombre.value)
})*/
console.log("funciona1")

window.addEventListener('DOMContentLoaded', () => {

    console.log("funciona2")


})


export const userForm = document.getElementById('quiz')

userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = userName['nombre']

    saveUser(nombre.value)
})

