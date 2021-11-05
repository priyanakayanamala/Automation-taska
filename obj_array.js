
//Write function to check object is Array

function obj_array(){
    const arr = [1,2,3,4];
    const obj = { message: 'Hello!' };
    if(Array.isArray(obj) == true){
      alert("is an array");
    }
    else{
      alert("not an array");
    }
  }
  obj_array();