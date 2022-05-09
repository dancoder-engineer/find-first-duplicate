function findFirstDuplicate(inp) {
  
	let n = 0
	let uniques = []
	while (n < inp.length) {
		if (!uniques.includes(inp[n])) {
			uniques.push(inp[n])	
			}
		else { return inp[n] }
		n += 1



	}

  return -1

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
