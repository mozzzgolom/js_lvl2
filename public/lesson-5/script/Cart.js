export default class Cart  {
    _items = []

    constructor() {
      this.render()
  }

    add(item) {
      const existedItem = this._items.find(good => good._name === item.name)
      if (existedItem) {
          existedItem._quantity += item.quantity
      } else {
          this._items.push(new CartItem(item))
      }
      this.render()
  }

  render() {
    const block = document.querySelector('.table')
    if (block) {
        block.innerHTML = "<tr><td>Наименование</td><td>Кол-во</td><td>Цена</td><td>Сумма</td></tr>"
        console.log(block);
      }
    this._items.forEach(Good => {
        Good.render()
    })
}

const CartInstanse = new Cart()