const witchesWizards = [

    {
        name: "Gilderoy Lockhard",
        courage: 22

    },
    {
        name: "Albus Potter",
        courage: 29

    },
    {
        name: "Rubeus Hagrid",
        courage: 28

    },
    {
        name: "Cho Chang",
        courage: 27

    },
    {
        name: "Luna Lovegood",
        courage: 26

    },
    {
        name: "Ron Weasley",
        courage: 25
    },
    {
        name: "Neville Longbottom",
        courage: 48

    },
    {
        name: "Fred Weasley",
        courage: 29

    },
    {
        name: "George Weasley",
        courage: 29

    },
    {
        name: "Newt Schamander",
        courage: 21

    },
    {
        name: "Draco Malfoy",
        courage: 15

    },
    {
        name: "Ginny Weasley",
        courage: 19

    },
    {
        name: "Padma Patil",
        courage: 18

    },
    {
        name: "Cedric Diggory",
        courage: 32

    },
    {
        name: "James Potter",
        courage: 25

    },
    {
        name: "Bill Weasley",
        courage: 25

    },
    {
        name: "Filius Flitwick",
        courage: 25

    },
    {
        name: "Lucius Malfoy",
        courage: 25
    },
    {
        name: "Molly Weasley",
        courage: 25

    },
    {
        name: "Sirius Black",
        courage: 25

    },
    {
        name: "Lily Potter",
        courage: 25

    },
    {
        name: "Harry Potter",
        courage: 25

    },
    {
        name: "Horace Slughorn",
        courage: 25

    },
    {
        name: "Hermione Granger",
        courage: 25

    },
    {
        name: "Remus Lupin",
        courage: 25

    },
    {
        name: "Bellatrix Lestrange",
        courage: 25

    },
    {
        name: "Minerva McGonagall",
        courage: 25

    },
    {
        name: "Severus Snape",
        courage: 25

    },
    {
        name: "Tom Riddle",
        courage: 25

    },
    {
        name: "Albus Dumbledore",
        courage: 25

    },
];

const cardsToShuffle = [...witchesWizards];

const limbo = [];
const playerOne = [];
const playerTwo = [];
let playerTurn = 1;

for (i = 0; i < 30; i++) {
    let randomInt = Math.floor(Math.random() * cardsToShuffle.length)
    playerTurn == 1 ? playerOne.push(cardsToShuffle[randomInt]) : playerTwo.push(cardsToShuffle[randomInt]);
    cardsToShuffle.splice(randomInt, 1);
    playerTurn == 1 ? playerTurn = 2 : playerTurn = 1;
}

while (playerOne.length > 0 && playerTwo.length > 0) {

    console.log(`player 1 card:${playerOne[0].courage}, player 2 card:${playerTwo[0].courage}; player 1 total: ${playerOne.length}, player 2 total ${playerTwo.length}, limbo total: ${limbo.length}`)

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