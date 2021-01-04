
import { NumbersCollection } from './NumbersCollection';

import { CharacterCollection } from './CharacterCollection';

import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10,242,-100,-3, -3000, 10000])

numbersCollection.sort(); 

console.log(numbersCollection.data);

const characterCollection = new CharacterCollection('dfkljdsafkdADSFDSAFlkdjs');

characterCollection.sort();

console.log(characterCollection.data);


const linkedList = new LinkedList();

linkedList.add(4);
linkedList.add(45);
linkedList.add(-454);
linkedList.add(-945);
linkedList.add(12);
linkedList.add(85);

linkedList.sort();

linkedList.print(); 



