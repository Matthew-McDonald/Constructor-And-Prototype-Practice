//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  this.hungry = hungry || false;
  this.status = status;
  this.color = color;
  this.owner = owner;
}

let sadie = new Dog('normal','black', '', 'mason');
let moonshine = new Dog('normal', '', true);
let atticus = new Dog();

console.log(sadie.hungry);


// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.pet = function(dog) {
    dog.status = 'happy';
  }
  this.feed = function(dog) {
    dog.hungry = false;
  }
  this.cool = cool || false;
};

let mason = new Human();
let julia = new Human(true);

// Instances of Human
// Needed: mason, julia
