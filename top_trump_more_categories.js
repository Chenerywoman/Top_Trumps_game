const witchesWizards = [

    {
        name: "Gilderoy Lockhart",
        courage: 22,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Albus Potter",
        courage: 29,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Rubeus Hagrid",
        courage: 28,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Cho Chang",
        courage: 27,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Luna Lovegood",
        courage: 26,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Ron Weasley",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22
    },
    {
        name: "Neville Longbottom",
        courage: 48,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22
    },
    {
        name: "Fred Weasley",
        courage: 29,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "George Weasley",
        courage: 29,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22
    },
    {
        name: "Newt Schamander",
        courage: 21,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Draco Malfoy",
        courage: 15,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22
    },
    {
        name: "Ginny Weasley",
        courage: 19,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22
    },
    {
        name: "Padma Patil",
        courage: 18,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Cedric Diggory",
        courage: 32,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "James Potter",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Bill Weasley",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Filius Flitwick",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Lucius Malfoy",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22
    },
    {
        name: "Molly Weasley",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Sirius Black",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Lily Potter",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Harry Potter",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Horace Slughorn",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Hermione Granger",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Remus Lupin",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Bellatrix Lestrange",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Minerva McGonagall",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Severus Snape",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Tom Riddle",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Albus Dumbledore",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
];

const cardsToShuffle = [...witchesWizards];

const limbo = [];
const playerOne = [];
const playerTwo = [];
let playerTurn = 1;
let category = "";

let newGamePara = document.getElementsByClassName("game")[1];
let shuffleButton = document.getElementsByClassName("shuffle")[0];

let selectCategoriesPara = document.getElementsByClassName("categories")[0];
let selectCategoriesLabel = document.getElementsByTagName("label")[0];
let selectCategoriesButton = document.getElementsByTagName("select")[0];

let compareButton = document.getElementsByClassName("compare")[1];
let comparePara = document.getElementsByClassName("compare")[0];


const hideElements = (element) => {
    element.style.display = "none";
}

const showElements = (element) => {
    element.style.display = "inline-block";
}

shuffleButton.addEventListener("click", () => {

    hideElements(shuffleButton);
    hideElements(newGamePara);
    showElements(selectCategoriesPara);
    showElements(selectCategoriesLabel);
    showElements(selectCategoriesButton);

    if (playerTurn == 1) {
        document.getElementsByClassName("round categories")[0].getElementsByClassName("two")[0].style.display = "none";
    } else {
        document.getElementsByClassName("round categories")[0].getElementsByClassName("one")[0].style.display = "none";
    }
})




 // showElements(compareButton);
    // showElements(comparePara);


for (i = 0; i < 30; i++) {
    let randomInt = Math.floor(Math.random() * cardsToShuffle.length)
    playerTurn == 1 ? playerOne.push(cardsToShuffle[randomInt]) : playerTwo.push(cardsToShuffle[randomInt]);
    cardsToShuffle.splice(randomInt, 1);
    playerTurn == 1 ? playerTurn = 2 : playerTurn = 1;
}

while (playerOne.length > 0 && playerTwo.length > 0) {   

    if (playerOne[0].courage > playerTwo[0].courage) {
        playerOne.push(playerTwo[0]);
        playerTwo.shift();

        if (limbo.length > 0) {
       
            for (i = 0; i < limbo.length; i++){
                playerOne.push(limbo[i])
            }

            limbo.splice(0, limbo.length)

        }
    }
    else if (playerTwo[0].courage > playerOne[0].courage) {
        playerTwo.push(playerOne[0]);
        playerOne.shift();

        if (limbo.length > 0) {
    
            for (i = 0; i < limbo.length; i++){
                playerTwo.push(limbo[i])
            }

            limbo.splice(0, limbo.length)

        }

    } else {
        limbo.push(playerOne[0], playerTwo[0])
        playerOne.shift();
        playerTwo.shift();
    }

}

playerOne.length == 30 ? console.log(`player 1 wins`) : console.log("player 2 wins");






