"use strict";
//Set timeout order
const one  = ()=> console.log('1. one'); 
const two  = ()=> console.log('2. two'); 
// one();
// two();

const three = () =>{
    console.log('3. three'); 
    one(); 
    two(); 
};
// three();

const four = () =>{
    console.log('4. four');  
    setTimeout(one,1000); 
    three();
};
four();
