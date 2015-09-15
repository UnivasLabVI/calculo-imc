var BMIService = {

	getIndex: function(weight, height) {
		if(typeof(weight) === 'number' && typeof(height) === 'number') {
			return weight / (height * height);
		}
		return null;
	},
	
	getDescription: function (index) {
		var calculado = " ";
		if (index < 17){
			calculado = "Muito abaixo do peso ";
		}
		else if((index >= 17) && (index < 18.49)){
			calculado = "Abaixo do peso ";
		}
		else if ((index >= 18.5) && (index <= 24.99 )){
			calculado = "Peso normal ";
		}
		else if ((index >= 25) && (index <= 29.99 )){
			calculado = "Acima do peso ";
		}
		else if ((index >= 30) && (index <= 34.99 )){
			calculado = "Obesidade | ";
		}
		else if ((index >= 35) && (index <= 39.99 )){
			calculado = "Obesidade ||  (Severa)";
		}
		else if ((index > 40 )){
			calculado = "Obesidade ||| (Morbida)";
		}
				return calculado ;
	}
	
};