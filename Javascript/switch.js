

// Toggle Switch 


// Function For History Button 
function historyButton(id) {
    const donationSection = document.getElementById(id);
    // Toggle hidden class
    donationSection.classList.add("hidden");

    // Switch button colors
    document.getElementById("donation-button").classList.remove("bg-[#B4F461]");
    document.getElementById("history-button").classList.add("bg-[#B4F461]");

    document.getElementById("history").classList.remove("hidden");
}



//Function For Donation button
function donationButton(id) {
    // button color change and hide elements 
    const donationUnhide = document.getElementById(id);
    donationUnhide.classList.remove("hidden");
    document.getElementById("donation-button").classList.add("bg-[#B4F461]");
    document.getElementById("history-button").classList.remove("bg-[#B4F461]");
    document.getElementById("history").classList.add("hidden");
}
