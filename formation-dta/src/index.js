// import { Pizza } from './pizza.js'
// import { PizzaList } from './pizza-list.js'

// var pizza = new Pizza('toto')
// var pizzas = new PizzaList()

// pizza.setName('4 fromages')
//   .addTopping('salami')
//   .addTopping('ketchup')
//   .addTopping('onion')
//   .addTopping('green olives')
//   .addTopping('mushrooms')
//   .removeTopping('green olives')
//   .addTopping('mushrooms')
//   .addTopping('mushrooms')
//   .addTopping('mushrooms')
//   .addTopping('mushrooms')
//   .addTopping('eggs')
// console.log(pizza)
// console.log(pizza.toppings2string())

// pizzas.addPizza(pizza)
// pizzas.addPizza(new Pizza('egg').addTopping('eggs'))

// console.log(pizzas.with('eggs'))

// const h1 = document.createElement('h1')
// h1.innerHTML = 'Pizzas'

// const ul = document.createElement('ul')
// pizzas.pizzas.forEach(pizza => {
//   const li = document.createElement('li')
//   li.innerHTML = pizza.name
//   ul.appendChild(li)
// })
// document.body.appendChild(h1)
// document.body.appendChild(ul)

// function getAvg (array) {
//   return array.reduce((acc, cv, idx, arr) => acc + cv / arr.length, 0)
// }

// fetch('users.json')

//   // tranforme la réponse http en json
//   .then((response) => {
//     if (!response.ok) throw Error(response.status)
//     return response.json()
//   })

//   // transforme la liste des users en liste d'ages
//   .then(users => {
//     return users.map(user => {
//       if (!user.age) throw Error('age not found')
//       return user.age
//     })
//   })

//   // calculer la moyenne des ages
//   .then(ages => {
//     return getAvg(ages)
//   })

//   // affichage du résultat
//   .then(age => {
//     console.log('moyenne des âges', age)
//   })

//   .catch(err => {
//     console.log('ERRR', err)
//   })

// Promise(User)
// function getUser (api) {
//   return fetch(api).then((response) => {
//     if (!response.ok) throw Error(response.status)
//     return response.json()
//   })
// }

// Promise.all([getUser('/user1.json'), getUser('/user2.json')])
// .then(users => {
//   console.log(users)
//   return users.map(user => {
//     if (!user.age) throw Error('age not found')
//     return user.age
//   })
// })
// .then(ages => {
//   return getAvg(ages)
// })
// // affichage du résultat
// .then(age => {
//   console.log('moyenne des âges', age)
// })

let cacheOfUsers = null

function getUsers () {
  console.log(cacheOfUsers)

  // si cache existe l'utiliser
  if (cacheOfUsers) return Promise.resolve(cacheOfUsers)
  
  // sinon faire la requête et mettre en cache
  return fetch('users.json')
    // tranforme la réponse http en json
    .then((response) => {
      if (!response.ok) throw Error(response.status)
      return response.json()
    })
    .then(users => {
      cacheOfUsers = users
      return users
    })
}

getUsers()
 .then(users => {
   console.log('1', users)
 })

setTimeout(function () {
  getUsers()
  .then(users => {
    console.log('2', users)
  })
}, 2000)
