const flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

//checks if the flights cointains scales  

const scaleFlightChecker = (arr) => {
    for (const element of arr) {
        if (element.scale === true) {
            console.log(`The flight with origin: ${element.from}, and destination: ${element.to}, has a cost of ${element.cost}€ and has at least 1 scale.`)
    } else {
        console.log(`The flight with origin: ${element.from}, and destination ${element.to}, has a cost of ${element.cost}€ and has no scales.`)
        }
    }
}

const flightMediumCost = (arr) => {
    let totalCost = 0
    let mediumCost 
    for (const element of arr) {
        totalCost += element.cost
    }
    mediumCost = totalCost / 10;
    console.log(mediumCost)
}
    
//greets the user
const greeting = () => {
    const userName = window.prompt('Welcome to Skyklab Airlines! What is your name?');
    window.alert(`Hi ${userName}!`)
}

function airlines () {

    //greeting();
    scaleFlightChecker(flights);
    flightMediumCost(flights);
  

}

airlines();

