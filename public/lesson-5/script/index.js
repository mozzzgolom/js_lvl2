import GoodItem from './GoodItem.js'

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
      const url = 'http://localhost:4000/database/items.json';
      // const url = 'https://mozzzg.herokuapp.com/database/items.json';
      return fetch(url);
    }
  
    render () {
      this._items.forEach(Good => {
        Good.render()
      })
    }
  }

List.instanceCount = 0
new List (CartInstanse)