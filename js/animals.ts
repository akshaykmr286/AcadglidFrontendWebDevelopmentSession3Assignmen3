
//parent class Animal
class Animal {
    private name:string;
    constructor(name:string) {
        this.name = name;
    }

    public move(distance:number = 0) {
        return `${this.name} moved ${distance}m.`;
    }
    public makeSound(sound:string) {
        return `${this.name} sounds ${sound}.`;
    }
}

//class Snake as a instance of Animal claaa
class Snake extends Animal {
    constructor(name:string){
        super(name);
    }
    move(distance = 5){
       return super.move(distance);
    }
    makeSound(sound = "Slithering"){
        return super.makeSound(sound);
    }
    public lives() {
        return `${name} lives in water`;
    }
}
//Dog class as an instance of Animal class

class Dog extends Animal {
    constructor(name:string) {
        super(name);
    }
    move(distance = 10){
       return super.move(distance);
    }
    makeSound(sound = "Barking"){
        return super.makeSound(sound);
    }
}

//creating objects of classes
let anm = new Animal("Animal");
let sam = new Snake("Sammy the Python");
let tom = new Dog("Tommy the Palomino");

//setting varibles
let a = anm.move();
let b = sam.move();
let c = sam.makeSound();
let d = tom.move(34);
let e = tom.makeSound();

//passing in to html page
document.getElementById("res").innerHTML = a+'<br>'+b+'<br>'+c+'<br>'+d+'<br>'+e;