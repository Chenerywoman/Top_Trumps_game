let {populateCards, showElements, hideElements} = require("../DOM_functions")
// https://jestjs.io/docs/en/tutorial-jquery

'use strict';

describe('populateCards: adds to a passed element from a passed object', () => {
    
    const newPopulateCards = populateCards.bind({});
    populateCards = jest.fn();

    document.body.innerHTML = '<div class="card-example">' +
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

    const element = document.getElementsByClassName("card-example")[0];
    const array = [{name: "Bobby", matriculation: 1991, wand: 2, potions: 4, spells: 6, courage: 5, image: "image.jpg", alt: "Bobby"}]
    const name = document.getElementById('name');

    test('is called', () => {
        populateCards(element, array);
        expect(populateCards).toBeCalled();
    });
    test('is called with given elements', () => {
        populateCards(element, array);
        expect(populateCards).toHaveBeenCalledWith(element, [{name: "Bobby", matriculation: 1991, wand: 2, potions: 4, spells: 6, courage: 5, image: "image.jpg", alt: "Bobby"}, ])
    });
    test('populates one image & the innerText of table elements', () => {
        newPopulateCards(element, array);
        expect(name.innerText).toBe("Bobby");
    })

})

describe('hideElements: changes display property of style to "none" ', () => {

    document.body.innerHTML =  '<div class="player-one">' +
    "<h2>Player One's cards</h2>" +
    '<div class="card">' +
        '<img src="" alt="picture of witch or wizard">' +
        '<h3 class="witch-wizard">name: <span>name of witch or wizard</span></h3>' +
        '<table>' +
            '<tr>' + 
                '<th>Category</th>' +
                '<th>Score</th>' + 
            '</tr>' + 
            '<tr>' + 
                '<td>matriculation:</td>' + 
                '<td><span class="matriculation">score</span></td>' +
           '</tr>' + 
            '<tr>' +
                '<td>wand:</td>' +
                '<td><span class="wand">score</span></td>' +
            '</tr>' + 
            '<tr>' + 
                '<td>potions</td>' + 
                '<td><span class="potions">score</span></td>' + 
            '</tr>' +
            '<tr>' +
                '<td>spells:</td>' +
                '<td><span class="spells">score</span></td>' +
            '</tr>' +
            '<tr>' +
                '<td>courage:</td>' +
                '<td><span class="courage">score</span></td>' + 
            '</tr>' +
        '</table>' +
    '</div>' +
    '<div class="card-total" >Total cards: <span class="number-of-cards">number</span></div>' +
    '</div>';

    const element = document.getElementsByClassName("player-one")[0]
    test('changes an element display property to "none"', () => {
        hideElements(element);
        expect(element.style.display).toBe("none");
    })
})
