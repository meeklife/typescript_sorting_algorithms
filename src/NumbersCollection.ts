export class NumbersCollection {
    constructor(public data: number[]){}

    get length(): number {
        return this.data.length;
    }

    compare (a: number, b: number) : boolean { 
        return this.data[a] > this.data[b];
    }

    swap (a: number, b: number): void {
        const leftHand = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = leftHand;
    }
}