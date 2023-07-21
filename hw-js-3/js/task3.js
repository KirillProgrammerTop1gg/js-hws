const SAVED_PASSWORD = "Super188";
const NEW_PASSWORD = prompt("Write new password");

const isMatch = SAVED_PASSWORD === NEW_PASSWORD;

console.log("Is your new password equal to saved password? " + isMatch);
alert("Is your new password equal to saved password? " + isMatch);