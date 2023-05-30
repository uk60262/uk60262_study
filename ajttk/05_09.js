function hello(){
    console.log ('안녕');
}
hello()
//헬로라는 함수를 만듦. 함수


let name = "고선진";
function hi(name){
    console.log (`안녕 내 이름은 ${name}이야`);
    console.log("안녕 내 이름은 ", name, "ㅇㅣ야");
}
hi()




function add(x,y){ //add함수의 인자 x,y
    result = x+y; //결과값 형태.
    console.log (result); //결과값 형태로 출력.
}
add(1,2); //1,2를 넣어서 선언.

//x,y 선언만 함 값은 정해지지 않음.




function year(x){ //year라는 함수 선언
    let time = 2023; //2023이라는 변수를 타임이라고 선언
    let hey = time-x+1; 
    console.log (`선생님은 ${hey}에 태어나셨어`); //이라고 화면에 출력
}
let age = 30;
year(age); //함수 호출




function max(x,y){ //x,y라는 두 매개변수
    let hi ; //제일 큰 값을 넣을 hi를 선언만!! 함. 안에는 x,y중 뭐가 들어올지몰랑

    if (x>y){
        hi = x;
        console.log (hi);
    }
    else if (x<y){
        hi = y;
        console.log (hi);
    }
    else if (x==y){ //아니면 else만 적어도 됨.
        hi = x;
        console.log (hi);
    }
}

max(1,2); //변수를 입력해서 화면에 출력.



function solution(num1,num2){
    result = num1 / num2;
    parseInt(result);
    console.log (result);
}
solution(9,3);




function sum(n){
    let count =0; //
    for (let i = n; i>0; i--){ //초기값,조건식,
        console.log (i,count);
        count += i; //카운트=카운트 더하기 i
    }
    console.log (count);
}
sum(3);




function solution(n){
    let count = 0;
    for(let i =n; i%2==0; i--){
        count += i;
    }
    console.log (count);
}
solution(2);



function gugudan(){
    for(let a=5; a<=7; a++){
        for(let b=1; b<=9; b++){
            result = (a*b);
            console.log();
        }
    }
}
