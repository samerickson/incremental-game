// assets/js/main.js
// Author Sam Erickson | samerickson.xyz
// Description: This file with contain the main game loop and update functions


// Takes an item as a parameter. and purchases that item.
//  assuming the user has the required funds, otherwise the
//  button would have been disabled
function buy(item) {
    item.buy();
}

// Checks if the player can afford the giver item,
//  returning true or false
function canAfford(item) {
    if (item.cost <= Cash.quantity) {
        return true;
    }

    return false;
}

// Sets up the game
function init() {
    // If save exists use it
    if (JSON.parse(localStorage.getItem("Save")) != null) {
        // We need to check that each item exists before using
        //  if we add an element to the game, we want the current
        //  save files to work, when the game is next loaded.
        var gs = JSON.parse(localStorage.getItem("Save"));
        if (gs.hack != null) {
            Hack.loadSave(gs.hack);
        }
        if (gs.cash != null) {
            Cash.loadSave(gs.cash);
        }
        if (gs.singleBoardComputer != null) {
            SingleBoardComputer.loadSave(gs.singleBoardComputer);
        }
        if (gs.messages != null) {
            Messages.loadSave(gs.messages);
        }
    }

    Cash.update();
    Hack.update();
    SingleBoardComputer.update();
    Messages.update();
}


// Needed for all items to round the numbers to two decimal places
function round(num) {
    return Math.round(num * 100) / 100;
}

// This checks current cash and enables/ disables the buttons
//      accordingly, also updates the cash
function update() {
    if (canAfford(SingleBoardComputer)) {
        $('#sbc-buy-button').removeClass('disabled');
        $('#sbc-buy-button').prop('disabled', false);
    } else {
        $('#sbc-buy-button').addClass('disabled');
        $('#sbc-buy-button').prop('disabled', true);
    }
    Cash.update();
}

// keeps track of how much money needs tobe added to the players cash
//  every second
function purchases() {
    Cash.add(Hack.currentRevenue * Hack.revenuePerHack);
}

// This loop runs once every second
function secondLoop() {
    purchases();
    Save.saveGame();
}

// Updates the cash by revenue per second
setInterval(secondLoop, 1000);

// The main game loop
function gameloop() {
    update();
    requestAnimationFrame(gameloop);
}

// This starts the game
init();
requestAnimationFrame(gameloop);