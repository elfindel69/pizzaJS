import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'
import { toppings } from './toppings.js'


var pizza = new Pizza('autre pizza', ['eggs'])

document.getElementById('toppings').innerHTML = pizza.allToppingsToHtml()
Array.prototype.slice.call(document.getElementsByClassName('topping'))
  .forEach(li => {
    li.addEventListener('dragstart', evt => {
      evt.dataTransfer.setData('text/html', li.dataset.topping)
    }, false)
  })

var pizzaArea = document.getElementById('pizza')

pizzaArea.addEventListener('dragenter', evt => {
  evt.preventDefault()
  evt.target.style.backgroundColor = 'red'
}, false)

pizzaArea.addEventListener('dragover', evt => {
  evt.preventDefault()
}, false)

pizzaArea.addEventListener('dragleave', evt => {
  evt.preventDefault()
  evt.target.style.backgroundColor = '#f5f5f5'
}, false)

pizzaArea.addEventListener('drop', evt => {
  evt.preventDefault()
  pizza.addTopping(evt.dataTransfer.getData('text/html'))
  evt.target.style.backgroundColor = '#f5f5f5'
  drawPizza()
}, false)

function drawPizza () {
  pizzaArea.innerHTML = pizza.toppings2string()
}
drawPizza()

var btnSave = document.getElementById('save')
btnSave.addEventListener('click', evt => {
  var input = document.getElementById('input')
  pizza.setName(input.value)
  pizzaList.addPizza(pizza).then(id => {
    return new Pizza(pizza.name, pizza.toppings, pizza.status).setId(pizza.id)
  }).then(pizza => createTableRow(pizza))
  var div = document.getElementById('container')
  div.style.display = 'none'
  div.style.visibility = 'hidden'
})

var pizzaList = new PizzaList()
// tableau des pizzas
var tabPizzas = document.getElementById('tabPizzas')
tabPizzas.style.border = '1px solid black'

createTableHeader()

// liste des pizzas
pizzaList.getPizzas()
// map : création des objets pizza
.then(pizzas => {
  return pizzas.map(pizza => {
    return new Pizza(pizza.name, pizza.toppings, pizza.status).setId(pizza.id)
  })
})
// affichage
.then(pizzas => pizzas.forEach(
  pizza => {
    createTableRow(pizza)
  }
))

// ajout des pizzas
document.getElementById('addPizza')
  .addEventListener('click', function (evt) {
    var div = document.getElementById('container')
    div.style.visibility = 'visible'
    div.style.display = 'block'
  }, false)

// fonction création header tableau
function createTableHeader () {
  // header
  var tabHeader = document.createElement('th')
  // affichage id
  tabHeader.appendChild(createTableCell('ID'))

  // nom
  tabHeader.appendChild(createTableCell('NOM'))

  // toppings
  tabHeader.appendChild(createTableCell('TOPPINGS'))

  // statut
  tabHeader.appendChild(createTableCell('STATUS'))

  tabPizzas.appendChild(tabHeader)
}

// fonction création ligne du tableau
function createTableRow (pizza) {
  // pizza
  var tr = document.createElement('tr')

  // affichage id
  tr.appendChild(createTableCell(pizza.id))

  // affichage nom
  tr.appendChild(createTableCell(pizza.name))

   // affichage liste toppings
  var toppings = pizza.toppings2string()
  tr.appendChild(createTableCell(toppings))

  // affichage statut
  var tdStatus = document.createElement('td')
  tdStatus.style.border = '1px solid black'
  if (pizza.status === 0) {
    tdStatus.innerHTML = 'RAW'
  } else if (pizza.status === 1) {
    tdStatus.innerHTML = 'COOKING'
  } else {
    tdStatus.innerHTML = 'COOKED'
  }
  tr.appendChild(tdStatus)

  // affichage bouton cook
  tr.appendChild(createTableCellButton('cook', evt => {
    // cuisson de la pizza
    pizza.cook(2000)
        .then((pizza) => {
          tdStatus.innerHTML = 'COOKED'
        })
        .catch(err => {
          window.alert(err)
          console.log(err)
        })
  }))

  // affichage bouton remove
  tr.appendChild(createTableCellButton('supprimer', evt => {
  // suppression de la pizza
    pizzaList.removePizza(pizza.id)
        .then((pizza) => {
          tr.remove()
        })
        .catch(err => {
          window.alert(err)
          console.log(err)
        })
  }))
  tabPizzas.appendChild(tr)
}

function createTableCell (name) {
  var td = document.createElement('td')
  td.style.border = '1px solid black'
  td.innerHTML = name
  return td
}

function createTableCellButton (name, callback) {
  var td = document.createElement('td')
  var btn = document.createElement('button')
  btn.innerHTML = name
  btn.addEventListener('click', callback)
  td.appendChild(btn)
  return td
}
