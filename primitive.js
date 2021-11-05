
//Write function which check value of type is one of the primitive data type

let primitive = (val) => {
    if(val === Object(val)){
    console.log(false);
  }else{
    console.log(true);
  }
  }
  primitive("string");
  primitive(1);
  primitive(null);
  primitive(Infinity);