export class CharacterCollection{
    constructor(public str: string){}

    get length(): number {
        return this.str.length;
    }

    compare (leftIndex: number, rightIndex: number) : boolean { 
        return this.str[leftIndex].toLowerCase() > this.str[rightIndex].toLowerCase();
    }

    swap (leftIndex: number, rightIndex: number): void {
        const strArray = this.str.split("");

        const leftHand = strArray[leftIndex];
        strArray[leftIndex] = strArray[rightIndex];
        strArray[rightIndex] = leftHand;

        this.str = strArray.join("");
    }
}