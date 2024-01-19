console.log('satrt')

Promise.resolve(1).then((res)=>{
    console.log(res)
})

Promise.resolve(2).then((res)=>{
    console.log(res)
})
console.log('end')