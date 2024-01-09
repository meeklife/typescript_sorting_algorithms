import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedLists';

// creating instance of numbers
const numbersCollection = new NumbersCollection([21, 100, 25, 30, 40, 50])
const sorter = new Sorter(numbersCollection)

// creating instance of characters
const stringCollection = new CharacterCollection("augustinebaahforson")
const strSorter = new Sorter(stringCollection)

// creating instance of linked lists
const linkedListCol = new LinkedList()
linkedListCol.add(24)
linkedListCol.add(6)
linkedListCol.add(8)
linkedListCol.add(200)
linkedListCol.add(500)
const linkedListSorter = new Sorter(linkedListCol)

// sorting numbers
sorter.sort()
console.log(numbersCollection.data)

// sorting characters
strSorter.sort()
console.log(stringCollection)

// sorting linked list
linkedListSorter.sort()
linkedListCol.print()