function result(number){
 if(number>=80){
 console.log("You Got A+");
 } else if(number>=70 && number<=79){
    console.log("You Got A"); 
 } else if(number>=60 && number<=69){
      console.log("You Got A-"); 
 } else if(number>=50 && number<=59){
     console.log("You Got B"); 
 }else if(number>=40 && number<=49){
    console.log("You Got C"); 
 } else if(number>=33 && number<=39){
    console.log("You Got D"); 
 } else {
    console.log("You are a Failure");  
 }

 return number;
}
var subjectNumber= result(70);
