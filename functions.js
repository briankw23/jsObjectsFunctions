console.log("functions");

// function expressions

/*var a = function(){
    console.log(3);
};
*/
//functions declarations

/*functions b () {
    console.log("b", 2)
}
*/
var num = 3;

function numPrinter (monkeybutt) {
    console.log("my number:", monkeybutt);
};

numPrinter(num);

function cat() {
    return "love them";
}

var message =cat();
console.log("message:",message);

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
        isFavorite:false
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
        isFavorite:false
    }
    
    ];
//display each pet as a card


    function domStringMaker(aninmalArray){
        for (var i = 0; i < aninmalArray.length; i++) {
            var animalString ="";
            if(aninmalArray[i].isFavorite){
                animalString+= "<div class='pet isFavorite'>"
            } else{
                animalString+= "<div class='pet isNotFavorite'>"
            }
            animalString+= "<div class='pet'>"
            animalString+= "<h1>" + aninmalArray[i].petName+ "</h1>";
            animalString+= "<h3> Owner:" + aninmalArray[i].instructorName+ "</h3>";
            animalString+= "<h3> Type:" + aninmalArray[i].animalType+ "</h3>";
            animalString+= "</div>"
            console.log("animalString", animalString)
            printToDom(animalString, "pet-names");   
         }
    }

    function printToDom(stringToPrint, divID){
       var myDiv = document.getElementById(divID);
       console.log("myDiv:", myDiv);
       myDiv.innerHTML += stringToPrint;
    }

    domStringMaker(instructorPets);
