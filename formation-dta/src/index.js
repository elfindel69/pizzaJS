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
  var tdId = document.createElement('td')
  tdId.style.border = '1px solid black'
  tdId.innerHTML = 'ID'
  tabHeader.appendChild(tdId)

  // nom
  var headerName = document.createElement('td')
  headerName.style.border = '1px solid black'
  headerName.innerHTML = 'NOM'
  tabHeader.appendChild(headerName)

  // toppings
  var headerToppings = document.createElement('td')
  headerToppings.style.border = '1px solid black'
  headerToppings.innerHTML = 'TOPPINGS'
  tabHeader.appendChild(headerToppings)

  // statut
  var headerStatus = document.createElement('td')
  headerStatus.style.border = '1px solid black'
  headerStatus.innerHTML = 'STATUS'
  tabHeader.appendChild(headerStatus)

  tabPizzas.appendChild(tabHeader)
}

// fonction création ligne du tableau
function createTableRow (pizza) {
  // pizza 
  var tr = document.createElement('tr')

  // affichage id
  var tdName = document.createElement('td')
  tdName.style.border = '1px solid black'
  tdName.innerHTML = pizza.id
  tr.appendChild(tdName)

  // affichage nom
  var tdName = document.createElement('td')
  tdName.style.border = '1px solid black'
  tdName.innerHTML = pizza.name
  tr.appendChild(tdName)

   // affichage liste toppings
  var tdToppings = document.createElement('td')
  tdToppings.style.border = '1px solid black'
  tdToppings.innerHTML = pizza.toppings2string()
  tr.appendChild(tdToppings)

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
  var tdCook = document.createElement('td')
  tdCook.style.border = '1px solid black'
  var btnCook = document.createElement('button')
  btnCook.innerHTML = 'cook'
  btnCook.addEventListener('click', evt => {
    // cuisson de la pizza
    pizza.cook(2000)
        .then((pizza) => {
          tdStatus.innerHTML = 'COOKED'
        })
        .catch(err => {
          window.alert(err)
          console.log(err)
        })
  })
  tdCook.appendChild(btnCook)
  tr.appendChild(tdCook)

  tabPizzas.appendChild(tr)

  // affichage bouton remove
  var tdRemove = document.createElement('td')
  tdCook.style.border = '1px solid black'
  var btnRemove = document.createElement('button')
  btnRemove.innerHTML = 'supprimer'
  btnRemove.addEventListener('click', evt => {
  // suppression de la pizza
    pizzaList.removePizza(pizza.id)
        .then((pizza) => {
          tr.remove()
        })
        .catch(err => {
          window.alert(err)
          console.log(err)
        })
  })
  tdRemove.appendChild(btnRemove)
  tr.appendChild(tdRemove)

  tabPizzas.appendChild(tr)
}
