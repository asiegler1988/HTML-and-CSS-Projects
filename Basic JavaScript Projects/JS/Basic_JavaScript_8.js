function full_sentence () {
    var part_1 = "🎶 Here's the story, ";
    var part_2 = "of a lovely lady, "; 
    var part_3 = "who was bringing up three very lovely girls... 🎶";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method () {
    var Sentence = "A sentence regarding pie seems appropriate in a function about slices.";
    var Section = Sentence.slice(11,24) ;
    document.getElementById("Slice").innerHTML = Section;
}

function uppercase_method () {
    var str = "To uppercase and beyond!";
    var res = str.toUpperCase();
    document.getElementById("UpperCase").innerHTML = res;
}

function string_method () {
var str = "The monkey is eating a banana.";
var n = str.search("monkey");
document.getElementById("demo").innerHTML = n;
}

function string_method () {
    var X = 304;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
}

function Precision_Method () {
    var X = 12345.678;
    document.getElementById("Precision").innerHTML = X.toPrecision(6);
}

function Fixed_Method () {
    var num = 3.4678;
    var n = num.toFixed(3);
    document.getElementById("Fixed").innerHTML = n;
}

function Value_Method () {
    var Dogs = ["Corgi" , "Daschund" , "Boxer" , "Chihuahua"];
    document.getElementById("Array").innerHTML = Dogs.valueOf();
}