"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedLists_1 = require("./LinkedLists");
// creating instance of numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([21, 100, 25, 30, 40, 50]);
const sorter = new Sorter_1.Sorter(numbersCollection);
// creating instance of characters
const stringCollection = new CharactersCollection_1.CharacterCollection("augustinebaahforson");
const strSorter = new Sorter_1.Sorter(stringCollection);
// creating instance of linked lists
const linkedListCol = new LinkedLists_1.LinkedList();
linkedListCol.add(24);
linkedListCol.add(6);
linkedListCol.add(8);
linkedListCol.add(200);
linkedListCol.add(500);
const linkedListSorter = new Sorter_1.Sorter(linkedListCol);
// sorting numbers
sorter.sort();
console.log(numbersCollection.data);
// sorting characters
strSorter.sort();
console.log(stringCollection);
// sorting linked list
linkedListSorter.sort();
linkedListCol.print();
