
// Cap is 2, then 4, then 8, and so forth
var SingleBoardComputer = {
	cost: 5.00,
	quantity: 0,
	hacksPerSec: 0.01,
	cap: 2,
	buy: function() {
		this.quantity = this.quantity + 1;
		Cash.remove(this.cost);
		Hack.addHacks(this.hacksPerSec);
		this.cost = this.cost*1.1;

		if (this.quantity == this.cap) {
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
	}
};
