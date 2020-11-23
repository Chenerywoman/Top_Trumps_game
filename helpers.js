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

const addOrUpdate = (name, array) => {

    let included = false;

    array.forEach(elem => {
        if (Object.keys(elem).includes(name)) {
            elem[name] += 1
            included = true;
        } 
    })

    if (!included) {
        array.push({[name] : 1})
    }

    return array;

}

const getHighest = (array) => {

    const highest = array.reduce((acc, curr) => Math.max(Object.values(curr)[0], acc), 0);

    return array.filter(el => Object.values(el)[0] == highest)

}

const getNames = (arrayOfObjects) => {

    let winningList = [];
    arrayOfObjects.forEach((curr, ind, arr) => winningList.push(Object.keys(curr)[0]));
    return winningList.join(", ");
}

module.exports = {
    populateCards,
    hideElements, 
    showElements, 
    addOrUpdate,
    getHighest, 
    getNames
}
    