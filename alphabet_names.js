var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    var a_names = [];
	for (var i in names) {
		a_names[i] = names[i].split(" ");
		a_names[i] = a_names[i][1] + ", " + a_names[i][0];
	}
	
	for (var i = 0; i < a_names.length - 1; i++) {
		for (var j = i + 1; j < a_names.length; j++) {
			if (a_names[i].localeCompare(a_names[j]) > 0) {
				var tmp = a_names[i];
				a_names[i] = a_names[j];
				a_names[j] = tmp;
			}
		}
	}
	
	return a_names;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));