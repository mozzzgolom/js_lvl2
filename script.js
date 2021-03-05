const http = require('http');
const fs = require('fs');
 


const server = http.createServer(function(req, res) { 
    let body = null
    try {
        const ext = req.url.split('.')[1] //разбиваем строку по точке(/img/logo.svg) и берем второй элеимент массива
        const isSvg = ext === 'svg'; // првоеряем что после точки у нас стоит нужное расширение
        if (isSvg) {
            res.setHeader('Content-Type', 'image/svg+xml'); // присваиваем нужный тип файлу
        }
        body = fs.readFileSync(`./public/lesson-4${req.url}`) 
    } catch (err) {
        body = fs.readFileSync('./public/lesson-4/index.html')
    }

    res.end(body);
   
});

server.listen(process.env. PORT || 4000)

console.log('Server started')


