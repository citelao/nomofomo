require("atest");

console.log("right now just testing");

// Test ES6 compilation
function a (argument) {
	console.log(argument);
}

a(() => { return "test"; });
