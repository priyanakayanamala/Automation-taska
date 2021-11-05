
//Write function to check if input is string and string contains a number


function stringnumber(input){
  let x = isNaN(input);
    if(!input){
      console.log("enter the valid one")
      }
    else if(x == true){
      console.log("string contains number");
      }
    else{
      console.log("no numbers");
      }
    }

  stringnumber("123hi");