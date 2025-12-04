let globalMessage = "This is a GLOBAL message.";

function formatProfile(name, age) {
    let localMessage = "This is a LOCAL message."; // local variable

    return `
        Name: ${name}<br>
        Age: ${age}<br>
        Local: ${localMessage}<br>
        Global: ${globalMessage}
    `;
}

let nameInput = prompt("Enter your name:");
let ageInput = Number(prompt("Enter your age:"));

document.getElementById("output").innerHTML =
    formatProfile(nameInput, ageInput);
