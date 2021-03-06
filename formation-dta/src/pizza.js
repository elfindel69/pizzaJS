import { toppings as authorizedToppings } from './toppings.js'
export const STATUS = {
  RAW: 0,
  COOKING: 1,
  COOKED: 2
}

export class Pizza {

  constructor (name, toppings = [], status = STATUS.RAW) {
    this.name = name
    this.toppings = toppings
    this.status = status
  }

  setName (name) {
    this.name = name
    return this
  }

  setId (id) {
    this.id = id
    return this
  }

  addTopping (topping) {
    // only authorized toppings
    if (Object.keys(authorizedToppings).indexOf(topping) === -1) return this

    // 2 identical toppings max
    if (this.toppings.filter(t => t === topping).length > 1) return this

    this.toppings.push(topping)

    return this
  }

  removeTopping (topping) {
    const pos = this.toppings.indexOf(topping)
    if (pos !== -1) {
      this.toppings.splice(pos, 1)
    }
    return this
  }

  cook (time = 1000) {
    return new Promise((resolve, reject) => {
      if (this.status === STATUS.COOKING) return reject('Pizza en cours de cuisson')
      if (this.status === STATUS.COOKED) return reject('Pizza déjà cuite')

      this.status = STATUS.COOKING
      setTimeout(() => {
        this.status = STATUS.COOKED
        resolve(this)
      }, time)
    })
  }

  translate (topping, lang = 'en') {
    return authorizedToppings[topping][lang] || topping
  }

  toppings2string (lang = 'en') {
    return this.toppings

      // uniqs
      .reduce((acc, topping) => {
        if (acc.indexOf(topping) === -1) acc.push(topping)
        return acc
      }, [])

      // topping (translated (nb))
      .map(topping => {
        const size = this.toppings.filter(item => item === topping).length
        if (size > 1) return `${this.translate(topping, lang)} x${size}`
        return `${this.translate(topping, lang)}`
      })
      .join(', ')
  }

  allToppingsToHtml () {
    return `
      <ul class="list-group">
      ${Object.keys(authorizedToppings)
        .map(topping => `
          <li data-topping="${topping}" draggable="true" class="topping list-group-item" style="cursor:move">${this.translate(topping)}</li>
        `).join('')}
      </ul>`
  }
}
