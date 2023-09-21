function C_to_F(c) 
{
  var temp = c;

  var f = temp * 9 / 5 + 32;
  
  var x = temp+'\xB0C is ' + f + ' \xB0F.';
    console.log(x);
}

function F_to_C(f) 
{
  var temp = f;
  
  var f = (temp - 32) * 5 / 9;
  
  var x = temp+'\xB0F is ' + f + '\xB0C.';
    console.log(x);
} 

C_to_F(60);

F_to_C(45);
