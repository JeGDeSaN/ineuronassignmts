function* genator() { 
    while (true) { 
        try { 
            yield "Null"; 
        } catch (e) { 
            console.log('throw() eception'); 
        } 
    } 
} 
  
const abc = genator(); 
console.log(abc.next()); 
console.log(abc.throw(new Error('Error caught!')));