var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ;
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    ;
    return ArrayOfNumbers;
}());
;
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ;
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    ;
    return ArrayOfStrings;
}());
;
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ;
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    ;
    return ArrayOfAnything;
}());
;
function printStrings(collection) {
    collection.forEach(function (item) {
        console.log(item);
    });
}
function printNumbers(collection) {
    collection.forEach(function (item) {
        console.log(item);
    });
}
function printAnything(collection) {
    collection.forEach(function (item) {
        console.log(item);
    });
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log('I am a car');
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log('I am a house');
    };
    return House;
}());
function printHousesOrCars(arr) {
    for (var index = 0; index < arr.length; index += 1) {
        arr[index].print();
    }
}
printHousesOrCars([new House(), new House(), new Car()]);
