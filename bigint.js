//Write function to check number is bigint



// function num_bigint(){
//     let c = prompt('enter');
//     let digits = c.toString().split('');
//     console.log(digits);
//     console.log(digits.length);
//     for(let i=0;i<=digits.length;i++){
//         if(c[i] == 'n'){
//           console.log("Bigint");
//         }
//         else{
//           console.log("number");
//         }
//     }
//   }
//   num_bigint();

//Write function to check number is bigint

function Bigint(x){
  let y = typeof(x);
  if(x > 9007199254740991 && x<(-9007199254740992)){
    alert("Bigint");
  }
  else if(y == "bigint"){
    alert("Bigint");
  }
  else{
    alert("its not bigint");
  }

}
Bigint(1234n);
Bigint(1234);
Bigint(9);
Bigint("ten");
Bigint(-9007199254740992);

  