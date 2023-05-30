function celebrate(x)
let dday = 8 ;
let now = 31;

result = dday - now;
console.log (`회원님의 기념일까지${result}일 남았습니다.`);

while(time <= 30){
    console.log(`회원님의 기념일까지 ${time}일 남았습니다.`);

    if (time <= 21){
        console.log(`회원님의 기념일까지 3주 남았습니다.`);
    }

    else if(time <= 14){
        console.log(`회원님의 기념일까지 2주 남았습니다.`);
    }

    else if(time <= 7){
        console.log(`회원님의 기념일까지 1주 남았습니다.`);
    }

    else if(time <= 31){
        console.log(`회원님의 기념일이 한달 넘게 남았습니다..`);
    }

    break;
}


