let arr=[1,2,[3,4,[5]]];

let f = []

function flattarr(arr)
{
    arr.forEach(item=>{
        if(Array.isArray(item)){
            flattarr(item);
        }else{
            f.push(item)
        }
    })
}

flattarr(arr)
console.log(f)



