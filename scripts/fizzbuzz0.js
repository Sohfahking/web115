// Wait for the page to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Prevent form submission & handle everything inside the event listener
    document.getElementById("name-info").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from refreshing the page

        // Get user input values
        const firstName = document.getElementById("first-name").value;
        const middleInitial = document.getElementById("middle-initial").value;
        const lastName = document.getElementById("last-name").value;

        // Create the full name string
        let fullName = firstName;
        if (middleInitial) {
            fullName += ` ${middleInitial}.`;
        }
        fullName += ` ${lastName}`;

        // Display greeting message on the page
        document.getElementById("greeting").textContent = `Welcome to Made By Dice, ${fullName}!`;

        // Ask user for a number
        let countTo = prompt(`How many stitches would you like to count, ${firstName}? (Max: 500)`);
        countTo = parseInt(countTo, 10);

        // Validate input: Ensure it's a number and within the limit
        if (isNaN(countTo) || countTo <= 0) {
            alert("Please enter a positive integer greater than 0.");
            return;
        } else if (countTo > 500) {
            alert("The upper limit is 500. Now counting to 500....");
            countTo = 500; // Restrict to the maximum allowed number
        }

        // Check if a results container already exists, if not, create one
        let resultsContainer = document.getElementById("results-container");
        if (!resultsContainer) {
            resultsContainer = document.createElement("div");
            resultsContainer.id = "results-container";
            document.getElementById("greeting").parentElement.appendChild(resultsContainer);
        } else {
            resultsContainer.innerHTML = ""; // Clear old results before adding new ones
        }

        // Loop from 1 to the chosen number and create paragraph elements
        for (let i = 1; i <= countTo; i++) {
            const isEven = (i % 2 === 0) ? "even" : "odd";
            const paragraph = document.createElement("p");
            paragraph.textContent = `${i}. Stitch Counter - The number is ${isEven}`;
            resultsContainer.appendChild(paragraph);
        }
    });
});