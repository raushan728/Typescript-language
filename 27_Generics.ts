function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<number>(123));
console.log(identity<string>("TS"));
