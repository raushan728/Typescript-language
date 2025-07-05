interface A {
  name: string;
}

type B = {
  name: string;
}

const a1: A = { name: "Test" };
const b1: B = { name: "Test" };

console.log(a1, b1);
