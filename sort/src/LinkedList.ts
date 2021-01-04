import {  Sorter } from './Sorter';

class Node {

  next: Node | null = null;
  constructor (public data: number){}
}

export class LinkedList extends Sorter  {
  constructor () {
    super();
  }

  head : Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if(!this.head) {
      this.head = node;
      return;
    } 
    
    let tail = this.head;
    while(tail.next) {
      tail = tail.next;
    }
    tail.next = node;

  };

  get length() : number {
    let count = 1;
    if(!this.head) {
      return count;
    } 
    let tail = this.head;

    while(tail.next) {
      count += 1;
      tail = tail.next;
    }
    return count;
  };

  at_mine(index: number): Node {
    if(!this.head) {
      throw new Error('Index out of bounds');
    } 
    let pointer = this.head;
    for(let position = 0; position < index; position += 1){
      if(pointer.next) {
         pointer = pointer.next
      }
      else {
        throw new Error('Index out of bounds');
      }
    }
    return pointer;
  };

  at(index: number): Node {
    if(!this.head) {
      throw new Error('Index out of bounds');
    } 
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if(counter === index) {
        return node;
      }

      counter += 1;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  };


  compare (leftIndex: number, rightIndex: number): boolean {
    if(!this.head) {
      throw new Error ('List is empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  swap (leftIndex : number, rightIndex: number): void {
    const leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;

  }

  print (): void {
    if(!this.head) {
      return
    }
    let node: Node | null = this.head;
    while (node){
      console.log(node.data);
      node = node.next;
    }
  }

}