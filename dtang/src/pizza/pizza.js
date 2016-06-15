export class Pizza {
  constructor ({name, toppings = [], status = 0}) {
    this.name = name
    this.toppings = toppings
    this.status = status
  }

  toppings2string () {
    if (!this.toppings) return ''
    return this.toppings

      // uniqs
      .reduce((acc, topping) => {
        if (acc.indexOf(topping) === -1) acc.push(topping)
        return acc
      }, [])

      // topping (translated (nb))
      .map(topping => {
        const size = this.toppings.filter(item => item === topping).length
        if (size > 1) return `${topping} x${size}`
        return `${topping}`
      })
      .join(', ')
  }

  addTopping (topping) {
    // only authorized toppings
   // if (Object.keys(authorizedToppings).indexOf(topping) === -1) return this

    // 2 identical toppings max
    if (this.toppings.filter(t => t === topping).length > 1) return this

    this.toppings.push(topping)

    return this
  }

  json () {
    return {
      name: this.name,
      toppings: this.toppings,
      status: this.status
    }
  }
}
