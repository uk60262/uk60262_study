let js_test = 80;
let jk_test = 60;
let ju_test = 40;

let js_test2 = 90;
let jk_test2 = 70;
let ju_test2 = 50;

function aaa(x){
    if(x == "지효")
    console.log();
}


//배열끝
//push
//pop 

//배열앞
//unshift
//shift
//어레이명.shift();


//slice (n,m) n부터 m-1까지 반환
//0부터 6-1까지 a팀. 하나 크게 적어야.


let a = [33,33,54,98];


//Object {} 사용,키(eng)와 값(33)을 사용
//1. 대괄호 ["kor"] 키를 입력하면 값
//2. 점.eng 사용
//""띄어쓰기 한 키값은 호출불가


//1-1 중첩오브젝트로 표현
let rap = {
    seungcheol:{
        day: "1995-08-08",
        age: 29
    },
    wonwoo: {
        day: "1995-07-17",
        age: 28
    }
}
let vocal = {
    seungkwan:{
        day: "1998-01-16",
        age: 26
    },
    dk:{
        day: "1997-02-18",
        age: 27
    }
}
let dance = {
    dino:{
        day: "1999-02-11",
        age: 25
    },
    hs:{
        day: "1996-06-10",
        age: 28
    }
}


//1-2

console.log(rap.wonwoo["day"]); //day: 키, 1999: 값. 키를 호출하면 값이 나옴.
console.log(rap.wonwoo.day); //같은 값 출력.

//1-3

console.log(vocal.dk.age);

//2-1
//let 필수는 아님.
let vnday = window.prompt("버논생일은 언제입니까?");
let vnage = window.prompt("버논은 몇살입니까?");

//vn을 rap Object에 추가함. Object를 연결할 땐 , 써주기.
rap.vn={
    a:vnday,
    b:vnage
};

//rap.vn = {day: }

//2-2

console.log(rap.vn.a + ',  ' + rap.vn.b);
console.log(rap.vn.b);
console.log(rap);




