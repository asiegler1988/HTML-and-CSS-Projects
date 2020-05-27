function Addition_Operation() {
    var addition = 4+5;
    document.getElementById("Math").innerHTML="4+5="+addition;
}

function Subtraction_Operation() {
    var subtraction = 10-5;
    document.getElementById("Math").innerHTML="10-5="+subtraction;
}

function Multiplication () {
    var simple_Math = 10*2;
    document.getElementById("Math").innerHTML="10*2="+simple_Math;
}

function Division () {
    var simple_Math = 45/5;
    document.getElementById("Math").innerHTML="45/5="+simple_Math;
}

function more_Math () {
        var simple_Math = (2+3) * 5 / 1 - 3;
        document.getElementById("Math").innerHTML = "2 plus 3, multiplied by 5, divided by 1, and then subtracted by three equals" + simple_Math;        
}

function modulus_Operator () {
    var simple_Math = 30 % 7;
    document.getElementById("Math").innerHTML = "When you divide 30 by 7 you have a remainder of: " + simple_Math;
}

function negation_Operator () {
    var x = 5;
    document.getElementById("Math").innerHTML = -x;
}

    var X = 10;
    X++;
    document.write(X);

    var X = 11;
    X--;
    document.write(X);

    window.alert(Math.random()*50);

    document.getElementById("Math").innerHTML = Math.sqrt(4);
