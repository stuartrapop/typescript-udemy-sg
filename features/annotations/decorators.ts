class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }
  @logError('boat was sunk')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast ') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log('Target:', target);
  console.log('Key:', key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
    console.log('Target:', target);
    console.log('Key:', key);
    console.log('Desc:', desc);
  };
}
