class Helper {
  static version = "1.0.0";

  static log(msg: string) {
    console.log("Log:", msg);
  }
}

console.log(Helper.version);
Helper.log("Started");
