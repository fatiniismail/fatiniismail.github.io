function check()
{
   
   var q1  = document.quiz.q1.value;
   var q2  = document.quiz.q2.value;
   var q3  = document.quiz.q3.value;
   var q4  = document.quiz.q4.value;
   var q5  = document.quiz.q5.value;
   var q6  = document.quiz.q6.value;
   var q7  = document.quiz.q7.value;
   var q8  = document.quiz.q8.value;
   var q9  = document.quiz.q9.value;
   var q10 = document.quiz.q10.value;
   var q11 = document.quiz.q11.value;
   var q12 = document.quiz.q12.value;
   var correct= 0;
   
   if(q1 == "A.Gordon Ramsay,Jr"){
	   correct++;
   }
   
   if(q2 == "C.His father-in-law"){
       correct++;
   }
   
   if(q3 == "A.November 8, 1966"){
       correct++;
   }
   
   if(q4 == "A.Conrad Tokyo and Cerise by Gordon Ramsay"){
       correct++;
   }
   
   if(q5 == "A.Johnstone, Scotland"){
       correct++;
   }
   
   if(q6 == "D.Ireland"){
       correct++;
   }
   
   if(q7 == "A.English cuisine"){
       correct++;
   }
   
   if(q8 == " A.May 27, 1975"){
       correct++;
   }
   
   if(q9 == "A.The Naked Chef"){
       correct++;
   }
   
   if(q10 == "A.Clavering"){
       correct++;
   }
   
   if(q1 == "D.Trevor"){
       correct++;
   }
   
   if(q12 == "A.The Naked Chef"){
       correct++;
   }
   
   var messages = ["GOOD JOB!!!", "IT'S OKAY","YOU REALLY NEED TO DO BETTER"];
   var score;
   
   if (correct == 0){
	    score = 2;
   }
   
   if(correct > 0 && correct < 12){
	   score = 1;
   }
   
   if(correct == 12){
	   score = 0;
   }
   
   document.getElementById("Submit").style.visibility="visible";
   document.getElementById("message").innerHTML = messages[score];
   document.getElementById("number_correct").innerHTML = "You got "+ correct + "correct!";
}
   
   
   
   
   
   
   
   