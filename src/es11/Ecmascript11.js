//forma para llamar funcion en boton o de un elemento de html
const button = document.getElementById("btn");

button.addEventListener("click", async function (){
    const module = await import("./file.js");
    module.hello();
});

//formas de poner un valor muy alto
const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise.allsettled
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allsettled([promise1, promise2, promise3])
.then(response => console.log(response));

//globalThis, acceder al global desde el node
console.log(window);
console.log(globalThis);


//nulo o null ??
const fooo = 'asd' ?? 'default string';
console.log(fooo);

//optional chaning para que no se rompa el codigo
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}
