 
//Write function to identify repeated characters in the input string (for loop and index) 
 
 function fun12(){
     var x = prompt('enter');
    for(i=0;i<=x.length;i++){
        for(j=i+1;j<x.length;j++){
            if(x[i]==x[j]){
                console.log(x[i]);
            }
        }
     }
   }
  fun12();
