//flights availables
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

/* side functions */

//greets the user
const sayHi = () => {
    const userName = window.prompt('Welcome to Skyklab Airlines! What is your name?');
    window.alert(`Hi ${userName}!`)
}

//checks if flights have scales  
const scaleChecker = (arr) => {
    for (const element of arr) {
        if (element.scale) {
            return true
        } else return false
    }
}

//show flights in a friendly format
const showFlights = (arr) => {
    for (const element of arr) {
        if (scaleChecker(flights)) {
            console.log(`The flight with origin: ${element.from}, and destination: ${element.to}, has a cost of ${element.cost}€ and has at least 1 scale.`)
    } else {
        console.log(`The flight with origin: ${element.from}, and destination ${element.to}, has a cost of ${element.cost}€ and has no scales.`)
        }
    }
}

//calculates and shows medium cost of total flights
const flightsAveragePrice = (arr) => {
    let totalCost = 0
    let averagePrice 
    for (const element of arr) {
        totalCost += element.cost
    }
    averagePrice = totalCost / 10;
    console.log(`The average price of total flights is ${averagePrice}€`)
}

//shows how many flights has scales
const showFlightsWithScale = (arr) => {
    const flightsWithScale = []
    for (const element of arr) {
        if (element.scale) {
            flightsWithScale.push(element.to)
        }
    }
    const numberOfFlightsWithWScale = flightsWithScale.length
    console.log(`Today we have ${numberOfFlightsWithWScale} fligths with scale to: ${flightsWithScale}`); 
    
}

//shows to user the five last flights of the day
const showsLastFlightsOfTheDay = (arr) => {
    let lastFiveFlights = []
        for (let i = 0; i < arr.length; i++) {
            let lastFive = arr.length - 5
            if (i >= lastFive) {
                lastFiveFlights.push(arr[i].to)
            }
        }
    console.log(`The last flights are ${lastFiveFlights}`)
}
    
/* main function */

function airlines () {
    //sayHi();
    showFlights(flights);
    flightsAveragePrice(flights);
    showFlightsWithScale(flights);
    showsLastFlightsOfTheDay(flights);
}

airlines();
