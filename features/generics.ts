class ArrayOfNumbers {
  constructor (public collection: number[]) {};
  get (index: number): number {
    return this.collection[index];
  };
};

class ArrayOfStrings {
  constructor (public collection: string[]) {};
  get (index: number): string {
    return this.collection[index];
  };
};

class ArrayOfAnything<T> {
  constructor (public collection: T[]){ };

  get (index: number): T {
    return this.collection[index];
  };
};

function printStrings(collection: string[]):void {
  collection.forEach(item => {
    console.log(item);
  });
}

function printNumbers(collection: number[]):void {
  collection.forEach(item => {
    console.log(item);
  });
}

function printAnything<T>(collection: T[]):void {
  collection.forEach(item => {
    console.log(item);
  });
}

class Car {
  print() {
    console.log('I am a car');
    
  }
}


class House {
  print() {
    console.log('I am a house');
    
  }
}

interface Printable {
  print() : void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for(let index = 0; index < arr.length; index += 1){
    arr[index].print()
  }
}

printHousesOrCars<House>([new House(), new House(), new Car()]);