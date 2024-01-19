//counting from number 1 to 10 using sleep function 2.5 seconds sleeping time between each counting.



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 async function countnum() {
    console.log('Hello there');
    for (let i = 1; i <10 ; i++) {        
       await sleep(2500);
       console.log("counting number "+ i+ "\n" );
    }
 }
 countnum()