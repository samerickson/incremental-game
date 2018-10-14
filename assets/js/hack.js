// File: assets/js/hack.js
// Author: Sam Erickson | samerickson.xyz
// Description: Hack button calls on this object. This file keep track of the
//              incremental amounts for the perSecond loop in the main function.
//
// buy()            : Handles purchasing the object. In this case it just adds
//                    the revenuePerHack to cash each time it is called.
// addHacks(amount) : Increments current revenue by the amount passed as a
//                    variable.
// update()         : Updates the current game screen with the current
//                    variables.
// save()           : Returns an object containing all variables needed to save
//                    this object into the users local storage.
// loadSave(obj)    : Takes in an object as a parameter, using the data within
//                    that object to update this objects values to represent
//                    that of the users previous session.

var Hack = {
    currentRevenue: 0,
    totalNumberOfClicks: 0,
    revenuePerHack: 0.1,

    // Function labeled as buy so that I can use the buy function
    buy: function() {
        Cash.add(this.revenuePerHack);
    },

    // Updates the revenue per hacks by incrementing by amount
    addHacks: function(amount) {
        this.currentRevenue = round(this.currentRevenue + amount);
    },

    // Updates the current display with the current values of each variable
    update: function() {
        $('#current-revenue').html(this.currentRevenue.toFixed(2));
        $('#current-hack-revenue').html(this.revenuePerHack.toFixed(2));
    },

    // Returns a sub object containing the current values of Hack
    save: function() {
        var hack = {
            currentRevenue: Hack.currentRevenue,
            totalNumberOfClicks: Hack.totalNumberOfClicks,
            revenuePerHack: Hack.revenuePerHack
        }

        return hack;
    },

    // Loads the save data object into the current games object
    loadSave: function(obj) {
        this.currentRevenue = obj.currentRevenue;
        this.totalNumberOfClicks = obj.totalNumberOfClicks;
        this.revenuePerHack = obj.revenuePerHack;
    }
};