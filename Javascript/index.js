

// First Button
document.getElementById("first-donate-now-btn")
    .addEventListener("click", function (event) {
        const firstDonateInput = parseFloat(document.getElementById("first-donate-now-input").value);
        const mainBalance = parseFloat(document.getElementById("main-balance").innerText);

        // Input Validation 
        if (firstDonateInput <= 0 || isNaN(firstDonateInput) || firstDonateInput > mainBalance) {
            alert("Please enter a valid donation amount.");
            return;
        }

        let addedDonation = parseFloat(document.getElementById("added-donation").innerText);
        addedDonation += firstDonateInput;

        const totalBalance = mainBalance - firstDonateInput;

        document.getElementById("main-balance").innerText = totalBalance;
        document.getElementById("added-donation").innerText = addedDonation;


        // history list 
        const historyItem = document.createElement("div");
        historyItem.className = 'bg-white p-3 rounded-md border-2';
        historyItem.innerHTML = `
        <p class="text-3xl text-gray-600 font-bold">${new Date().toLocaleDateString()}</p>
        <p class="text-3xl text-gray-600 font-bold">Donate for Flood at Noakhali, Bangladesh</p>
        <p class="text-3xl text-gray-600 font-bold">${firstDonateInput.toFixed(2)}</p>
        `;

        // History button 
        const historyContainer = document.getElementById("history-section");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    })


// second Button

document.getElementById("second-donate-now-button")
    .addEventListener("click", function () {
        const firstDonateInput = parseFloat(document.getElementById("second-donate-now-input").value);
        const mainBalance = parseFloat(document.getElementById("main-balance").innerText);

        // Input Validation 
        if (firstDonateInput <= 0 || isNaN(firstDonateInput) || firstDonateInput > mainBalance) {
            alert("Please enter a valid donation amount.");
            return;
        }

        let addedDonation = parseFloat(document.getElementById("added-donation-two").innerText);
        addedDonation += firstDonateInput;

        const totalBalance = mainBalance - firstDonateInput;

        document.getElementById("main-balance").innerText = totalBalance;
        document.getElementById("added-donation-two").innerText = addedDonation;

        // second donation 
        const historyItem = document.createElement("div");
        historyItem.className = 'bg-white p-3 rounded-md border-2';
        historyItem.innerHTML = `
        <p class="text-3xl text-gray-600 font-bold">${new Date().toLocaleDateString()}</p>
        <p class="text-3xl text-gray-600 font-bold">Donate for Flood Relief in Feni, Bangladesh</p>
        <p class="text-3xl text-gray-600 font-bold">${firstDonateInput.toFixed(2)}</p>
        `;

        const historyContainer = document.getElementById("history-section");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    })

// Third Button

document.getElementById("third-button")
    .addEventListener("click", function () {
        const firstDonateInput = parseFloat(document.getElementById("third-donate-now-input").value);
        const mainBalance = parseFloat(document.getElementById("main-balance").innerText);

        // Input Validation 
        if (firstDonateInput <= 0 || isNaN(firstDonateInput) || firstDonateInput > mainBalance) {
            alert("Please enter a valid donation amount.");
            return;
        }

        let addedDonation = parseFloat(document.getElementById("added-donation-three").innerText);
        addedDonation += firstDonateInput;

        const totalBalance = mainBalance - firstDonateInput;

        document.getElementById("main-balance").innerText = totalBalance;
        document.getElementById("added-donation-three").innerText = addedDonation;

        // third donation 
        const historyItem = document.createElement("div");
        historyItem.className = 'bg-white p-5 rounded-md border-2';
        historyItem.innerHTML = `
        <p class="text-3xl text-gray-600 font-bold">${new Date().toLocaleDateString()}</p>
        <p class="text-3xl text-gray-600 font-bold"> Aid for Injured in the Quota Movement</p>
        <p class="text-3xl text-gray-600 font-bold">${firstDonateInput.toFixed(2)}</p>
        `;

        // history container section 
        const historyContainer = document.getElementById("history-section");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    })




// history button call back function
document.getElementById("history-button").addEventListener("click", function () {
    // Hide all donation sections by call back function
    historyButton("donation-one");
    historyButton("donation-two");
    historyButton("donation-three");
});

// Donation Button call back function
document.getElementById("donation-button").addEventListener("click", function () {
    // call functions to switch back
    donationButton("donation-one")
    donationButton("donation-two")
    donationButton("donation-three")
    donationButton("history")
})
