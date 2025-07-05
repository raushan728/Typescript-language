class Employee {
  constructor(public name: string, private salary: number) {}

  getDetails() {
    return `Name: ${this.name}`;
  }
}

const emp = new Employee("Ravi", 50000);
console.log(emp.getDetails());
