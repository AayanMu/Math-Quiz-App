function Send(){
   var num_value1= document.getElementById('num1').value;
   var num_value2=document.getElementById('num2').value;
   final_num_value1= Math.floor(num_value1);
   final_num_value2=Math.floor(num_value2);
   final_ques= final_num_value1*final_num_value2;
   console.log(final_ques);
   document.getElementById("question").innerHTML="Q. "+ final_num_value1 + " X " + final_num_value2;
}

var n1= localStorage.getItem('Player1');
var n2= localStorage.getItem('Player2');
document.getElementById("player1").innerHTML= n1 + "  : ";
document.getElementById("player2").innerHTML= n2 + "  : ";
var s1= 0;
var s2= 0;
document.getElementById("p1s").innerHTML= s1;
document.getElementById("p2s").innerHTML= s2;
document.getElementById("ques_turn").innerHTML= n1;
document.getElementById("ans_turn").innerHTML= n2;


var qt= "1";
var at= "2";


function check(){
  Answer= document.getElementById("answer").value;
  if (Answer==final_ques){
   if(at=="1"){
      s1=s1+1;
      document.getElementById("p1s").innerHTML= s1;
   }

   else{
      s2=s2+1;
      document.getElementById("p2s").innerHTML= s2;
   }

  if(qt=="1"){
   qt="2";
   document.getElementById("ques_turn").innerHTML= n1;
  }
  }

  else{
   qt="1";
   document.getElementById("ques_turn").innerHTML= n2;
  }

  if(at=="1"){
   at="2";
   document.getElementById("ans_turn").innerHTML= n1;
   
  }
  else{
   at="1";
   document.getElementById("ans_turn").innerHTML= n2;  
  }
  
  if("ques_turn"== n2){
   document.getElementById("num1").innerHTML="";
   document.getElementById("num2").innerHTML="";
   document.getElementById("question").innerHTML="";
   document.getElementById("answer").innerHTML="";
  }
  else{
   document.getElementById("num1").innerHTML="";
   document.getElementById("num2").innerHTML="";
   document.getElementById("question").innerHTML="";
   document.getElementById("answer").innerHTML="";
  }

  if("ques_turn"== n1){
   document.getElementById("num1").innerHTML="";
   document.getElementById("num2").innerHTML="";
   document.getElementById("question").innerHTML="";
   document.getElementById("answer").innerHTML="";
  }
  else{
   document.getElementById("num1").innerHTML="";
   document.getElementById("num2").innerHTML="";
   document.getElementById("question").innerHTML="";
   document.getElementById("answer").innerHTML="";
  }

  

}


