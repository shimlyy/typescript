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