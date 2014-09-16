window.onload = function() {
	var base = prompt("What is the base cost of your meal?");
	var taxRate = prompt("What is the percentage tax rate?");
	var tip = prompt("How much would you like to tip, as a percentage?");

	function calcTaxCost(base, taxRate) {
		return (parseInt(base) * (taxRate/100));
	}

	function calcSubTotalCost(base, taxRate) {
		var tax = calcTaxCost(base, taxRate);
		return (parseInt(base) + tax);
	}

	function calcTipCost(tip, base) {
		return ((tip/100)*base);
	}

	alert("Your base cost is: $" + base);
	
	var taxCost = calcTaxCost(base, taxRate);
	alert("Your tax cost is: $" + taxCost);

	var subTotalCost = calcSubTotalCost(base, taxRate);
	alert("Your sub total is: $" + subTotalCost);

	var tipCost = calcTipCost(tip, base);
	alert("Your tip cost is: $" + tipCost);

	alert("Your Total cost for the meal is: $" + (subTotalCost+tipCost));
}