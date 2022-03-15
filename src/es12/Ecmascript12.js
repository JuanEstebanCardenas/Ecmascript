//remplazar algo en el string
const string = "JavaScript es maravilloso, con JavaScript puedo crear el fututro de la web";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//metodos privados, volver privado un recurso (#)
class Message{
    #show(val){
        console.log(val)
    };
    
}

const message = new Message();
message.show('hola!')

// Promise.Any ,capturar array de respuestas, captura la primera que sea correcta
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.Any([promise1, promise2, promise3 ])
.then(response => console.log(response));


//weak ref,  no permite que referancia debil sea recogido por la basura de JS para ahorar memoria

class anyClass  {
    constructor(element){
        this.ref     = new WeakRef(element)
    }
    
}

//nuevos operadores
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ??= isFalse2);