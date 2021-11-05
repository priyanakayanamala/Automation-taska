
//Write function which will Remove duplicates from string and
// produce output of new string (use arrow functions)

function duplicates(){
    var number = prompt("enter the number");
    var arr = number.toLowerCase().split('');
    var filterdata = arr.filter((ele,ind) => {
            return arr.indexOf(ele) == ind;
  })
  console.log(filterdata.join(''));
  alert(filterdata.join(''));
  }
  duplicates();