class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("Hi", this.name);
  }
}

const p = new Person("Raushan");
p.greet();
