console.log("Hello World!");

function generateRandomNumber(){
   // return random number 0 to 10;
   let randomNum = Math.floor(Math.random() * 15) + 1;
   // if ....else if ... else statement
   //if ()
   if (randomNum >= 15 ) {
      console.log(`Random Number is > = 15`);
   }
   else{
      console.log(`Random Number is < = 15`);
   }

   return console.log(randomNum);
}