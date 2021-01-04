interface Reportable {
 
  summary (): string;

};


const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary (): string {
    return `Name: ${this.name}
      Year: ${this.year}
      Broken? ${this.broken}
    `
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary (): string {
    return `Color: ${this.color}
      Carbonated: ${this.carbonated}
      Sugar content ${this.sugar}
    `
  }

}



const printSummary = (item: Reportable): void => {

  console.log(item.summary());
  

};

printSummary(oldCivic);

printSummary(drink);