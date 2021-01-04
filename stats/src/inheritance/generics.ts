

class HoldAnything<TypeOfData> {

  data :TypeOfData ;

}

const holdNumber = new HoldAnything<number>();

holdNumber.data = 4;

console.log(holdNumber.data);


const holdString = new HoldAnything<string>();

holdString.data = 'Hello';

console.log(holdString.data);
