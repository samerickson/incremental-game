// assets/js/main.js
// Author Sam Erickson | samerickson.xyz
// Description: This file with contain the main game loop and update functions

// Takes an item as a parameter. and purchases that item.
//		assuming the user has the required funds, otherwise the
//		button would have been disabled
function buy(item) {
	item.buy();
}

// Checks if the player can afford the giver item,
//		returning true or false
function canAfford(item) {
	if (item.cost <= Cash.quantity) {
		return true;
	}

	return false;
}

// Sets up the game
function init() {
	Cash.update();
	Hack.update();
	SingleBoardComputer.update();
}


// Needed for all items to round the numbers to two decimal places
function round(num) {
	return Math.round(num * 100) / 100;
}

// This checks current cash and enables/ disables the buttons
//		accordingly, also updates the cash
function update() {
	if(canAfford(SingleBoardComputer)) {
		$('#sbc-buy-button').removeClass('disabled');
		$('#sbc-buy-button').prop('disabled', false);
	} else {
		$('#sbc-buy-button').addClass('disabled');
		$('#sbc-buy-button').prop('disabled', true);
	}
	Cash.update();
}

function purchases() {
	Cash.add(Hack.currentRevenue);
}

// Updates the cash by revenue per second
setInterval( purchases, 1000);

// The main game loop
function gameloop() {
	update();
	requestAnimationFrame(gameloop);
}

// This starts the game
init();
requestAnimationFrame(gameloop);
