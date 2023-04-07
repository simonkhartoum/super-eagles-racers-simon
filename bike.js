// Get the bike list container
const bikeList = document.getElementById("bike-list");

// Define a variable to hold the bike data
let data;

// Fetch the bike data from the JSON file
fetch("db.json")
  .then(response => response.json())
  .then(json => {
    data = json;
    // Loop through the bikes and create a card for each one
    data.bikes.forEach(bike => {
      // Create the bike card
      const bikeCard = document.createElement("div");
      bikeCard.classList.add("bike-card");
      bikeCard.style.backgroundImage = `url(${bike.image})`;

      // Create the bike info
      const bikeInfo = document.createElement("div");
      bikeInfo.classList.add("bike-info");
      bikeInfo.innerHTML = `
        <h2>${bike.manufacturer}</h2>
        <h2>${bike.model}</h2>
        <p>Rider: ${bike.driver}</p>
        <p>Mileage: ${bike.mileage}</p>
        <p>Appearance: ${bike.appearance}</p>
        <p>Price($): ${bike.price}</p>
        <p>wins: ${bike.wins}</p>
      `;

      // Add the bike info to the bike card
      bikeCard.appendChild(bikeInfo);

      // Add the bike card to the bike list container
      bikeList.appendChild(bikeCard);
    });
  });

// Add event listener for the search button
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchBikes);

// Define the searchBikes function
function searchBikes() {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value.toLowerCase();
  
  // Check if the data variable is defined and has a bikes property
  if (data && data.bikes) {
    // Filter the bikes based on the driver's name
    const filteredBikes = data.bikes.filter(bike => bike.driver.toLowerCase().includes(searchText));
    
    // Remove any existing bike cards from the bike list container
    while (bikeList.firstChild) {
      bikeList.removeChild(bikeList.firstChild);
    }
    
    // Loop through the filtered bikes and create a card for each one
    filteredBikes.forEach(bike => {
      // Create the bike card
      const bikeCard = document.createElement("div");
      bikeCard.classList.add("bike-card");
      bikeCard.style.backgroundImage = `url(${bike.image})`;

      // Create the bike info
      const bikeInfo = document.createElement("div");
      bikeInfo.classList.add("bike-info");
      bikeInfo.innerHTML = `
        <h2>${bike.manufacturer}</h2>
        <h2>${bike.model}</h2>
        <p>Rider: ${bike.driver}</p>
        <p>Mileage: ${bike.mileage}</p>
        <p>Appearance: ${bike.appearance}</p>
        <p>Price($): ${bike.price}</p>
        <p>wins: ${bike.wins}</p>
      `;

      // Add the bike info to the bike card
      bikeCard.appendChild(bikeInfo);

      // Add the bike card to the bike list container
      bikeList.appendChild(bikeCard);
    });
  }
}

 