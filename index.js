console.log("Hello World!");

generateRandomNumber(15);

function generateRandomNumber(max){
   // return random number 0 to 10;
   let randomNum = Math.floor(Math.random() * max) + 1;
   // if ....else if ... else statement
   //if (confition) {block of code to execute}
   // =, !, >,<, >=<
   if (randomNum <= 15 ) {
      return console.log(`Random number ${randomNum} is B. 1 -15`);
   }

   else if (randomNum >= 16 && randomNum <= 30){
      return console.log(`Random number ${randomNum} is I. 15 - 30`);
   }

   else if (randomNum >= 16 && randomNum <= 30){
      return console.log(`Random number ${randomNum} is N. 30 - 45`);
   }

   else if (randomNum >= 16 && randomNum <= 30){
      return console.log(`Random number ${randomNum} is G. 45 - 60`);
   }

   else if (randomNum >= 16 && randomNum <= 30){
      return console.log(`Random number ${randomNum} is G. 60 - 75`);
   }

   else{
      console.log(`Random Number is Invalid`);
   }

   return console.log(randomNum);
}