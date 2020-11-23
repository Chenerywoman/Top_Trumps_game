const { addOrUpdate, getHighest } = require('./helpers');

const prompt = require('./prompt-sync')({sigint: true});

class Graduate {
    constructor(name, matriculation, wand, potions, spells, courage){
        this._name = name,
        this._matriculation = matriculation,
        this._potions = potions;
        this._spells = spells;
        this._wand = wand;
        this._courage = courage;
    }
        get name() {
            return this._name;
        }
        get matriculation(){
            return this._matriculation;
        }
        get wand(){
            return this._wand;
        }
        get potions() {
            return this._potions;
        }
        get spells(){
            return this._spells;
        }
        get courage(){
            return this._courage;
        }
}

const albusDumbledore = new Graduate("Albus Dumbledore", 1892, 15, 4, 7, 27);
const harryPotter = new Graduate("Harry Potter", 1991, 11, 7, 4, 30 );
const severusSnape = new Graduate("Severus Snape", 1971, 13, 2, 9, 26);
const siriusBlack = new Graduate("Sirius Black", 1971, 12, 6, 5, 22);
const ronWeasley = new Graduate("Ron Weasley", 1991, 14, 11, 4, 29);
const hermioneGranger = new Graduate("Hermione Granger", 1991, 10, 5, 3, 29);
const tomRiddle = new Graduate("Tom Riddle", 1938, 13, 11, 10, 25);
const cedricDiggory = new Graduate("Cedric Diggory", 1989, 12, 2, 4, 21);
const bellatrixLeStrange = new Graduate("Bellatrix LeStrange", 1962, 12, 7, 8, 23);
const rubeusHagrid = new Graduate("Rubeus Hagrid", 1940, 16, 1, 3, 24);
const fleurDelacour = new Graduate("Fleur Delacour", 1994, 9, 7, 2, 12);
const ginnyWeasley = new Graduate("Ginny Weasley", 1992, 7, 12, 2, 20);
const argusFinch = new Graduate("Argus Filch", 1973, 0, 5, 1);
const remusLupin = new Graduate("Remus Lupin", 1971, 0, 4, 8, 19);
const lunaLovegood = new Graduate("Luna Lovegood", 1992, 6, 2, 1, 11);
const dracoMalfoy = new Graduate("Draco Malfoy", 1991, 10, 4, 4, 18);
const mollyWeasley = new Graduate("Molly Weasley", 1961, 24, 1, 17);
const nevilleLongbottom = new Graduate("Neville Longbottom", 1991, 13, 4, 1, 25);
const minervaMcGonagall = new Graduate("Minerva McConagall", 1947, 9, 8, 6, 16);
const sybillTrelawney = new Graduate("Sybill Trelawney", 1973, 7, 4, 1, 3);
const nymphadoraTonks = new Graduate("Nymphadora Tonks", 1984, 14, 4, 2, 4);
const horaceSlughorn = new Graduate("Horace Slughorn", 1931, 10, 8, 2, 9);
const victorKrum = new Graduate("Victor Krum", 1994, 10, 2, 5, 7);
const gilderoyLockhart = new Graduate("Gilderoy Lockhart", 1992, 9, 11, 2, 6);
const arthurWeasley = new Graduate("Arthur Weasley", 1961, 12, 22, 2, 15);
const luciusMalfoy = new Graduate("Lucius Malfoy", 1965, 18, 4, 7, 14);
const choChang = new Graduate("Cho Chang", 1990, 6, 2, 2, 5);
const peterPettigrew = new Graduate("Peter Pettigrew", 1971, 1, 9, 6, 13);
const fredWeasley = new Graduate("Fred Weasley", 1985, 10, 12, 8, 12 );
const georgeWeasley = new Graduate("George Weasley", 1985, 10, 13, 7, 12);

