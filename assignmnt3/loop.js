let l=4;
let num="";
let count=1;

for(i=1;i<=l;i++)
{
    for(j=1;j<=i;j++)
    {
    num+=count;
    count++;
    }
    num+="\n";
}
    console.log(num);
