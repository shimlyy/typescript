import Validator from "./ZipCodeValidator";
import validate from "./StaticZipCodeValidator";

let myValidator = new Validator();

string.forEach(s => {
    console.log(`"${s}" ${validate(s) ? "matches": "dose not match"}`);
});