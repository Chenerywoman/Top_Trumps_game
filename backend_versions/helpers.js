
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
    addOrUpdate,
    getHighest, 
    getNames, 
}
    