

X=10;
Y=10;
document.write(X===Y);

X="5";
Y=10;
document.write(X===Y);

X="10";
Y=10;
document.write(X===Y);

X=150;
Y=10;
document.write(X===Y);

document.write(10>8 && 10>6);

document.write(10>20 && 10>4);

document.write(4>5 || 5>2);

document.write(6>2 || 7>4);

document.write(typeof "Word") ;

X=10;
Y=10;
document.write(X===Y);

function my_Function_1 () {
    document.getElementById("Test_1").innerHTML = 0/0;
}
    
function my_Function_2 () {
    document.getElementById("Test_2").innerHTML = isNan('These are words in a string');
}

function my_Function_3 () {
document.getElementById("Test_3").innerHTML =isNaN('101');
}

function my_Function_4 () {
    document.getElementById("Test_4").innerHTML =document.write(2E310);
}

function my_Function_5 () {
    document.getElementById("Test_5").innerHTML =document.write(-2E310);
}

function my_Function_6 () {
    document.getElementById("Test_6").innerHTML =document.write(20>12);
}

function my_Function_7 () {
    document.getElementById("Test_7").innerHTML =document.write(8>12);
}

function my_Function_8 () {
    document.getElementById("Test_8").innerHTML =document.write("7"+11);
}

function my_Function_9 () {
    document.getElementById("Test_9").innerHTML =document.write(100 == 100);
}

function my_Function_10 () {
    document.getElementById("Test_10").innerHTML =document.write(10 == 100);
}

function not_Function_1 () {
    document.getElementById("Not").innerHTML =document.write=!(30>21);
}

function not_Function_2 () {
    document.getElementById("Not").innerHTML =document.write=!(5>21);
}
