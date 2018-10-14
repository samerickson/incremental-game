// Hack button calls on this object
var Hack = {
    currentRevenue: 0,
    totalNumberOfClicks: 0,
    revenuePerHack: 0.1,

    // Function labeled as buy so that I can use the buy function
    buy: function() {
        Cash.add(this.revenuePerHack);
    },
    addHacks: function(amount) {
        this.currentRevenue = round(this.currentRevenue + amount);
        this.update();
    },
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
    loadSave: function(obj) {
        this.currentRevenue = obj.currentRevenue;
        this.totalNumberOfClicks = obj.totalNumberOfClicks;
        this.revenuePerHack = obj.revenuePerHack;
    }
};