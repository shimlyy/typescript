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

//for...in  / for...of
let list=[10,100,1000];
for(let w in list){
    console.log(w) // "0", "1", "2",
}
for(let w of list){
    console.log(w) // "4", "5", "6"
}

//--------------------------------------------
let pets:string = new Set(["Cat", "Dog", "birld"]);
pets["species"]="liu";

for(let l in pets){
    console.log(l); // "species"
}
for(let l of pets){
    console.log(l); // "Cat", "Dog", "Hamster"
}