import { toppings as authorizedToppings } from './toppings.js'

export class Pizza {

  constructor (name, toppings = []) {
    this.name = name
    this.toppings = toppings
  }

  setName (name) {
    this.name = name
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
}
