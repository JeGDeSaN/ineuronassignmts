function delay()
{
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        const result=true;
        if(result) resolve(console.log("In resolve"));
        else reject(new Error ,console.log(("in error"))); 
    },1000);



})};

delay();

