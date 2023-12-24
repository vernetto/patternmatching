const patterns = [
    { name: "Numeric", regex: /^\d+$/, description: "Only numbers" },
    { name: "Alphabetic", regex: /^[A-Za-z]+$/, description: "Only alphabetic characters" },
    { name: "Alphanumeric", regex: /^[A-Za-z0-9]+$/, description: "Alphanumeric characters" },
    { name: "Special Characters", regex: /[^A-Za-z0-9]/, description: "Contains special characters" },
    // Add more patterns as needed
];

function matchPattern() {
    const inputString = document.getElementById('inputString').value;
    let result = "No match found";

    for (let pattern of patterns) {
        if (pattern.regex.test(inputString)) {
            result = `Matched Pattern: ${pattern.name}, Description: ${pattern.description}`;
            break;
        }
    }

    document.getElementById('result').innerText = result;
}
