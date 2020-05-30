function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Cake(CFTop, CFBottom, Frosting, Event) {
    this.Cake_Flavor_Top = CFTop;
    this.Cake_Flavor_Bottom = CFBottom;
    this.Cake_Frosting = Frosting;
    this.Cake_Event = Event;
}

    var Juliette = new Cake("Chocolate", "Vanilla", "Buttercream", "Birthday");
    var Charlie = new Cake("Raspberry", "Ganache", "Mixed Berry", "Wedding Cake");
    var Alex = new Cake("Carrot Cake", "Vanilla", "Buttercream", "Bar Mitzvah");
    function FunctionCake() {
        document.getElementById("New_and_This").innerHTML =
        "Charlie makes a " + Charlie.Cake_Flavor_Top + "-flavored " + Charlie.Cake_Flavor_Bottom + "with " + Charlie.Cake_Frosting +
        Charlie.Cake_Event;
}

function count_Function () {
    document.getElementById("Nested_Function").innerHTML = Count () ;
    function Count () {
        var Starting_point = 12;
        function Plus_two() {Starting_point += 2;}
        Plus_two () ;
        return Starting_point;
        }
}



