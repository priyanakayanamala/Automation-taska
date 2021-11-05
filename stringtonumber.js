
//Write function to convert string to number, also check input is not null or undefined

function stringtonumber(){
    let input = prompt('enter');
    if(Boolean(input)==false ){
        alert('invalid');
    }
    else if(isNaN(input) == true){
        alert("the given input is a string and cannot convert it to number")
    }
    else{
        alert(`the number is ${Number(input)}`);
    }
}
stringtonumber();