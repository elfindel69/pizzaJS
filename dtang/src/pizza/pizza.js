export class Pizza {
  constructor ({id, name, toppings = [], status = 0}) {
    this.id = id
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
    // 2 identical toppings max
    if (this.toppings.filter(t => t === topping).length > 1) return this

    this.toppings.push(topping)

    return this
  }


  removeTopping (id) {
    this.toppings.splice(id, 1)
    return this
  }

  json () {
    return {
      id: this.id,
      name: this.name,
      toppings: this.toppings,
      status: this.status
    }
  }
}
