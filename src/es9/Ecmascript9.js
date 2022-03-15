//all
const obj ={
    name: 'oscar',
    age: 32, 
    country: 'MX'
};

let {country, ...all } = obj;
console.log(country, all);



const obj1 = {
    ...obj,
    country: 'MX'
}
console.log(obj1);

const helloWorld = () =>{
    return new promise ((resolve, reject) => {
        (true)
        ? resolve('hello world')
        :reject(new Error('test error'))
    });
};

helloWorld ()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('finalizo'))

//regex
const regexData = /{([0-9]{4})-({[0-9]{2})-({[0-9]{2})}/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
