function getRelationship(x, y) {
    var res;
	var first = !isNaN(x) && isFinite(x);
    var second = !isNaN(y) && isFinite(y);
    if (first && second) {
        if (x === y) {
			res = "=";
		} else {
            res = (x > y) ? ">" : "<";
		}
    } else {
        if (!first && !second) {
            res = "Can\'t compare relationships because " + x +
                " and " + y + " are not numbers";
        } else {
            res = (!first) ?
					("Can\'t compare relationships because " + x + " is not a number") :
					("Can\'t compare relationships because " + y + " is not a number");
        }
    }
    
    return res;
}

// Try logging these functions to test your code!
console.log(getRelationship(1, 4));
console.log(getRelationship(1, 1));
console.log(getRelationship("that", 2));
console.log(getRelationship("this", " something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));