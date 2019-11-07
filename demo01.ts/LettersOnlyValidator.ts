import { StringValidator } from "./Validation";

const lettersRegexp = /^[A-Za-z]+$/;
export class LeetersOnlyValidator implements StringValidator{
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}