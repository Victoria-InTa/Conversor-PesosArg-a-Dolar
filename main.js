let pesoArg = document.querySelector('#pesoArg')
let dolar = document.querySelector('#Dolar')
let btn = document.querySelector('#btn')
let resultado = document.querySelector('#resultado')


btn.addEventListener('click',()=>{
    let dolar_1 = 200
    let pesoArg = document.querySelector('#pesoArg').value*dolar_1
    resultado.innerHTML =  pesoArg +='$'

})








//ecuación se da dividiendo el valor del peso sobre el dólar