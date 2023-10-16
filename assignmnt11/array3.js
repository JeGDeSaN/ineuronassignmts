let a=[1,2,3,2,3,4,4,5,5,2,3]
let dup =[]


let newarr = [];
    
for(let i of a) {
    if(newarr.indexOf(i) === -1) {
        newarr.push(i);
    }
}
console.log("Array without dup elmnts  "+newarr);


a.sort()

for(i=0;i<=a.length-1;i++)
    {
        if(a[i]==a[i+1])
        {
            dup.push(a[i])
            
        }
        
    }
 console.log("Duplicate elements  "+dup)


