import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'

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
    var newPizza = new Pizza('test', ['eggs', 'mushrooms'])
    pizzaList.addPizza(newPizza).then(id => {
      return new Pizza(newPizza.name, newPizza.toppings, newPizza.status).setId(newPizza.id)
    }).then(pizza => createTableRow(pizza))
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
