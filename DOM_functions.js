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

const hideElements = (element) => {
    element.style.display = "none";
}

const showElements = (element) => {
    element.style.display = "inline-block";
}

module.exports = {
    populateCards,
    hideElements, 
    showElements
}
