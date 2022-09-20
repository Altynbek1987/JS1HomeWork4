let num = 0

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const countdown = document.getElementById('coundown')

minus.addEventListener("click",function(){
    num--;
    countdown.innerHTML = num;
    if (num < 0) {
        countdown.style = "color: red";
    }else if(num == 0){
        countdown.style = "color: black";
    }
});

plus.addEventListener("click", function(){
    num++;
    countdown.innerHTML = num;
    if (num > 0) {
        countdown.style = "color: blue";
    }else if(num == 0){
        countdown.style = "color: black";
    }
});