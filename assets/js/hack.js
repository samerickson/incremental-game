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
	}
};
