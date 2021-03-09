export default class GoodItem {
    // _name = ''
    // _price = 0
    // _img = 0
    // _CartInstane = null
  
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