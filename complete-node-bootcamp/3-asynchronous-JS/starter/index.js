const fs = require('fs');
const superagent = require('superagent')

const readFilePro= file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject('File is not Found!')
            }
            resolve(data);
        })
    })
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('Data is not Found!')
            resolve('Success...');
        })
    })
}

const getDogPic = async () => {

    try {
        const data = await readFilePro(`${__dirname}/dog.txt`)
        console.log(`Breed: ${data}`);
    
        const res1Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
        const res2Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
        const res3Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
        const all = await Promise.all([res1Pro, res2Pro, res3Pro])
        const imgs = all.map(el => el.body.message)
        console.log(imgs);
    
        await writeFilePro('dog-image.txt', imgs.join('\n'));
        console.log('Random dog image was successfully saved');
        
    } catch (err) {
        console.log(err);
        throw(err);
    }
    return '2:Ready🌝'

}

(async() => {
    try {
        console.log('1: Will get dog pics!');
        const x = await getDogPic();
        console.log(x);
        console.log('3:DONE');

    } catch (err) {
        console.log('Error 🔥');
    }
})();




/* console.log('1: Will get dog pics!');
getDogPic()
    .then(x => {
        console.log(x);
        console.log('3:DONE');
    })
    .catch(err => {
        console.log('Error 🔥');
    })
 */


/* readFilePro(`${__dirname}/dog.txt`)
    .then(data => {
    console.log(`Breed: ${data}`);

    return superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    })
    .then( res => {
        console.log(res.body.message);
        return writeFilePro('dog-image.txt', res.body.message)
    })
    .then(()=> {
        console.log('Random dog image was successfully saved');
    })
    .catch( err => {
        console.log(err);
    });
 */




