$(document).ready(function() {
   var numberDisplay = 0;
   var result = 0;
   var newArr = [];
   var other = [];
   var success = false;
   var aftercount = false;
   var addedDot = false;
   other.push(0);
   // newArr.push(0);

   function reset() {
      $("h1").text(0);
      $("h4").text(0);
      numberDisplay = 0;
      result = 0;
      newArr = [];
      other = [];
   }

   function digitlimit() {
      numberDisplay = 'DIGIT LIMIT';
      result = 'DIGIT LIMIT';
      newArr = 'DIGIT LIMIT';
      $("h1").text(numberDisplay);
      $("h4").text(result);
   }

   $(".number").click(function() {
      if(other.length == 0 && success == true) {
         numberDisplay = 0;
         result = 0;
         newArr = [];
         other = [];
         success = false;
         addedDot = false;
      } else if(numberDisplay.toString().length >= 9) {
         digitlimit();
      }
   });

   $("#ACbutton").click(function() {
      // numberDisplay = 0;
      reset();
   });

   $("#CEbutton").click(function() {
      if(numberDisplay != 0) {
         newArr.pop();
         // other.pop();
         numberDisplay = 0;
         $("h1").text(0);
         $("h4").text(newArr.join(''));

      } else if(aftercount) {
         reset();
      }
   });

   function pressNumber(numbType) {
      numberDisplay = numberDisplay*10 + numbType;
      newArr.push(numbType);
      $("h1").text(numberDisplay);
      $("h4").text(newArr.join(''));
   }

   $("#numberzero").click(function() {
      pressNumber(0);

   });
   $("#number1").click(function() {
      pressNumber(1);

   });
   $("#number2").click(function() {
      pressNumber(2);

   });
   $("#number3").click(function() {
      pressNumber(3)
   });
   $("#number4").click(function() {
      pressNumber(4);
   });
   $("#number5").click(function() {
      pressNumber(5);
   });
   $("#number6").click(function() {
      pressNumber(6);
   });
   $("#number7").click(function() {
      pressNumber(7);
   });
   $("#number8").click(function() {
      pressNumber(8);
   });
   $("#number9").click(function() {
      pressNumber(9);
   });

   $("#numberPlus").click(function() {

      if((typeof numberDisplay == 'number' && typeof newArr[newArr.length - 1] == 'number') || aftercount == true) {
         addedDot = false;
         aftercount = false;
         other.push(numberDisplay);
         numberDisplay = 0;
         newArr.push("+");
         other.push("+");
         $("h4").text(newArr.join(''));
      }

   });

   $("#numberMinus").click(function() {

      if((typeof numberDisplay == 'number' && typeof newArr[newArr.length - 1] == 'number') || aftercount == true || newArr.length == 0) {
         addedDot = false;
         aftercount = false;
         other.push(numberDisplay);
         numberDisplay = 0;
         newArr.push("-");
         other.push("-");
         $("h4").text(newArr.join(''));
      }

   });

   $("#numberTimes").click(function() {
      if((typeof numberDisplay == 'number' && typeof newArr[newArr.length - 1] == 'number') || aftercount == true) {
         addedDot = false;
         aftercount = false;
         other.push(numberDisplay);
         numberDisplay = 0;
         newArr.push("X");
         other.push("*");
         $("h4").text(newArr.join(''));
      }

   });

   $("#numberSpash").click(function() {
      if((typeof numberDisplay == 'number' && typeof newArr[newArr.length - 1] == 'number') || aftercount == true) {
         addedDot = false;
         aftercount = false;
         other.push(numberDisplay);
         numberDisplay = 0;
         newArr.push("/");
         other.push("/");
         $("h4").text(newArr.join(''));

      }
   });

   $("#dotButton").click(function() {
      if((numberDisplay != 0 && addedDot == false) || (aftercount == true && addedDot == false) || (numberDisplay == 0 && addedDot == false)) {
         addedDot = true;
         aftercount = false;
         other.push(numberDisplay);
         numberDisplay = 0;
         newArr.push(".");
         other.push(".");
         $("h4").text(newArr.join(''));
      }
   });

   $("#numberequal").click(function() {

      if(typeof numberDisplay == 'number') {
         // result = numberDisplay;
         other.push(numberDisplay);
         // alert(other);
         for (var i = 0; i < other.length; i++) {
            if(other[i] == "+") {
               result = result + other[i+1];
               i++;
            } else if(other[i] == "-") {
               result = result - other[i+1];
               i++;
            }else if(other[i] == "*") {
               if(other[i-2] == "+") {
                  result = (result - other[i-1]) + (other[i-1] * other[i+1]);
               } else if(other[i-2] == "-") {
                  result = (result + other[i-1]) - (other[i-1] * other[i+1]);
               } else if(other[i+1] == 0) {
                  result = 0;
               } else if(other[i-2] == "/") {
                  result = result * other[i+1];
               } else {
                  result = result * other[i+1];
               }

               i++;
            }else if(other[i] == "/") {
               if(other[i-2] == "+") {
                  result = (result - other[i-1]) + (other[i-1] / other[i+1]);
               } else if(other[i-2] == "-") {
                  result = (result + other[i-1]) - (other[i-1] / other[i+1]);
               } else if(other[i+1] == 0) {
                  result = 0;
               } else if(other[i-2] == "*") {
                  result = result / other[i+1];
               } else {
                  result = result / other[i+1];
               }

               i++;
            }else if(other[i] == ".") {
               if(other[i-2] == "+") {
                  result = result + other[i+1]/(10**other[i+1].toString().length);
               } else if(other[i-2] == "-") {
                  result = result - other[i+1]/(10**other[i+1].toString().length);
               } else if(other[i-2] == "*") {
                  result = result * other[i+1]/(10**other[i+1].toString().length);
               } else if(other[i-2] == "/") {
                  result = result / other[i+1]/(10**other[i+1].toString().length);
               } else {
                  result = result + other[i+1]/(10**other[i+1].toString().length);
               }
               i++;
            }
            else {
               result += other[i];
            }
         }
         // alert(other);
         other = [];
         if(result.toFixed(0).toString().length < 9) {
            if(result % 1 != 0) {
               if(result.toString().length > 8) {
                  $("h1").text(result.toFixed(8));
                  newArr = [result.toFixed(8)];
               } else {
                  $("h1").text(result);
                  newArr = [result];
               }
               success = true;
               aftercount = true;
               addedDot = true;
            } else {
               $("h1").text(result);
               newArr = [result];
               success = true;
               aftercount = true;
               addedDot = false;
               // alert(x);
            }
            numberDisplay = 0;
         } else {
            digitlimit();
         }
      }
   });

});
