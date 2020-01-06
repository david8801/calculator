var input = document.getElementById("input");
var equal = document.getElementById("equal");
var zn;
var answ;
var inpu1;
var inpu2;
let counter =0;
let neg = true;
let enter =0;


function AC() {
    var input = document.getElementById("input");
    input.value = "0";
    neg = true
}

function percent() {
    input.value = input.value * 0.01;
}

function negative(id) {
    var active = document.getElementsByClassName("active");
    var elem = document.getElementById(id);

    if (active.length != 0){
        neg = true;
    }

    neg ? elem.classList.add("true") : elem.classList.remove("true");
    neg = !neg;
    elem.classList.contains("true") ? input.value = "-" + input.value : input.value = input.value.substr(1);
}

function addNum(num) {
    var active = document.getElementsByClassName("active");
    var symbol = document.getElementsByClassName("symbol");
    var input = document.getElementById("input");
    let inp1;
    let inp2;

    if(counter==0) {
        if (active.length != 0 && num !== "=") {
            inp1 = input.value;
            equals(inp1, undefined)
        }

        if (active.length == 1) {
            input.value = "";
            for (var i = 0; i < active.length; i++) {
                active[i].classList.remove("active")
            }
        }


        if (input.value != "0" && num !== "=" || num == ".") {
            input.value += num;
        }


        if (input.value == "0") {
            input.value = num;
        }
    }else{
        input.value = input.value.slice(0, input.value.length - counter) + num + input.value.slice(input.value.length -counter, input.value.length)

    }

    if (num=="=" ){
        equals(undefined, input.value)

    }

}

function symbol(symb, element) {
    var active = document.getElementsByClassName("active");
    var elem = document.getElementById(element);
    var action = document.getElementsByClassName("symbol");
    neg = true;
    if (active.length <1) {
        elem.classList.add("active");
    } else {
        for (i = 0; i<action.length; i++){
            action[i].classList.remove("active");
            elem.classList.add("active");
        }
    }
    zn = symb;
    switch (symb) {
        case "÷" : zn="/"; break;
        case "×" : zn="*"; break;
    }

}

function equals(val1, val2) {
    var history  = document.getElementById("history");
    var input = document.getElementById("input");
    let answer;
    if(val1!== undefined){
        inpu1 = Number(val1)
    }
     if(val2!== undefined){
        inpu2 = Number(val2)
     }
     if (inpu1 !== undefined && inpu2 !== undefined) {
         if (enter ==1) {
             switch (zn) {
                 case "/":
                     answer = inpu1 / inpu2;
                     history.innerHTML += "<p>" + inpu1 + " / " + inpu2 + " = " +  answer.toFixed(2).toString() + "</p>";
                     break;
                 case "*":
                     answer = inpu1 * inpu2;
                     history.innerHTML += "<p>" + inpu1 + " * " + inpu2 + " = " +  answer.toFixed(2).toString() + "</p>";
                     break;
                 case "-":
                     answer = inpu1 - inpu2;
                     history.innerHTML += "<p>" + inpu1 + " - " + inpu2 + " = " +  answer.toFixed(2).toString() + "</p>";
                     break;
                 case "+":
                     answer = inpu1 + inpu2;
                     history.innerHTML += "<p>" + inpu1 + " + " + inpu2 + " = " +  answer.toFixed(2).toString() + "</p>";
                     break;
                 default :
                     return null
             }
             input.value = answer.toFixed(2);
             enter--
         }
     }
}
input.focus();
var tmpStr = input.value;
input.value= '';
input.value =tmpStr ;

function crop() {
    input.value = input.value.slice(0, -1);
    if (input.value.length==0){
        input.value = "0";
    }
}
function counts(arrow) {
    console.log(arrow);
    var number = document.getElementById("input");
    var left = document.getElementById("left");
    if (arrow == "←") {
        counter += 1;
    } else if (arrow == "→" && counter >0){
        counter-=1;
    }
    if (counter>0){
        var part1 = number.value.slice(0, number.value.length - counter);
        var part2 = number.value.slice(number.value.length -counter, number.value.length);
        number.value ="";
        number.value += part1;
        number.value +=part2;

        const ke = new KeyboardEvent("keydown", {
            bubbles: true, cancelable: true, keyCode: 37
        });
        dispatchEvent(ke);
    }
}

