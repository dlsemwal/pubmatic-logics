var x = [1,2,3,4,5,[6,7],[8,[9]]]


function getOutput(a) {
	var result = []

	for(let i in a) {
		if(Array.isArray(a[i])) {
			result = result.concat(getOutput(a[i]))   
		}
	 	else {
			result.push(a[i])
		}
	}
	console.log(result)
	return result
}

getOutput(x)
