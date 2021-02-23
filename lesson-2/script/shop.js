class List {
    _items = []

    constructor (CartInstanse) {
        let goods = this.fetchGoods ()
        goods = goods.map(item => {
            return new GoodItem(item, CartInstanse)
        })
        this._items = goods
        this.render()
    }

    fetchGoods () {
        return [
            { name: "jacket", price: 100, img: '/img/img.png' },
            { name: "T-Short", price: 200, img: '/img/img.png' },
            { name: "Socks", price: 300, img: '/img/img.png' },                     
        ]
    }

    render () {
        this._items.forEach(Good => {
            Good.render()
        })
    }
}

class GoodItem {
    _name = ""
    _price = 0
    _img = 0
    _CartInstanse = null

    constructor ({ name, price, img }, CartInstanse) {
        this._name = name
        this._price = price
        this._img = img
        this._CartInstanse = CartInstanse
    }

    addToCart () {
        this._CartInstanse.add(this)
        console.log('added!', this._name)
    }

    render () {
        const placeToRender = document.querySelector('.goods-list')
        if (placeToRender) {
            const block = document.createElement('div')
            block.classList.add('card')
            block.innerHTML = `<img src="${this._img}" /> Товар ${this._name} = ${this._price}
            
            `
            const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
            btn.render(block)
            placeToRender.appendChild(block)
        }
    }
}

class Cart  {
    _items = []

    set cartItems(value) {
        this._items = value
        this.totalOutput.innerHTML = `<h2>Сумма: \$${this.total.toFixed(
          2
        )}</h2>`
    }
    
    get total() {
        const sum = this._items.reduce(
          (prevValue, curItem) => prevValue + curItem._price,
          0
        );
        return sum
      }

    add(GoodItem) {
        new CartItem ()

        const updatedItems = [...this._items]
        updatedItems.push(GoodItem)
        this._Items = updatedItems
    }

    render () {
        this._items.forEach(Good => {
            Good.render()
        })
    }
}

class CartItem extends GoodItem { //можно наследоваться от гудайтем и поменять метод рендер

    constructor ({ name, price }, CartInstanse) {
        super ()
        // this._name = name
        // this._price = price
        // this._CartInstanse = CartInstanse
    }

    

    render () {
        const placeToRender = document.querySelector('.cart')
        if (placeToRender) {
            const block = document.createElement('div')
            block.innerHTML = `Товар ${this._name} = ${this._price}`
    }
}

const CartInstanse = new Cart()

new List (CartInstanse)