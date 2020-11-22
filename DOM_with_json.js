const fetchData = async () => {

    try {
        const response = await fetch("graduates.json");
        const graduates = await response.json();
        console.log(typeof graduates)
        console.log(Array.isArray(graduates))
        console.log(graduates[0]._name)

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
            element.getElementsByTagName("img")[0].src = array[0]._image;
            element.getElementsByTagName("img")[0].alt = array[0]._alt;
            element.getElementsByClassName("witch-wizard")[0].getElementsByTagName("span")[0].innerText = array[0]._name;
            element.getElementsByClassName("matriculation")[0].innerText = array[0]._matriculation;
            element.getElementsByClassName("wand")[0].innerText = array[0]._wand;
            element.getElementsByClassName("potions")[0].innerText = array[0]._potions;
            element.getElementsByClassName("spells")[0].innerText = array[0]._spells;
            element.getElementsByClassName("courage")[0].innerText = array[0]._courage;
        }

        const showPlayer = (player, element) => {
            player == 1 ? element.innerText = "One" : element.innerText = "Two";
        }

        const limbo = [];
        const playerOne = [];
        const playerTwo = [];
        let playerTurn = 1;
        let category = "matriculation";
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

            showElements(document.getElementsByClassName("player-one")[0]);
            showElements(document.getElementsByClassName("player-two")[0]);

            document.getElementsByClassName("set-aside")[0].style.display = "block";
            document.getElementsByClassName("set-aside")[0].getElementsByTagName("span")[0].innerHTML = limbo.length;

            showPlayer(playerTurn, document.getElementsByClassName("turn")[0].getElementsByTagName("span")[0])
            showElements(document.getElementsByClassName("turn")[0]);

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

                showPlayer(roundWinner, document.getElementsByClassName("round winner")[0].getElementsByClassName("player")[0] );
                document.getElementsByClassName("round winner")[0].getElementsByClassName("category-name")[0].innerHTML = category; 
            

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

                if (playerOne.length == graduates.length || playerTwo.length == graduates.length){

                    showPlayer(roundWinner, document.getElementsByClassName("game winner")[0].getElementsByTagName("span")[0] )
                    showElements(document.getElementsByClassName("game winner")[0]);
                    showElements(document.getElementsByClassName("new game")[0]);
                    showElements(shuffleButton);

                    if (playerOne.length == graduates.length){

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

                    document.getElementsByClassName("set-aside")[0].getElementsByTagName("span")[0].innerHTML = limbo.length;

                    showPlayer(playerTurn, document.getElementsByClassName("turn")[0].getElementsByTagName("span")[0]);
                    showElements(document.getElementsByClassName("turn")[0]);
                    showElements(document.getElementsByTagName("label")[0]);
                    showElements(selectCategoriesMenu);
                    showElements(compareButton);

                }
        
            })

} catch(err) {
    console.log(err);
}
// inside fetchdata
};
    
fetchData();


 






