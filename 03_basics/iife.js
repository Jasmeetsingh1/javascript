//immediately invoked function expression (IIFE)
// file load hote hi function chala do 
(function chai(){
    console.log("db connected");
})();  //this is named IIFE

// ;--> bahut important hai yha pr is function ko end krne ke liye



( (name)=>{
    console.log(`db connected two ${name}`);
    
})('jasmeet');
//first parantheis ->scope hai 
//2nd parantheis -> execution call hai

// why? -> gloabal scope ke pollution se bachne ke liye ye use kiya jata hai