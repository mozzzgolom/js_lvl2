const path = require('path')

module.exports = {
    entry: './src/shop.js',
    output: {
        path: path.resolve(__dirname, 'public/script'),
    }
}