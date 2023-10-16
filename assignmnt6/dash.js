let result = [];

function dashes(num)
{  
for(i=0; i<num.length; i++)
  {
    if((num[i]%2 === 0)&&(num[i-1]%2 === 0))
     {
      result.push('-', num[i]);
     }
    else
     {
      result.push(num[i]);
     }
  }
console.log(result.join(''));
}

dashes("025468");