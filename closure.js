
//Write closure function to get minimum pass marks value, 
//write another function expression to check pass or fail of the marks provided.


function pass_fail(val1){
    return function inner_function(val2){
        return val1 >= val2;
    };
}
var pass = pass_fail(37);
//var pass = pass_fail(45);
alert(pass(35));