const carMakers = ['ford', 'toyota', 'chevry'];


const dates = [new Date(), new Date()];

const carsByMake:string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// help with inference when extracting values

const car = carMakers[0];

const myCar = carMakers.pop();

// Prevent incompatible values

carMakers.push('100');

// Help with 'map'
carMakers.map((car: string): string =>{
  return car.toUpperCase();
});

// Flexible types -multiple types in one array

const importantDates: (Date | string)[]= [new Date()];
importantDates.push('2030-10-10');
importantDates.push (new Date());


