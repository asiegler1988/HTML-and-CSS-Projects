function my_Dictionary () {
    var Animal = {
        Species:"Derp",
        Color:"Cinnamon",
        Breed:"Corghuahua",
        Age:3,
        Sound:"Blep!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}