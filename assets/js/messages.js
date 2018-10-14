// File: assets/js/messages.js
// Author: Sam Erickson | samerickson.xyz me@samerickson.xyz
// Description: This file containes all the code for the messages functionality

// Keeps track of the messages that are at the top of the screen
//
// addMsg(): Adds the message passed as a parameter to the messages array
//           and displays that on screen.
// rmMsg(): Removes the message at the top of the screen, also removing it from
//          the array of messages.
// save(): Returns an object containing the data items to be used in the Saves
//         object.
var Messages = {
    prompt: "[hack@machine] $ ",
    items: [
        "Welcome to the hacking game. Start hacking to generate income",
        "then use that income to buy better hardware, So that you can do even more hacking!",
        "Time to start hacking...",
    ],

    // Adds msg to the messages at the bottom of the screen
    addMsg: function(msg) {
        if (this.items.length < 3) {
            this.items.push(msg);
        } else {
            // We don't want more than 6 messages at any one Time
            this.rmMsg();
            this.items.push(msg);
        }

        // Add the latest message to the bottom
        $("#messages-bottom").before("<code>" + this.prompt + this.items[this.items.length - 1] + "</code><br>")
    },

    // Removes the top message from the screen
    rmMsg: function() {
        this.items.shift(); // Remove the first item from the array

        // Remove the elements on the screen
        $("#messages-top + code").remove();
        $("#messages-top + br").remove();
    },

    // Changes the messages seen on screen
    update: function() {
        for (var i in this.items) {
            console.log("working");
            $("#messages-bottom").before("<code>" + this.prompt + this.items[i] + "</code><br>");
        }
    },

    // Returns a sub object containing this objects data
    save: function() {
        var messages = {
            items: Messages.items
        };

        return messages;
    },

    // Loads the save data object into the current games object
    loadSave: function(obj) {
        this.items = obj.items;
    }
};