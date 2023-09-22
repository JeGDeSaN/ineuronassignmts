let a=145,fact=1,sum=0,z=a

while(a>0)
{
  let temp=a%10
  a=parseInt(a/10)
  fact=1
  for(i=1;i<=temp;i++)
  {
    fact=i*fact
  }
  sum=sum+fact
}

if(z==sum)
{
  console.log("special number")
}
else{
  console.log("not a special number")
}