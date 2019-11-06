//Symbol
// const getClassNameSymbol=Symbol();
// class C{
//     [getClassNameSymbol](){
//         return "C";
//     }
// }
// let c = new C();
// let className = c[getClassNameSymbol]();

//-----------------------------------------
let someArray = [1,"string",false];
for (let entry of someArray){
    console.log(entry);
}

let list=[10,100,1000];
for(let w in list){
    console.log(w)
}
for(let w of list){
    console.log(w)
}