const graduates = [albusDumbledore, harryPotter, severusSnape, siriusBlack, ronWeasley, hermioneGranger, tomRiddle, cedricDiggory, bellatrixLeStrange, rubeusHagrid, fleurDelacour, ginnyWeasley, argusFinch, remusLupin, lunaLovegood, dracoMalfoy, mollyWeasley, nevilleLongbottom, minervaMcGonagall, sybillTrelawney, nymphadoraTonks, horaceSlughorn, victorKrum, gilderoyLockhart, arthurWeasley, luciusMalfoy, choChang, peterPettigrew, fredWeasley, georgeWeasley]

const cardsToShuffle = [...graduates];

const limbo = [];
const playerOne = [];
const playerTwo = [];
let playerTurn = 1;
const categories = ['matriculation', 'wand', 'potions', 'spells', 'courage'];
const categoryQuestion = "Please choose one of the following categories: matriculation, wand, potions, spells, courage: ";
let category = "";
const winningCards = []

for (i = 0; i < 30; i++) {
    let randomInt = Math.floor(Math.random() * cardsToShuffle.length)
    playerTurn == 1 ? playerOne.push(cardsToShuffle[randomInt]) : playerTwo.push(cardsToShuffle[randomInt]);
    cardsToShuffle.splice(randomInt, 1);
    playerTurn == 1 ? playerTurn = 2 : playerTurn = 1;
}

while (playerOne.length > 0 && playerTwo.length > 0) {

    let roundWinner = "player";

    category = prompt(categoryQuestion,'courage');
    while (!categories.includes(category)){
        console.log(`${category} is not one of the categories.`)
        category = prompt(categoryQuestion, 'courage')
    } 
    console.log(`Thanks. The category this round is ${category}.`)
    
    if (playerOne[0][category] > playerTwo[0][category]) {

        roundWinner = "Player one";
        
        addOrUpdate(playerOne[0].name, winningCards)

        console.log(`This round ${roundWinner} wins: Player 1 card: ${playerOne[0].name}, ${category}: ${playerOne[0][category]} v player 2 card: ${playerTwo[0].name}, ${category}: ${playerTwo[0][category]}`)

        playerOne.push(playerTwo[0]);
        playerTwo.shift();
        let frontCard = playerOne.shift();
        playerOne.push(frontCard);

        if (limbo.length > 0) {
       
            for (i = 0; i < limbo.length; i++){
                playerOne.push(limbo[i])
            }

            limbo.splice(0, limbo.length)

        }

    }
    else if (playerTwo[0][category] > playerOne[0][category]) {
        
        roundWinner = "Player two";

        addOrUpdate(playerTwo[0].name, winningCards)

        console.log(`This round ${roundWinner} wins: Player 1 card: ${playerOne[0].name}, ${category}: ${playerOne[0][category]} v player 2 card: ${playerTwo[0].name}, ${category}: ${playerTwo[0][category]}`)
       
        playerTwo.push(playerOne[0]);
        playerOne.shift();
        let frontCard = playerTwo.shift();
        playerTwo.push(frontCard);

        if (limbo.length > 0) {
    
            for (i = 0; i < limbo.length; i++){
                playerTwo.push(limbo[i])
            }

            limbo.splice(0, limbo.length)

        }

    } else {

        roundWinner = "no player";

        console.log(`This round ${roundWinner} wins: Player 1 card: ${playerOne[0].name}, ${category}: ${playerOne[0][category]} v player 2 card: ${playerTwo[0].name}, ${category}: ${playerTwo[0][category]}`);

        limbo.push(playerOne[0], playerTwo[0])
        playerOne.shift();
        playerTwo.shift();
    }

    if (playerOne.length > 0 && playerTwo.length > 0) {
        console.log(`Following this round: player 1 total cards: ${playerOne.length}; player 2 total cards ${playerTwo.length}; cards in limbo: ${limbo.length}`)
    }
}

playerOne.length == 30 && limbo.length == 0 ? console.log(`player 1 wins`) : console.log("player 2 wins");
getHighest(winningCards)
console.log(`The card(s) which won the most rounds this game: ${getHighest(winningCards)}`)
