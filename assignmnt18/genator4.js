function* gen() {
    let num = yield "2 * 2 = ?";
    console.log(num);
    let num2 = yield "3 + 3 = ?";
    console.log(num2); 
  }
  let generator = gen();
  console.log(generator.next().value); 
  console.log(generator.next(4).value);
  console.log(generator.next(6).done); 