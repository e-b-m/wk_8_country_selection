console.log("hi");

// Take the output from your getCountryByName() function and make use of it on the webpage. You'll need to access specific properties within the returned object, such as name. This will also involve you creating a variable associated with the section created earlier and making use of the createElement() and .append() methods

const getCountryByName = async (countryName) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
        console.log(jsonData[0]); 
      return (jsonData[0])
    });

    getInformationOnCountry(response); 

};

const getInformationOnCountry = (jsonData) => {
    const countryName = jsonData["name"]["common"]; 
    const countryInfo = document.createElement("p");
    countryInfo.textContent = countryName; 
    const countryPopulation = document.createElement("p"); 
    countryPopulation.textContent = `The population of ${countryName} ${jsonData["population"]}`;
    const countrySection = document.querySelector("#Country-Section");
    countrySection.appendChild(countryInfo);
    countrySection.appendChild(countryPopulation);
}; 


const getAllCountries = async () => {
    const response = await fetch (
        "https://restcountries.com/v3.1/all"

    )
    .then((response)=>{
        return response.json()
    })

    response.forEach(countryName => getInformationOnCountry(countryName))
}

getAllCountries(); 

const chosenCountry = (event) => {
    event.preventDefault();

    //Choose country
    const countrySubmitButton = document.createElement("button");
    countrySubmitButton.setAttribute();
    const inputText = document.querySelectorAll();
    task.textContent = event.target.newTask.value;

}

addEventListener()
// Modify your code to additionally display the population of the specified country on your webpage - DONE 

// Create a getAllCountries() function which similarly displays the name and population of each country to the frontend. See the tip below about abstracting your functionality. Have this method called on page load - DONE 

// Create an HTML form which allows you to input the name of a country which is used to "filter" the information on the front-end on-submit. This will call your getCountryByName() function
