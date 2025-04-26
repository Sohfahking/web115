// Wait for the page to fully load before running the script

document.addEventListener("DOMContentLoaded", function () {
    // Prevent form submission & handle everything inside the event listener
    document.getElementById("name-info").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from refreshing the page

        // Get user input values
        const firstName = document.getElementById("first-name").value;
        const middleInitial = document.getElementById("middle-initial").value.trim();
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
        let countTo = prompt(`How many stitches would you like to count, ${firstName}? (Max: 140)`);
        countTo = parseInt(countTo, 10);

        // Validate input: Ensure it's a number and within the limit
        if (isNaN(countTo) || countTo <= 0) {
            alert("Please enter a positive integer greater than 0.");
            return;
        } else if (countTo > 140) {
            alert("The upper limit is 140. Now counting to 140....");
            countTo = 140;
        }

        // Check if a results container already exists, if not, create one
        let resultsContainer = document.getElementById("results-container");
        if (!resultsContainer) {
            resultsContainer = document.createElement("div");
            resultsContainer.id = "results-container";
            document.getElementById("greeting").parentElement.appendChild(resultsContainer);
        } else {
            resultsContainer.innerHTML = "";
        }

        // Crochet FizzBuzz Logic
        const crochetStitches = ["single crochet", "half-double crochet"];
        const specialWords = {
            3: "frog!",
            5: "rip-it!"
        };

        for (let i = 1; i <= countTo; i++) {
            let specialText = "";

            if (i % 3 === 0) specialText += specialWords[3];
            if (i % 5 === 0) {
                if (specialText) specialText += " ";
                specialText += specialWords[5];
            }

            const output = specialText || crochetStitches[(i - 1) % crochetStitches.length];
            const paragraph = document.createElement("p");
            paragraph.innerHTML = `${i}. ${output}`;
            resultsContainer.appendChild(paragraph);
        }
    });
});
