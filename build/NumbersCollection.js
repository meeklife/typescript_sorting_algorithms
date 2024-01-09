"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(a, b) {
        return this.data[a] > this.data[b];
    }
    swap(a, b) {
        const leftHand = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
