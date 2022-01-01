
const http = require('http')
const fs = require('fs')
const path = require('path')


http.createServer((req, res) => {

    var file;
    if(req.url === '/cadastrarparticipante')
        file = 'cadastrarparticipante.html';
    else if(req.url === '/consultarmilhas')
        file = 'consultarmilhas.html';
    else if(req.url === '/cadastrarmilhas')
        file = 'cadastrarmilhas.html';

    const filePath = path.join(__dirname, 'public', file)
    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(item => item == extname)

    if(!allowed) return

    fs.readFile(
        filePath,
        (err, content) => {
            if(err) throw err

            res.end(content)
        }
    )
}).listen(5000 || process.env.PORT, () => console.log('Server is running'))
