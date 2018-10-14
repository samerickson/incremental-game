// File: assets/js/messages.js
// Author: Sam Erickson | samerickson.xyz me@samerickson.xyz
// Description: Holds the singleBoardComputer object.
//
// randomMsg()  : Selects a randome message from the messages array and returns
//                that to the user.
// buy()        : Handles all tasks involved in purchasing one of the objects
// update()     : Updates the screen using the current object variables
// save()       : Returns an object containing all variables needed to save this
//                object into the users local storage.
// loadSave(obj): Takes in an object as a parameter, using the data within that
//                object to update this objects values to represent that of the
//                users previous session.

var SingleBoardComputer = {
    cost: 5.00,
    quantity: 0,
    hacksPerSec: 0.1,
    cap: 2,
    upgradeMessages: [
        "Improved cluster network cables. ",
        "Created cluster. x2 Single board computers",
        "Better power cables. x2 Single board computers"
    ],

    // Selects a random message from the upgrade messages array
    randomMsg: function() {
        var m = this.upgradeMessages[Math.floor(Math.random() * (this.upgradeMessages.length - 0))];
        console.log(m);
        return m;
    },

    // Handles the purchase of this object
    buy: function() {
        this.quantity = this.quantity + 1;
        Cash.remove(this.cost);
        Hack.addHacks(this.hacksPerSec);
        this.cost = this.cost * 1.1;

        if (this.quantity == this.cap) {
            Messages.addMsg(this.randomMsg());
            this.hacksPerSec = this.hacksPerSec * 2;
            this.cap = this.cap * 2;
        }
        this.update();
    },

    // Updates the users screen with the current data
    update: function() {
        $('#sbc-cap').html(this.cap);
        $('#sbc-hacks-per-sec').html(this.hacksPerSec);
        $('#sbc-quantity').html(this.quantity);
        $('#sbc-cost').html(this.cost.toFixed(2));
    },

    // Returns a sub object containing this objects data
    save: function() {
        var sbc = {
            cost: SingleBoardComputer.cost,
            quantity: SingleBoardComputer.cost,
            hacksPerSec: SingleBoardComputer.hacksPerSec,
            cap: SingleBoardComputer.cap
        }
        return sbc;
    },

    // Loads the save data object into the current games object
    loadSave: function(obj) {
        this.cost = obj.cost;
        this.quantity = obj.quantity;
        this.hacksPerSec = obj.hacksPerSec;
        this.cap = obj.cap;
    }
};