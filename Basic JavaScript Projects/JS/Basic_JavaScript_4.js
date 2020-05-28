function my_Dictionary () {
    var Animal = {
        Species:"Doggo!",
        Color:"Cinnamon!",
        Breed:"Corghuahua!",
        Age:3,
        Sound:"Blep!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Age;

    delete Animal.Age;
    document.getElementById("Dictionary").innerHTML = Animal.Age;
}
