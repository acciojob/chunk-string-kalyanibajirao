function stringChop(str, size) {
  // your code here
	if (!str) {
        return [];
    }

    const chunks = str.match(new RegExp(`.{1,${size}}`, 'g'));

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
