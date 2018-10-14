// Cap is 2, then 4, then 8, and so forth
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
    randomMsg: function() {
        var m = this.upgradeMessages[Math.floor(Math.random() * (this.upgradeMessages.length - 0))];
        console.log(m);
        return m;
    },
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
    update: function() {
        $('#sbc-cap').html(this.cap);
        $('#sbc-hacks-per-sec').html(this.hacksPerSec);
        $('#sbc-quantity').html(this.quantity);
        $('#sbc-cost').html(this.cost.toFixed(2));
    },
    save: function() {
        var sbc = {
            cost: SingleBoardComputer.cost,
            quantity: SingleBoardComputer.cost,
            hacksPerSec: SingleBoardComputer.hacksPerSec,
            cap: SingleBoardComputer.cap
        }
    },
    // Loads the save data object into the current games object
    loadSave: function(obj) {
        this.cost = obj.cost;
        this.quantity = obj.quantity;
        this.hacksPerSec = obj.hacksPerSec;
        this.cap = obj.cap;
    }
};