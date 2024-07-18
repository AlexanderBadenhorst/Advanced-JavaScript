"use strict";

let one  = ()=> console.log('one'); 
let two  = ()=> console.log('two'); 
let three = () =>{
    console.log('three'); 
    one(); 
    two(); 
}
let four = () =>{
    console.log('four');  
    setTimeout(one,0); 
    three();
}
four();
