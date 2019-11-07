var lettersRegexp = /^[A-Za-z]+$/;
var LeetersOnlyValidator = (function () {
    function LeetersOnlyValidator() {
    }
    LeetersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LeetersOnlyValidator;
})();
exports.LeetersOnlyValidator = LeetersOnlyValidator;
