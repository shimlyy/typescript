//Symbol
const getClassNameSymbol=Symbol();
class C{
    [getClassNameSymbol](){
        return "C";
    }
}
let c = new C();
let className = c[getClassNameSymbol]();
console.log(className)