// Keeps track of all things cash related
var Cash = {
	quantity: 0,
	totalEarnings: 0,
	add: function(amount) {

		this.quantity = round(this.quantity + amount);

		// Updating the cash quantity happens in the main game loop. This way I
		// Can use the console to update the Cash.quantity to make debuging faster
	},
	remove: function(amount) {
		this.quantity = round(this.quantity - amount)
	},
	update: function() {
		// To display the number to two decimal places we need to use .toFixed(2)
		$('#cash').html(this.quantity.toFixed(2));
	}
};
