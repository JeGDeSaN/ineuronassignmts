let a1=[1,2,3,5]
let a2=[1,8,2,4]
let num=1

if(a1.includes(num)&&a2.includes(num))
{
    console.log(+num+"  is in both ")
}
else if(a1.includes(num))
{
    console.log(+num+"  is in array1")
}
else{
    console.log(+num+"is in array 2")
}
