function factorial(n){
 let x = 1;
    if (n == 0 || n == 1){
      return x;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        x = x * i;
      }
      return x;
    }
    else{
      return "number has to be positive."
    }  
  }
  let n = 11;
  x = factorial(n)
  console.log("Factorial of " + n + " : " + x);