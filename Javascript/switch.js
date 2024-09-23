

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




// Modal Popup 
const donationBtn = document.getElementById("donation-button");
const historyBtn = document.getElementById("history-button")
const modal = document.getElementById('modal');
const openBtn = document.getElementById('first-donate-now-btn');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function () {

    modal.classList.remove('hidden');
    document.getElementById("nav-bar").classList.add("hidden");
    donationBtn.classList.add("hidden")
    historyBtn.classList.add("hidden")

});

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    document.getElementById("nav-bar").classList.remove("hidden");
    donationBtn.classList.remove("hidden")
    historyBtn.classList.remove("hidden")

});

// second button 
const openBtnTwo = document.getElementById('second-donate-now-button');

openBtnTwo.addEventListener('click', function () {

    modal.classList.remove('hidden');
    document.getElementById("nav-bar").classList.add("hidden");
    donationBtn.classList.add("hidden")
    historyBtn.classList.add("hidden")

});

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    document.getElementById("nav-bar").classList.remove("hidden");
    donationBtn.classList.remove("hidden")
    historyBtn.classList.remove("hidden")

});

// Third donate now 
const openBtnThree = document.getElementById('third-button');

openBtnThree.addEventListener('click', function () {

    modal.classList.remove('hidden');
    document.getElementById("nav-bar").classList.add("hidden");
    donationBtn.classList.add("hidden")
    historyBtn.classList.add("hidden")

});

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    document.getElementById("nav-bar").classList.remove("hidden");
    donationBtn.classList.remove("hidden")
    historyBtn.classList.remove("hidden")

});
