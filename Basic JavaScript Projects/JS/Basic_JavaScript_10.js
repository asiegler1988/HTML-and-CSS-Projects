function count_to_ten () {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function counting_function () {
    var str = "My dog's name is Charlie.";
    var n = str.length;
    document.getElementById("string_count").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop () {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content
}

function Waitstaff_Functions () {
    var Waitstaff_Function = [];
    Waitstaff_Function[0] = "Waiting Tables";
    Waitstaff_Function[1] = "Yelling at the Chef";
    Waitstaff_Function[2] = "Seating Customers";
    Waitstaff_Function[3] = "Complaining about Customers";
    Waitstaff_Function[4] = "Serving Food";
    document.getElementById("Restaurant").innerHTML = "In this picture, the waitstaff is " +
        Waitstaff_Function[1] + ".";
}