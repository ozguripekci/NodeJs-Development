const fs = require('fs');
const server = require('http').createServer();


server.on('request', (req, res) => {
    // Solution1:
/*     fs.readFile('test-file.txt', (err,data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    }); */


    // Solution2:
/*     const readable = fs.createReadStream('testr-file.txt');
    readable.on('data', chunk=> {
        res.write(chunk)
    })

    readable.on('end', () => {
        res.end();
    })

    readable.on('error', err => {
        console.log(err);
        res.statusCode = 500;
        res.end('File not found');
    }) */

    // Solution3:
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    // readableSource.pipe(writeableDestintion)
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...');
})
