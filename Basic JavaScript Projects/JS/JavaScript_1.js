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