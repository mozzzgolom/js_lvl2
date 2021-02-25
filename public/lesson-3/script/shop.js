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
      const url = 'http://localhost:4000/lesson-3/database/items.json';
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
      this._CartInstane.add(this)
      console.log('Added!', this._name)
    }
  
    render () {
      const placeToRender = document.querySelector('.goods-list')
      if (placeToRender) {
        const block = document.createElement('div')
        block.innerHTML = `
          Товар: ${this._name} = ${this._price}
          <img src="${this._img}" />
        `
        const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
        btn.render(block)
  
        placeToRender.appendChild(block)
      }
    }
  }

// class Cart  {
//     _items = []

//     set cartItems(value) {
//         this._items = value
//         this.totalOutput.innerHTML = `<h2>Сумма: \$${this.total.toFixed(
//           2
//         )}</h2>`
//     }
    
//     get total() {
//         const sum = this._items.reduce(
//           (prevValue, curItem) => prevValue + curItem._price,
//           0
//         );
//         return sum
//       }

//     add(GoodItem) {
//         new CartItem ()

//         const updatedItems = [...this._items]
//         updatedItems.push(GoodItem)
//         this._Items = updatedItems
//     }

//     render () {
//         this._items.forEach(Good => {
//             Good.render()
//         })
//     }
// }

// class CartItem extends GoodItem { //можно наследоваться от гудайтем и поменять метод рендер
//     constructor ({ name, price }, CartInstanse) {
//         super ()
//         // this._name = name
//         // this._price = price
//         // this._CartInstanse = CartInstanse
//     }

    

//     render () {
//         const placeToRender = document.querySelector('.cart')
//         if (placeToRender) {
//             const block = document.createElement('div')
//             block.innerHTML = `Товар ${this._name} = ${this._price}`
//     }
// }

// const CartInstanse = new Cart()

new List ()