function triangle(x , y ,z)
{
if(x==y && y==z)
console.log("Equilateral triangle")
else if(x==y || y==z || z==x)
console.log("Isosceles Triangle")
else 
console.log("Scalene Triangle")
} 

triangle(3,3,3)
triangle(3,3,4)
triangle(2,3,4)


