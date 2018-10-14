// File: assets/js/cash.js
// Author: Sam Erickson | samerickson.xyz
// Description: This file containes all the code for displaying and computing
//              the amount of cash the user has at any given time. Also the
//              The ability to add and remove cash.
//
// add(amount)  : Adds the amount of cash passed as a parameter to the users
//                bank
// remove()     : Removes the amount of cash passed as a parameter to the users
//                bank.
// save()       : Returns an object containing all variables needed to save this
//                object into the users local storage.
// loadSave(obj): Takes in an object as a parameter, using the data within that
//                object to update this objects values to represent that of the
//                users previous session.

var Cash = {
    quantity: 0,
    totalEarnings: 0,

    // Adds cash to the users wallet
    add: function(amount) {

        this.quantity = round(this.quantity + amount);
    },

    // Removes cash from the users wallet
    remove: function(amount) {
        this.quantity = round(this.quantity - amount)
    },

    // Updates the Cash object to the users screen
    update: function() {
        // To display the number to two decimal places we need to use
        $('#cash').html(this.quantity.toFixed(2));
    },

    // Saves the current amount of cash to local storage,
    //  returns: an object containing quantity and totalEarnings.
    save: function() {
        var cashSave = {
            quantity: Cash.quantity,
            totalEarnings: Cash.totalEarnings
        }
        return cashSave;
    },

    // Loads the save data object into the current games object
    loadSave: function(obj) {
        this.quantity = obj.quantity;
        this.totalEarnings = obj.totalEarnings;
    }
};