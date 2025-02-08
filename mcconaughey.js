// Run this when the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Get the user's name from local storage (default to "Longhorn" if empty)
    let userName = localStorage.getItem("username") || "Longhorn";

    // Set the welcome message
    document.getElementById("welcome-message").textContent = "Welcome, " + userName + "!";

    // Log to console for debugging
    console.log("Loaded McConaughey screen for: " + userName);
});

// Function to go to the next tour stop
function nextStop() {
    alert("Next stop coming soon! 🤘🐂");
}
