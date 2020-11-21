class Graduate {
    constructor(name, matriculation, wand, potions, spells, courage, image){
        this._name = name,
        this._matriculation = matriculation,
        this._potions = potions;
        this._spells = spells;
        this._wand = wand;
        this._courage = courage;
        this._image = image;
        this._alt = name;
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
        get image(){
            return this._image;
        }
        get alt(){
            return this._name;
        }
}

const albusDumbledore = new Graduate("Albus Dumbledore", 1892, 15, 4, 7, 27, "https://cutewallpaper.org/21/dumbledore-images/Jude-Law-to-Play-Young-Dumbledore-in-Fantastic-Beasts-Sequel.jpg");
const harryPotter = new Graduate("Harry Potter", 1991, 11, 7, 4, 3, "https://imageproxy.themaven.net//https%3A%2F%2Fwww.biography.com%2F.image%2FMTQ3OTg2NjQ0NDg0NDk4OTEx%2Fhp_cropped_gettyimages-113941726.jpg" );
const severusSnape = new Graduate("Severus Snape", 1971, 13, 2, 9, 26, "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-harry-potter-alan-rickman.jpg");
const siriusBlack = new Graduate("Sirius Black", 1971, 12, 6, 5, 22, "https://static.wikia.nocookie.net/harrypotter/images/b/bc/OOTP_promo_front_closeup_Sirius_Black.jpg/revision/latest?cb=20150918055024");
const ronWeasley = new Graduate("Ron Weasley", 1991, 14, 11, 4, 29, "https://1.bp.blogspot.com/-_dWDlmiEwSE/Wr-CeiguKBI/AAAAAAAAFNk/ZnXzV6LL0e0PKfjQQG5qsgJKhJoNreZ-ACLcBGAs/s1600/Ron%2BWeasley%2B%2528I%2529.jpg");
const hermioneGranger = new Graduate("Hermione Granger", 1991, 10, 5, 3, 29, "https://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest?cb=20141230074301");
const tomRiddle = new Graduate("Tom Riddle", 1938, 13, 11, 10, 25, "https://www.google.com/search?q=pictures+of+tom+riddle&rlz=1C5CHFA_enGB769GB770&sxsrf=ALeKk01kbbNIJBhBgR7CNJ4a8SFOXOh00Q:1605550096961&tbm=isch&source=iu&ictx=1&fir=W-TJlj6tM82eEM%252C00TVcE3Avzr1zM%252C_&vet=1&usg=AI4_-kQpX-b6sU6-nXjGK5Q73qNfOnn1Og&sa=X&ved=2ahUKEwiE4MqZ1IftAhUIHcAKHcrNBLsQ9QF6BAgFEDU&biw=1920&bih=1001#imgrc=W-TJlj6tM82eEM");
const cedricDiggory = new Graduate("Cedric Diggory", 1989, 12, 2, 4, 21, "https://static.wikia.nocookie.net/harrypotter/images/9/90/Cedric_Diggory_Profile.png/revision/latest?cb=20161123045136");
const bellatrixLeStrange = new Graduate("Bellatrix LeStrange", 1962, 12, 7, 8, 23, "https://media.beliefnet.com/~/media/photos-with-attribution/entertainment/celebrities/bellatrix_lestrange_helena_bonham_carter/bellatrix-lestrange-10_credit-warner-bros.jpg?as=1&extension=webp");
const rubeusHagrid = new Graduate("Rubeus Hagrid", 1940, 16, 1, 3, 24, "https://static.wikia.nocookie.net/harrypotter/images/f/fe/Rubeus_Hagrid.png/revision/latest?cb=20161123044204");
const fleurDelacour = new Graduate("Fleur Delacour", 1994, 9, 7, 2, 12, "https://images.ctfassets.net/usf1vwtuqyxm/1FGP9adjbqe4Q8AgGaIQIC/1de41e9d4dd4eb2de0a63fe369989fe5/FleurDelacour_WB_F4_FleurDelacourCloseup_Still_080615_Land.jpg?w=914");
const ginnyWeasley = new Graduate("Ginny Weasley", 1992, 7, 12, 2, 20, "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/b/40/b402a776-942a-11e3-b3c3-0017a43b2370/52fbe4691cc2e.preview-300.jpg?crop=300%2C300%2C0%2C50&resize=1200%2C1200&order=crop%2Cresize");
const argusFinch = new Graduate("Argus Filch", 1973, 6, 5, 1, 8,"https://static.wikia.nocookie.net/harrypotter/images/c/c8/Mainfulcd.jpg/revision/latest?cb=20200413210532");
const remusLupin = new Graduate("Remus Lupin", 1971, 0, 4, 8, 19, "https://static.wikia.nocookie.net/harrypotterfanon/images/0/0c/Remus_lupin.jpg/revision/latest/top-crop/width/360/height/450?cb=20170802175350");
const lunaLovegood = new Graduate("Luna Lovegood", 1992, 6, 2, 1, 11, "https://images.ctfassets.net/usf1vwtuqyxm/t6GVMDanqSKGOKaCWi8oi/74b6816d9f913623419b98048ec87d25/LunaLovegood_WB_F5_LunaLovegoodPromoCloseUp_Promo_080615_Port.jpg");
const dracoMalfoy = new Graduate("Draco Malfoy", 1991, 10, 4, 4, 18, "https://imgix.bustle.com/rehost/2016/9/13/6a08c5f4-def1-4c78-9227-2dbd4c268b6a.jpg");
const mollyWeasley = new Graduate("Molly Weasley", 1961, 24, 1, 17, "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-harry-potter-julie-walters.jpg");
const nevilleLongbottom = new Graduate("Neville Longbottom", 1991, 13, 4, 1, 25, "https://static.wikia.nocookie.net/harrypotter/images/b/b6/Neville_Longbottom.jpg/revision/latest/scale-to-width-down/340?cb=20140610141612");
const minervaMcGonagall = new Graduate("Minerva McConagall", 1947, 9, 8, 6, 16, "https://static.wikia.nocookie.net/harrypotter/images/f/f9/PromoHP1_Minerva_McGonagall_2.jpg/revision/latest/scale-to-width-down/340?cb=20150810173547");
const sybillTrelawney = new Graduate("Sybill Trelawney", 1973, 7, 4, 1, 3, "https://i.pinimg.com/originals/91/eb/1f/91eb1f483557eaf49a99848bde8f5d06.jpg");
const nymphadoraTonks = new Graduate("Nymphadora Tonks", 1984, 14, 4, 2, 4, "https://cdn.staticneo.com/w/harrypotter/thumb/Nymphadora_Tonks.jpg/200px-Nymphadora_Tonks.jpg");
const horaceSlughorn = new Graduate("Horace Slughorn", 1931, 10, 8, 2, 9, "https://www.moviemaniauk.co.uk/assets/professor-horace-slughorn.jpg");
const victorKrum = new Graduate("Victor Krum", 1994, 10, 2, 5, 7, "https://static.wikia.nocookie.net/harrypotter/images/9/93/Viktor_Krum_promo_Yule_Ball.png/revision/latest/top-crop/width/360/height/450?cb=20120207173113");
const gilderoyLockhart = new Graduate("Gilderoy Lockhart", 1992, 9, 11, 2, 6,  "https://static.wikia.nocookie.net/harrypotter/images/d/d4/Gilderoy_Lockhart_COS_promo.jpg/revision/latest/scale-to-width-down/902?cb=20160905192348");
const arthurWeasley = new Graduate("Arthur Weasley", 1961, 12, 22, 2, 15, "https://static.wikia.nocookie.net/p__/images/2/25/Arthur-weasley-1-.jpg/revision/latest?cb=20170123000138&path-prefix=protagonist");
const luciusMalfoy = new Graduate("Lucius Malfoy", 1965, 18, 4, 7, 14, "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-harry-potter-jason-isaacs.jpg");
const choChang = new Graduate("Cho Chang", 1990, 6, 2, 2, 5, "https://static.wikia.nocookie.net/harrypotter/images/1/1e/Cho_Chang.jpg/revision/latest?cb=20180322164130");
const peterPettigrew = new Graduate("Peter Pettigrew", 1971, 1, 9, 6, 13, "https://i.pinimg.com/originals/6f/0e/3a/6f0e3a79374ce894ccfcfc5c81c6675e.jpg");
const fredWeasley = new Graduate("Fred Weasley", 1985, 10, 12, 8, 12, "https://cdn.staticneo.com/w/harrypotter/thumb/Fred.PNG/200px-Fred.PNG" );
const georgeWeasley = new Graduate("George Weasley", 1985, 10, 13, 7, 12, "https://static.wikia.nocookie.net/harrypotterfanon/images/b/be/George_Weasley_II.jpg/revision/latest/top-crop/width/360/height/450?cb=20160417155929");

const graduates = [albusDumbledore, harryPotter, severusSnape, siriusBlack, ronWeasley, hermioneGranger, tomRiddle, cedricDiggory, bellatrixLeStrange, rubeusHagrid, fleurDelacour, ginnyWeasley, argusFinch, remusLupin, lunaLovegood, dracoMalfoy, mollyWeasley, nevilleLongbottom, minervaMcGonagall, sybillTrelawney, nymphadoraTonks, horaceSlughorn, victorKrum, gilderoyLockhart, arthurWeasley, luciusMalfoy, choChang, peterPettigrew, fredWeasley, georgeWeasley]


let shuffleButton = document.getElementsByClassName("shuffle")[0];
let selectCategoriesMenu = document.getElementsByTagName("select")[0];
let compareButton = document.getElementsByClassName("compare")[0];
let moveButton = document.getElementsByClassName("move")[0];

let playerOneTopCard = document.getElementsByClassName("player-one")[0].getElementsByClassName("card")[0];
let playerTwoTopCard = document.getElementsByClassName("player-two")[0].getElementsByClassName("card")[0];

const hideElements = (element) => {
    element.style.display = "none";
}

const showElements = (element) => {
    element.style.display = "inline-block";
}

const populateCards = (element, array) => {
    element.getElementsByTagName("img")[0].src = array[0].image;
    element.getElementsByTagName("img")[0].alt = array[0].alt;
    element.getElementsByClassName("witch-wizard")[0].getElementsByTagName("span")[0].innerText = array[0].name;
    element.getElementsByClassName("matriculation")[0].innerText = array[0].matriculation;
    element.getElementsByClassName("wand")[0].innerText = array[0].wand;
    element.getElementsByClassName("potions")[0].innerText = array[0].potions;
    element.getElementsByClassName("spells")[0].innerText = array[0].spells;
    element.getElementsByClassName("courage")[0].innerText = array[0].courage;
}

const showPlayer = (player, element) => {
    player == 1 ? element.innerText = "One" : element.innerText = "Two";
}

const limbo = [];
const playerOne = [];
const playerTwo = [];
let playerTurn = 1;
let category = "courage";
let roundWinner = 0;

populateCards(document.getElementsByClassName("card-pile")[0].getElementsByClassName("card")[0], graduates);
document.getElementsByClassName("card-pile")[0].getElementsByClassName("number-of-cards")[0].innerHTML = graduates.length;

shuffleButton.addEventListener("click", () => {

    const cardsToShuffle = [...graduates];
    playerOne.splice(0, playerOne.length);
    playerTwo.splice(0, playerTwo.length);

    for (i = 0; i < graduates.length; i++) {
        let randomInt = Math.floor(Math.random() * cardsToShuffle.length)
        playerTurn == 1 ? playerOne.push(cardsToShuffle[randomInt]) : playerTwo.push(cardsToShuffle[randomInt]);
        cardsToShuffle.splice(randomInt, 1);
        playerTurn == 1 ? playerTurn = 2 : playerTurn = 1;
    }

    populateCards(playerOneTopCard, playerOne)
    document.getElementsByClassName("player-one")[0].getElementsByClassName("number-of-cards")[0].innerHTML = playerOne.length;

    populateCards(playerTwoTopCard, playerTwo)
    document.getElementsByClassName("player-two")[0].getElementsByClassName("number-of-cards")[0].innerHTML = playerTwo.length;

    hideElements(document.getElementsByClassName("card-pile")[0]);
    hideElements(shuffleButton);
    hideElements(document.getElementsByClassName("game")[0]);
    hideElements(document.getElementsByClassName("game")[1]);

    showPlayer(playerTurn, document.getElementsByClassName("turn")[0].getElementsByTagName("span")[0])

    showElements(document.getElementsByClassName("turn")[0]);
    showElements(document.getElementsByClassName("player-one")[0]);
    showElements(document.getElementsByClassName("player-two")[0]);
    showElements(document.getElementsByTagName("label")[0]);
    showElements(selectCategoriesMenu);
    showElements(compareButton);

    let div = document.createElement("div");
    let node = document.createTextNode("Hogwarts Top Trumps");
    div.appendChild(node);

    if (playerTurn == 1) {

        playerTwoTopCard.getElementsByTagName("img")[0].style.display = "none";
        playerTwoTopCard.getElementsByTagName("h3")[0].style.display = "none";
        playerTwoTopCard.getElementsByTagName("table")[0].style.display = "none";

        playerTwoTopCard.appendChild(div);
        playerTwoTopCard.getElementsByTagName("div")[0].setAttribute("id", "player_two_back");
        playerTwoTopCard.style.backgroundColor = "#00165e";
        

    } else {
        playerOneTopCard.getElementsByTagName("img")[0].style.display = "none";
        playerOneTopCard.getElementsByTagName("h3")[0].style.display = "none";
        playerOneTopCard.getElementsByTagName("table")[0].style.display = "none";

        playerOneTopCard.appendChild(div);
        playerOneTopCard.getElementsByTagName("div")[0].setAttribute("id", "player_one_back");
        playerOneTopCard.style.backgroundColor = "#00165e";
    }

})

selectCategoriesMenu.addEventListener("change", (event) => {

    category = event.target.value
    console.log(category)

})

compareButton.addEventListener("click", () => {

    if (playerTurn == 1) {

        playerTwoTopCard.getElementsByTagName("img")[0].style.display = "block";
        playerTwoTopCard.getElementsByTagName("img")[0].style.margin = "auto";
        playerTwoTopCard.getElementsByTagName("h3")[0].style.display = "inline-block";
        playerTwoTopCard.getElementsByTagName("table")[0].style.display = "inline-block";

        playerTwoTopCard.style.color = "#00165e";
        playerTwoTopCard.style.backgroundColor = "#9c1203";
    
        playerTwoTopCard.getElementsByTagName("div")[0].remove();

    } else {

        playerOneTopCard.getElementsByTagName("img")[0].style.display = "block";
        playerOneTopCard.getElementsByTagName("img")[0].style.margin = "auto";
        playerOneTopCard.getElementsByTagName("h3")[0].style.display = "inline-block";
        playerOneTopCard.getElementsByTagName("table")[0].style.display = "inline-block";

        playerOneTopCard.style.color = "#00165e";
        playerOneTopCard.style.backgroundColor = "#9c1203";

        playerOneTopCard.getElementsByTagName("div")[0].remove();
    }

        hideElements(document.getElementsByTagName("label")[0]);
        hideElements(selectCategoriesMenu);
        hideElements(document.getElementsByClassName("turn")[0]);
        hideElements(compareButton);
        showElements(moveButton);

        if (playerOne[0][category] > playerTwo[0][category]) {
            roundWinner = 1; 
            showElements(document.getElementsByClassName("round winner")[0])
            
        } else if (playerTwo[0][category] > playerOne[0][category]) {
            roundWinner = 2;

            showElements(document.getElementsByClassName("round winner")[0])

        } else {
            roundWinner = 0;
            showElements(document.getElementsByClassName("round limbo")[0])
        }

        showPlayer(roundWinner, document.getElementsByClassName("round winner")[0].getElementsByTagName("span")[0] )

    });

    moveButton.addEventListener("click", () => {

        if (roundWinner == 1) {

            playerOne.push(playerTwo[0]);
            playerTwo.shift();
            let frontCard = playerOne.shift();
            playerOne.push(frontCard);

            if (limbo.length > 0) {
    
                for (i = 0; i < limbo.length; i++){
                    playerOne.push(limbo[i])
            }

            limbo.splice(0, limbo.length);

            }

            playerTurn = 1;

        } else if (roundWinner == 2) {

            playerTwo.push(playerOne[0]);
            playerOne.shift();
            let frontCard = playerTwo.shift();
            playerTwo.push(frontCard);

            if (limbo.length > 0) {
        
                for (i = 0; i < limbo.length; i++){
                    playerTwo.push(limbo[i]);
                }

                limbo.splice(0, limbo.length);

            }

            playerTurn = 2;

        } else {

            limbo.push(playerOne[0], playerTwo[0])
            playerOne.shift();
            playerTwo.shift();

        }

        hideElements(moveButton);
        hideElements(document.getElementsByClassName("round winner")[0]);
        hideElements(document.getElementsByClassName("round limbo")[0]);

        if (playerOne.length == witchesWizards.length || playerTwo.length == witchesWizards.length){

            showPlayer(roundWinner, document.getElementsByClassName("game winner")[0].getElementsByTagName("span")[0] )
            showElements(document.getElementsByClassName("game winner")[0]);
            showElements(document.getElementsByClassName("new game")[0]);
            showElements(shuffleButton);

            if (playerOne.length == witchesWizards.length){

                hideElements(document.getElementsByClassName("player-two")[0]);
                populateCards(playerOneTopCard, playerOne);
                document.getElementsByClassName("player-one")[0].getElementsByClassName("number-of-cards")[0].innerHTML = playerOne.length;
            
            } else {

                hideElements(document.getElementsByClassName("player-one")[0]);
                populateCards(playerTwoTopCard, playerTwo);
                document.getElementsByClassName("player-two")[0].getElementsByClassName("number-of-cards")[0].innerHTML = playerTwo.length;
            }

        } else {

            let div = document.createElement("div");
            let node = document.createTextNode("Hogwarts Top Trumps");
            div.appendChild(node);

            if (playerTurn == 1) {

                playerTwoTopCard.getElementsByTagName("img")[0].style.display = "none";
                playerTwoTopCard.getElementsByTagName("h3")[0].style.display = "none";
                playerTwoTopCard.getElementsByTagName("table")[0].style.display = "none";

                playerTwoTopCard.appendChild(div);
                playerTwoTopCard.getElementsByTagName("div")[0].setAttribute("id", "player_two_back");
                playerTwoTopCard.style.backgroundColor = "#00165e";

            } else {
                playerOneTopCard.getElementsByTagName("img")[0].style.display = "none";
                playerOneTopCard.getElementsByTagName("h3")[0].style.display = "none";
                playerOneTopCard.getElementsByTagName("table")[0].style.display = "none";

                playerOneTopCard.appendChild(div);
                playerOneTopCard.getElementsByTagName("div")[0].setAttribute("id", "player_one_back");
                playerOneTopCard.style.backgroundColor = "#00165e";
            }

            populateCards(playerOneTopCard, playerOne)
            document.getElementsByClassName("player-one")[0].getElementsByClassName("number-of-cards")[0].innerHTML = playerOne.length;
            
            populateCards(playerTwoTopCard, playerTwo)
            document.getElementsByClassName("player-two")[0].getElementsByClassName("number-of-cards")[0].innerHTML = playerTwo.length;

            showPlayer(playerTurn, document.getElementsByClassName("turn")[0].getElementsByTagName("span")[0]);
            showElements(document.getElementsByClassName("turn")[0]);
            showElements(document.getElementsByTagName("label")[0]);
            showElements(selectCategoriesMenu);
            showElements(compareButton);

        }
  
    })
    
    
    
    


 






