var favAnimals = {
    name: "brian",
    animal: "dog"
};

console.log("favAnimals:",favAnimals.animal);

var instructorPets = [
{
    instructorName: "Zoe",
    petName:"Whiskey",
    animalType:"evil cat",
    isFavorite:true
},
{
    instructorName: "Callan",
    petName:"Seymour",
    animalType:"one eyed dog",
    isFavorite:true
},
{
    instructorName: "Callan",
    petName:"Wiley",
    animalType:"destructive dog",
    isFavorite:true
},
{
    instructorName: "Lauren",
    petName:"Frankie",
    animalType:"sweet dog",
    isFavorite:true
}

];

console.log("instructorPets:",instructorPets);

var output = "<h1>";

for (var i = 0; i < instructorPets.length; i++) {

   output += instructorPets[i].petName + "</br>";
    
}

output += "</h1>";

document.getElementById("pet-names").innerHTML = output;