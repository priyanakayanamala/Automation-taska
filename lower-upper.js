
//Write function to check two values passed are same irrespective of case

let lower_upper = (val1,val2) => {
    if(val1.toUpperCase() === val2.toUpperCase()){
      alert('Both strings are equal');
    }
    else{
      alert('Both are not equal');
    }
  }
  lower_upper("String", "string");
  lower_upper('Madam','madam');
  lower_upper('priya','asha');