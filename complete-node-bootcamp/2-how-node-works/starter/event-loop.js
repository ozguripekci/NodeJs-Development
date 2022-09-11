const fs = require('fs')
const crypto = require('crypto')

const start = Date.now();

//! Thread pool size degistirme, 2 islemia yni zamanda yapar
process.env.UV_THREADPOOL_SIZE = 3

setTimeout(() => console.log('Timer 1 finished!'), 0);
setImmediate(() => console.log('Imeediate 1 finished'));
process.nextTick(() => console.log('process.nextTick 1'))

fs.readFile('text-file.txt', () => {
    console.log('I/O completed.');
    console.log('-----------------------------');

    setTimeout(() => console.log('Timer 2 finished!'), 0);
    setTimeout(() => console.log('Timer 3 finished!'), 3000);
    setImmediate(() => console.log('Imeediate 2 finished'));

    process.nextTick(() => console.log('process.nextTick 2'))

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha256', () => {
        console.log(Date.now() - start, 'Password encrypted');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha256', () => {
        console.log(Date.now() - start, 'Password encrypted');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha256', () => {
        console.log(Date.now() - start, 'Password encrypted');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha256', () => {
        console.log(Date.now() - start, 'Password encrypted');
    })

})

console.log('Hello from the top-level code!');