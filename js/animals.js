var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//declaring the class as the interface a s argument
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        return this.name + " moved " + distance + "m.";
    };
    Animal.prototype.makeSound = function (sound) {
        return this.name + " sounds " + sound + ".";
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        return _super.prototype.move.call(this, distance);
    };
    Snake.prototype.makeSound = function (sound) {
        if (sound === void 0) { sound = "Slithering"; }
        return _super.prototype.makeSound.call(this, sound);
    };
    Snake.prototype.lives = function () {
        return name + " lives in water";
    };
    return Snake;
}(Animal));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 10; }
        return _super.prototype.move.call(this, distance);
    };
    Dog.prototype.makeSound = function (sound) {
        if (sound === void 0) { sound = "Barking"; }
        return _super.prototype.makeSound.call(this, sound);
    };
    return Dog;
}(Animal));
var anm = new Animal("Animal");
var sam = new Snake("Sammy the Python");
var tom = new Dog("Tommy the Palomino");
var a = anm.move();
var b = sam.move();
var c = sam.makeSound();
var d = tom.move(34);
var e = tom.makeSound();
document.getElementById("res").innerHTML = a + '<br>' + b + '<br>' + c + '<br>' + d + '<br>' + e;
