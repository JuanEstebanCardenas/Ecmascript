import hello from "../es6/module";
import hello from "../es6/module";

//object entries
const data = {
    frontened: 'oscar',
    backened: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//object values
const data = {
    frontened: 'oscar',
    backened: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//pad
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padend(7,'-----'));
console.log('food'. padEnd(12, ' -----'));


const obj = {
    name : 'oscar',
}

//async  y await
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ?setTimeout(()=> resolve ('hello World'), 3000)
        : reject (new Error('test error'))
    })
}
const  helloAsync = async ()=> {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();

//manejar errores dentro de funciones
const anotherFunction = async () =>{
    try {
        const hello =await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();

