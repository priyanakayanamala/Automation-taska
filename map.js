
//Store the function in map and call the function from map value.

let input = new Map();
input.set('1', 'str1');  
input.set(1, 'num1');     
input.set(true, 'bool1');
input.set('function1', (a,b) => {console.log("map function.", a, b)});


console.log(input.get('function1').call(this, 1,2));
alert(input.get(true));