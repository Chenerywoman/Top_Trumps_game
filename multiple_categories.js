const prompt = require('prompt-sync')({sigint: true});

const witchesWizards = [

    {
        name: "Gilderoy Lockhart",
        courage: 22,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22,

    },
    {
        name: "Albus Potter",
        courage: 29,
        potions: 11, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22,

    },
    {
        name: "Rubeus Hagrid",
        courage: 28,
        potions: 15, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    },
    {
        name: "Cho Chang",
        courage: 27,
        potions: 18, 
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
        wandPower: 22,

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
        wandPower: 22,
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
        wandPower: 22,
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
        wandPower: 22,
    },
    {
        name: "Albus Dumbledore",
        courage: 25,
        potions: 10, 
        spells: 29,
        broomSkill: 15,
        wandPower: 22

    }
];

// const compareCards = (card, property) => {
//     return card[property]
// }

const cardsToShuffle = [...witchesWizards];

const limbo = [];
const playerOne = [];
const playerTwo = [];
let playerTurn = 1;
const categories = ['courage', 'potions', 'spells', 'broomSkill', 'wandPower'];
const categoryQuestion = "Please choose one of the following categories: courage, potions, spells, broomSkill, wandPower: ";
let category = "";

for (i = 0; i < 30; i++) {
    let randomInt = Math.floor(Math.random() * cardsToShuffle.length)
    playerTurn == 1 ? playerOne.push(cardsToShuffle[randomInt]) : playerTwo.push(cardsToShuffle[randomInt]);
    cardsToShuffle.splice(randomInt, 1);
    playerTurn == 1 ? playerTurn = 2 : playerTurn = 1;
}

while (playerOne.length > 0 && playerTwo.length > 0) {

    category = prompt(categoryQuestion,'courage');
    while (!categories.includes(category)){
        console.log(`${category} is not one of the categories.`)
        category = prompt(categoryQuestion, 'courage')
    } 
    console.log(`Thanks. The category this round is ${category}.`)
    
    if (playerOne[0][category] > playerTwo[0][category]) {
        playerOne.push(playerTwo[0]);
        playerTwo.shift();

        if (limbo.length > 0) {
       
            for (i = 0; i < limbo.length; i++){
                playerOne.push(limbo[i])
            }

            limbo.splice(0, limbo.length)

        }
    }
    else if (playerTwo[0][category] > playerOne[0][category]) {
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

    if (playerOne.length > 0 && playerTwo.length > 0) {
        console.log(`This round: Player 1 ${category}:${playerOne[0][category]}, total cards: ${playerOne.length}; player 2 ${category}:${playerTwo[0][category]}; total cards ${playerTwo.length}; cards in limbo: ${limbo.length}`)
    }
}

playerOne.length == 30 && limbo.length == 0 ? console.log(`player 1 wins`) : console.log("player 2 wins");