import { StringValidator } from "./Validation";
import { ZipCodeValidator } from "./ZipCodeValidator";
import { LettersOnlyValidator } from "./LettersOnlyValidator";

let strings = ["Hello", "98052","101"];

let validators: { [s: string]: StringValidator; }={};
