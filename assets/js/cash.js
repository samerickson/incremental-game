// Keeps track of all things cash related
var Cash = {
    quantity: 0,
    totalEarnings: 0,

    // Adds cash to the users wallet
    add: function(amount) {

        this.quantity = round(this.quantity + amount);

        // Updating the cash quantity happens in the main game loop. This way I
        // Can use the console to update the Cash.quantity to make debuging faster
    },

    // Removes cash from the users wallet
    remove: function(amount) {
        this.quantity = round(this.quantity - amount)
    },

    // Updates the Cash object to the users screen
    update: function() {
        // To display the number to two decimal places we need to use .toFixed(2)
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