function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

fetchData().then(data => console.log(data));
