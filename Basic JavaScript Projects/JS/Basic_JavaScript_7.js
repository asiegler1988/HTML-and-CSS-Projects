function count_Function_1() {
    document.getElementById("Counting").innerHTML = Count() ;
    function Count () {
        var Starting_point = 12;
        function Plus_three() {Starting_point += 3;}
        Plus_three () ;
        return Starting_point ;
    }
}

var X = 20;
function Add_numbers_1() {
    document.write(30 + X + "<br>") ;
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X = 5;
    document.write(50 + X + "<br>");
}
function Add_numbers_2 () {
    X = 100;
    document.write(X + 100);
}
Add_numbers_1 ();
Add_numbers_1 ();

function get_Date () {
    if (new Date ().getHours() <11) {
    document.getElementById("Greeting").innerHTML = "Good morning!";
    }
    if (new Date ().getHours() <17) {
    document.getElementById("Greeting").innerHTML = "Good afternoon!";
    }
    if (new Date ().getHours() <24) {
    document.getElementById("Greeting").innerHTML = "Good evening!";
    }
}