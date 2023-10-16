let a=[1,2,3,4,5,2,4,6,9,100],sum=0,sum1=0,count=0,count1=0,avg=0;
{
for(i=0;i<=a.length-1;i++)
{
    sum+=a[i];
    count++;
    i++;
}

for(i=1;i<=a.length-1;i++)
{
    sum1+=a[i];
    count1++;
    i++;
}

for(i=0;i<a.length;i++)
{
    avg+=a[i];
}
}

function gcd(x,y)
{
    while(x != y){
        if(x > y) {
            x -= y;
        }
        else {
            y -= x;
        }
    }
    console.log("Gcd of "+sum+" and "+sum1+" is--->>"+x)
}

let s=sum-sum1;
let avgg=avg/a.length

console.log("Difference between two sums-->>" +s)

console.log("Number of elements in odd places--->>"+count)


console.log("Number  of elements in even places--->>" +count1)

console.log("Average of sum of elements in array"+avgg)

gcd(sum,sum1)
