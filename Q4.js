/*
04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign 
them values and log their values to the console before and after they are declared to demonstrate variable 
hoisting.
*/

{
    console.log(x);// undefined due to hosting
    console.log(y);// throws References Error
    console.log(z);// throws Reference Error

    var x = "PW";
    let y = "skills"
    const z = "!";

    console.log(x);
    console.log(y);
    console.log(z);
}