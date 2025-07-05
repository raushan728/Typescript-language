class Animal {
  move() {
    console.log("Moving");
  }
}

class Bird extends Animal {
  fly() {
    console.log("Flying");
  }
}

const b = new Bird();
b.move();
b.fly();
