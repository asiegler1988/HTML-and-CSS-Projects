function Dessert_Function () {
    var Dessert_Output ;
    var Desserts = document.getElementById("Dessert_Output").value;
    var Dessert_String = " is a great dessert!" ;
    switch (Desserts) {
        case "Chocolate Torte" + Dessert_String;
        break;
        case "Lemon Merangue Pie" + Dessert_String;
        break;
        case "Chocolate Chip Cookies" + Dessert_String;
        break;
        case "Cherry Pie" + Dessert_String;
        break;
        case "Apple Pie" + Dessert_String;
        break;
        case "Pecan Pie" + Dessert_String;
        break;
        case "Brownies" + Dessert_String;
        break;
        default;
        Color_Output = "Please enter a dessert exactly as written on the above list. :)";
    }
    document.getElementById("Output").innerHTML = Dessert_Output;
}

function Hello_World_Function () {
    var A = document.getElementsByClassName("Click2");
    A[0].innerHTML = "This text has changed!";
}

function myCanvas() {
    var c = document.getElementById("CanvasFunction");
    var ctx = c.getContext("2d");
    var img = document.getElementById("SpaceForce");
    ctx.drawImage(img,10,10);
}


var c = document.getElementById("aCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);