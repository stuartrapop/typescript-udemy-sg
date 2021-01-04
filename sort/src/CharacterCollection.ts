import {  Sorter } from './Sorter';


export class CharacterCollection extends Sorter  {  

  
  constructor (public data: string) {
    super();
    };

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex:number):boolean {
    return this.data[leftIndex].toLocaleUpperCase() > this.data[rightIndex].toUpperCase();
  }

  swap(leftIndex: number, rightIndex:number):void {
    const leftHand = this.data[leftIndex];
    this.data = this.data.substring(0,leftIndex) + this.data[rightIndex] + this.data.substring(leftIndex+1, this.length) ;
    this.data = this.data.substring(0,rightIndex) + leftHand + this.data.substring(rightIndex+1, this.length) ;
    
  }


}