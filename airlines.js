//flights availables today
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
  { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
]

/* side functions */

//greets the user
const sayHi = () => {
  const userName = window.prompt('Welcome to Skyklab Airlines! What is your name?');
  window.alert(`Hi ${userName}!`);
}

//prints flights in a friendly format
const showFlights = (flights) => {
  for (const element of flights) {
    const { scale } = element; 
    if (scale) {
      console.log(`The flight with origin: ${element.from}, and destination: ${element.to}, has a cost of ${element.cost}€ and has at least 1 scale.`);
    } else console.log(`The flight with origin: ${element.from}, and destination ${element.to}, has a cost of ${element.cost}€ and has no scales.`);
  }
}

//calculates and prints medium cost of total flights
const showFlightsAveragePrice = (flights) => {
  let totalCost = 0;
  let averagePrice;
  for (const element of flights) {
    totalCost += element.cost;
  }
  averagePrice = totalCost / flights.length;
  console.log(`The average price of total flights is ${Math.floor(averagePrice)}€`);
}

//prints the flights with scales
const showFlightsWithScale = (flights) => {
  const flightsWithScale = [];
  for (const element of flights) {
    if (element.scale) {
      flightsWithScale.push(element.to);
    }
  }
  const numberOfFlightsWithScale = flightsWithScale.length;
  console.log(`Today we have ${numberOfFlightsWithScale} fligths with scale to: ${flightsWithScale.join(', ')}`);
};

//prints to user the five last flights of the day
const showsLastFlightsOfTheDay = (flights) => {
 let fiveLastFlights = flights.slice(-5);
 let fiveLastFligthsDestinations =  [];
 for (let i = 0; i < fiveLastFlights.length; i++) {
  fiveLastFligthsDestinations.push(fiveLastFlights[i].to);
  }
  console.log(`The last five flights of today are flying to: ${fiveLastFligthsDestinations.join(', ')}`);
}

/* main function of the program */

function airlines() {
  sayHi();
  showFlights(flights);
  showFlightsAveragePrice(flights);
  showFlightsWithScale(flights);
  showsLastFlightsOfTheDay(flights);
}

airlines();