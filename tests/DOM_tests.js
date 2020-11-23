const {populateCards, hideElements, showElements} = require("../helpers.js");

// https://jestjs.io/docs/en/tutorial-jquery
const mockPopulateCards = jest.mock('./helpers.js', () => populateCards: jest.fn() => {
    document.body = 
    '<div class="card">' +
        '<img src="" alt="picture of witch or wizard">' + 
        '<h3 class="witch-wizard">name: <span id="name">name of witch or wizard</span></h3>' + 
        '<table>' + 
            '<tr><th>Category</th><th>Score</th></tr>' +
            '<tr><td>matriculation:</td><td><span class="matriculation">score</span></td></tr>' + 
            '<tr><td>wand:</td><td><span class="wand">score</span></td></tr>' +
            '<tr><td>potions:</td><td><span class="potions">score</span></td><tr>' +
            '<tr><td>spells:</td><td><span class="spells">score</span></td></tr>' +
            '<tr><td>courage:</td><td><span class="courage">score</span></td></tr>' +
        '</table>' +
    '</div>';
});

test('populates one image & the innerText of table elements', () => {
    document.body = 
    '<div class="card">' +
        '<img src="" alt="picture of witch or wizard">' + 
        '<h3 class="witch-wizard">name: <span id="name">name of witch or wizard</span></h3>' + 
        '<table>' + 
            '<tr><th>Category</th><th>Score</th></tr>' +
            '<tr><td>matriculation:</td><td><span class="matriculation">score</span></td></tr>' + 
            '<tr><td>wand:</td><td><span class="wand">score</span></td></tr>' +
            '<tr><td>potions:</td><td><span class="potions">score</span></td><tr>' +
            '<tr><td>spells:</td><td><span class="spells">score</span></td></tr>' +
            '<tr><td>courage:</td><td><span class="courage">score</span></td></tr>' +
        '</table>' +
    '</div>';

    const element = document.getElementsByClassName("card")[0];
    const array = [{name: "Bobby", matriculation: 1991, wand: 2, potions: 4, spells: 6, courage: 5, image: "image.jpg", alt: "Bobby"}, ]

    mockPopulateCards(element, array)
    
    expect(mockPopulateCards).toBeCalled();
    expect("#name").text().toEqual("Bobby");

})
