// assets/js/save.
// Author Sam Erickson | samerickson.xyz
// Description: Saves the players status to local storage so that proggress
//              is saved between loads.


// All we need to do is make a coppy of each object then save that
//  to local storage. The current implementation saves all the objects
//  function to memmory, which is reall wasteful in terms of space and
//  network usage. This needs to be fixed later.
var Save = {
    hack: Hack.save(),
    cash: Cash.save(),
    singleBoardComputer: SingleBoardComputer.save(),
    messages: Messages.save(),
    saveGame: function() {
        localStorage.setItem("Save", JSON.stringify(Save));
    }
};