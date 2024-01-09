"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    constructor(str) {
        this.str = str;
    }
    get length() {
        return this.str.length;
    }
    compare(leftIndex, rightIndex) {
        return this.str[leftIndex].toLowerCase() > this.str[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const strArray = this.str.split("");
        const leftHand = strArray[leftIndex];
        strArray[leftIndex] = strArray[rightIndex];
        strArray[rightIndex] = leftHand;
        this.str = strArray.join("");
    }
}
exports.CharacterCollection = CharacterCollection;
