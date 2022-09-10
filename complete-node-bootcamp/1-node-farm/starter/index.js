const fs = require('fs');
const http = require('http');
const { Server } = require('tls');


//! FILES

// Blocking, Synchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn)


const textOut = `Look at that: ${textIn}.\n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File created!')


// Unblocking, Asynchronous way

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) {
        return console.log('Error reading 👨🏻‍💻...')
    }
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        // console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            // console.log(data3);
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}` ,'utf-8', err => {
                // console.log('Your file has been written. 🤴🏻');
            })
        });
    });
});

// console.log('Will read file...');

//! SERVER

http.createServer((req, res) => {
    res.end('Hello from the Server');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has been started: on port 8000')
})