// reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

// context vs scope
// context - where we are within the object

function a() {
    console.log(this); // 'this' in the left means where is the object right now, and it's 'window'.
}

// instantion
class Player {
    constructor(name, type){
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    intoduce() {
        console.log(`Hi i'am ${this.name}. I'am ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type);
        console.log("wizard", this);
    }
    play() {
        console.log(`Whahahah... I'am ${this.type}`);
    }
}

const wizard1 = new Wizard("Sally", "healer");
const wizard2 = new Wizard("Shawn", "dark magic");