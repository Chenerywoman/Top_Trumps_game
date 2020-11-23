const {populateCards, hideElements, showElements, addOrUpdate, getHighest} = require("./helpers.js");

describe('addOrUpdate: updates existing object in array if already in array & adds an object if not', () => {
    const cards = [{"Mary": 1}, {"Sam": 1}, {"Peter": 1}, {"Johnny": 1}, {"June": 1}, {"Bobby":1}];
    const existingName = "Mary";
    const newName = "Maria";

    test('updates an existing object with key of given name', () => {
        expect(addOrUpdate(existingName, cards)[0]).toStrictEqual({"Mary": 2});
    });
    test('keeps the array length the same when increasing the value of an existing element', () => {
        expect(addOrUpdate(existingName, cards)).toHaveLength(6);
    });
    test('adds an object with key of given name if not already included', () => {
        expect(addOrUpdate(newName, cards)[6]).toStrictEqual({"Maria": 1})
    });
    test('increases the array length by one when adding a new element', () => {
        expect(addOrUpdate(existingName, cards)).toHaveLength(7);
    });
});

describe('getHighest: checks an array of objects and returns a new array of one or more objects with the highest values', () =>{
    const cardWins = [
        { 'Rubeus Hagrid': 3 }, { 'Sirius Black': 4 }, { 'Gilderoy Lockhart': 3 }, { 'Ginny Weasley': 2 }, { 'Lucius Malfoy': 1 }, { 'Hermione Granger': 2 }, { 'Arthur Weasley': 1 }, { 'Neville Longbottom': 1 }, { 'Albus Dumbledore': 2 }, { 'George Weasley': 3 }, { 'Draco Malfoy': 1 }, { 'Horace Slughorn': 2 }, { 'Fleur Delacour': 2 }, { 'Ron Weasley': 3 }, { 'Bellatrix LeStrange': 1 }, { 'Severus Snape': 2 }, { 'Molly Weasley': 1 }, { 'Victor Krum': 1 }, { 'Peter Pettigrew': 1 }, { 'Minerva McConagall': 1 }, { 'Remus Lupin': 1 }, { 'Cedric Diggory': 1 }, { 'Fred Weasley': 1 }
    ]

    const cardWinsMultiple = [
        { 'Rubeus Hagrid': 3 }, { 'Gilderoy Lockhart': 3 }, { 'Ginny Weasley': 2 }, { 'Lucius Malfoy': 1 }, { 'Hermione Granger': 2 }, { 'Arthur Weasley': 1 }, { 'Neville Longbottom': 1 }, { 'Albus Dumbledore': 2 }, { 'George Weasley': 3 }, { 'Draco Malfoy': 1 }, { 'Horace Slughorn': 2 }, { 'Fleur Delacour': 2 }, { 'Ron Weasley': 3 }, { 'Bellatrix LeStrange': 1 }, { 'Severus Snape': 2 }, { 'Molly Weasley': 1 }, { 'Victor Krum': 1 }, { 'Peter Pettigrew': 1 }, { 'Minerva McConagall': 1 }, { 'Remus Lupin': 1 }, { 'Cedric Diggory': 1 }, { 'Fred Weasley': 1 }
    ]

    it('returns an array containing a single element if the passed array has one element with the highest value', () => {
        expect(getHighest(cardWins)).toHaveLength(1);
    })
    it('returns an array containing a single object with the highest value', () => {
        expect(getHighest(cardWins)[0]).toStrictEqual({ 'Sirius Black': 4 });
    })
    it('returns an array containing multiple elements if the passed array has more than one element each with the highest value', () => {
        expect(getHighest(cardWinsMultiple)).toStrictEqual([{ 'Rubeus Hagrid': 3 }, { 'Gilderoy Lockhart': 3 }, { 'George Weasley': 3 },{ 'Ron Weasley': 3 }]);
    })
    it('returns an array containing multiple elements', () => {
        expect(getHighest(cardWinsMultiple)).toHaveLength(4);
    })
})


