/*Math.ceil(x)
Math.min(x)
Math.max(x)

Math.round(x)
Math.floor(x)//같거나 작은 정수중 가장 큰 수 

Math.random(x) //0이상1미만 구간
*/


/*
let x;
document.getElementById("rollButton").onclick = function(){
  x = Math.floor(Math.random() * 6) + 1;
  document.getElementById("xlabel").innerHTML = "x: " + x;
}
*/

//더하기 뺴기 초기화 버튼을 누르면 해당 기능을 수행하는 버튼을 만들어라
let x;

//document.getElementById("decreaseBtn").onclick = function(){} 구문.


document.getElementById("decreaseBtn").onclick = function(){
  x = document.getElementById("countLabel").innerHTML;
  x = parseInt(x); //parseInt: 스프링을 숫자형으로 바꿔줌.
  x = x-1;
  //위의 코드 축약 : x -= 1;
  document.getElementById("countLabel").innerHTML = x; //등호 기준 오른쪽 값을 넣음
}


document.getElementById("resetBtn").onclick = function(){
  x = document.getElementById("countLabel").innerHTML;
  x = parseInt(x);
  x = 0;
  // x = 0;
  document.getElementById("countLabel").innerHTML = x; //등호 기준 오른쪽 값을 넣음
}


document.getElementById("increaseBtn").onclick = function(){
  x = document.getElementById("countLabel").innerHTML;
  x = parseInt(x);
  x = x+1;
  // x += 1;
  document.getElementById("countLabel").innerHTML = x; //등호 기준 오른쪽 값을 넣음
}