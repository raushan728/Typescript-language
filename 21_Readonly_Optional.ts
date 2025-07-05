interface Book {
  title: string;
  readonly isbn: string;
  author?: string;
}

const b: Book = { title: "TS Guide", isbn: "1234" };
console.log(b.title);
