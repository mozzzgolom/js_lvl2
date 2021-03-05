class List {
    _items = []
    preloading = false
  
    constructor (CartInstane) {
      this.fetchGoods()
        .then(res => {
          return res.json()
        })
        .then(data => {
          this.preloading = false
          const goods = data.data.map(item => {
            return new GoodItem(item, CartInstane)
          })
          this._items = goods
          return this._items
        })
        .then(this.render.bind(this));
    }
  
    fetchGoods () {
      this.preloading = true
      // const url = 'http://localhost:4000/database/items.json';
      const url = 'https://mozzzg.herokuapp.com/database/items.json';
      return fetch(url);
    }
  
    render () {
      this._items.forEach(Good => {
        Good.render()
      })
    }
  }
  
  class GoodItem {
    _name = ''
    _price = 0
    _img = 0
    _CartInstane = null
  
    constructor ({ name, price, img }, CartInstane) {
      this._name = name
      this._price = price
      this._img = img
      this._CartInstane = CartInstane
    }
  
    addToCart () {
      this._CartInstane.add({ name: this._name, price: this._price, quantity: 1 })
      // console.log('Added!', this._name)
    }
  
    render () {
      const placeToRender = document.querySelector('.goods-list')
      if (placeToRender) {
        const block = document.createElement('div')
        block.classList.add('card')
        block.innerHTML = `
          <img src="${this._img}" />
          Товар: ${this._name} = ${this._price}
          
        `
        const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
        btn.render(block)
  
        placeToRender.appendChild(block)
      }
    }
  }

class Cart  {
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
}

class CartItem {
    _name = ''
    _price = 0
    _quantity = 1
    constructor ({ name, price, quantity }) {
       
        this._name = name
        this._price = price
        this._quantity = quantity
    }

    

    render() {
      const placeToRender = document.querySelector('.table')
      const block = document.createElement('tr')
      block.classList.add('row')
      block.innerHTML = `<tr><td>${this._name}</td><td>${this._quantity}</td><td>${this._price}</td><td>${this._price * this._quantity}</td></tr>`
      placeToRender.appendChild(block)
  }
}

const CartInstanse = new Cart()
List.instanceCount = 0
new List (CartInstanse)