//anterior forma de hacer una funcion
function newFunction(name, age, country){
    var name = name || 'oscar'
    var age = age || 32;
    var country = country || 'COL';
    console.log(name, age, country);
}

// forma ecmascript de hacer un a funcion
function newFunction2(name = 'oscar', age = 32, country = 'COL'){
    console.log(name, age , country);
};


newFunction2();
newFunction2('Ricardo', '23', 'COL');
//forma normal
let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world ;
console.log(epicPhrase);

//forma ecmascript 6
epicPhrase2 = `${hello} ${world}`;
console.log = (epicPhrase2);

//forma normal multilinea
let lorem = "qui conseguatur. commofi. ipsum vel duis yet minima \n" 
+ "otra frase epica ";

//forma ecmascript multilinea
let lorem2 = `otra frace que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);
 

//forma normal de un objeto
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'

}
//forma normal de un objeto
console.log(person.name, person.age);

//forma Ecmascript un objeto
let {name, age , country} = person;
console.log(name, age, country);

//forma ecmascript de anadir array a otro array
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ... team1, ...team2];
console.log (education);

 // variable en var en forma normal
{
    var globalVar = " global var";
}
console.log(globalVar)

// variable en Let en forma ecmascript
{
    let globalLet = 'global Let';
    console.log(globalLet)
}


const a = 'b';
a = 'a';
console.log(a)


let name = 'oscar';
let age = 32;
//antigua forma de crear un objeto
obj = {name: name, age : age};

//FORMA ecmascript de un objeto
obj2 = {name , age};
console.log(obj2);

//arrow functions
const names = [
    {name : 'oscar', age: 32},
    {name : 'Yesicsa', age: 27}
]
 //antigua forma arrow functions(anonimas)
let listOfNames = names.map(function(item){
    console.log(item.name);
})
 // forma ecmascript de arrow functions
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    
}

const listOfNames4 = name =>{

}

const square = num => num * num;


const helloPromise = () => {
    return new Promise ((resolve, reject) =>{
        if (true){
            resolve('hey');
        }
        else{
            reject('ups');
        }
    })
}

helloPromise()
.then(Response => console.log(Response))
.catch(error => console.log(error));

//forma ecmascript de clases
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//modulos, importar
import {hello} from './module'
hello();

//Generadores
function helloWorld (){
    if (true) {
        yield 'hello, ';
    }
    if(true){
        yield 'world'
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)


