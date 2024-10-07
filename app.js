

const username = document.getElementById('nombre')
const data1 = document.getElementById('nota1')
const data2 = document.getElementById('nota2')
const data3 = document.getElementById('nota3')
const btnCalculate = document.getElementById('btn-calculate')
const response = document.getElementById('resultado')
const conexionBoton = document.getElementById('predictbtn')

btnCalculate.addEventListener('click', calculateNote)
conexionBoton.addEventListener('click', calculateNote)


function calculateNote(event) {

  event.preventDefault()

  let note1 = Number(data1.value)
  let note2 = Number(data2.value)
  let note3 = Number(data3.value)

  if (note1,note2,note3 <1 || note1,note2,note3 >5) {
    response.textContent = `por favor ingrese un numero entre 1 y 5 `
    response.style.color = 'red'
   return
  }


  let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)
  // template string o template literal
  response.style.color = 'green'
  response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result}`

  if (result < 3.5) {
    response.style.color = `black`
    response.textContent = `SR/SRA/SRE ${username.value} usted perdio la materia: ${result}`

  } else if (result >= 3.5 && result <= 4.5) {
    response.style.color = `orange`
    response.textContent = `SR/SRA/SRE ${username.value} usted gano la materia: ${result}`

  } else if (result > 4.5) {
    response.style.color = `green`
    response.textContent = `SR/SRA/SRE ${username.value} usted tuvo una nota sobresaliente: ${result}`
  }
}


predictbtn = document.querySelector('#predictbtn')
predictbtn.addEventListener('click', predict)


function predict() {
  let note1 = Number(data1.value)
  let note2 = Number(data2.value)
  let note3 = Number(data3.value)


  if (note1,note2 <1 || note1,note2 >5) {
    response.textContent = `por favor ingrese un numero entre 1 y 5 `
    response.style.color = 'red'
   return
  }

  result = ((3.5 - (note1 * 0.3 + note2 * 0.3)) / 0.4).toFixed(2)
  
  response.textContent = `SR/SRA/SRE ${username.value} la nota minima para ganar la materia es : ${result}`


  
}









