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
var someArray = [1, "string", false];
for (var _i = 0; _i < someArray.length; _i++) {
    var entry = someArray[_i];
    console.log(entry);
}
//for...in  / for...of
var list = [10, 100, 1000];
for (var w in list) {
    console.log(w); // "0", "1", "2",
}
for (var _a = 0; _a < list.length; _a++) {
    var w = list[_a];
    console.log(w); // "4", "5", "6"
}
//--------------------------------------------
var pets = new Set(["Cat", "Dog", "birld"]);
pets["species"] = "liu";
for (var l in pets) {
    console.log(l); // "species"
}
for (var _b = 0; _b < pets.length; _b++) {
    var l = pets[_b];
    console.log(l); // "Cat", "Dog", "Hamster"
}
