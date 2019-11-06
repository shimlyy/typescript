//Symbol
var getClassNameSymbol = Symbol();
var C = (function () {
    function C() {
    }
    C.prototype[getClassNameSymbol] = function () {
        return "C";
    };
    return C;
})();
var c = new C();
var className = c[getClassNameSymbol]();
console.log(c);
