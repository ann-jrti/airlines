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
];

/* -------- AIRLINES -------- */

/* side functions */

//greets the user
const sayHi = () => {
  const userName = window.prompt('Welcome to Skyklab Airlines! What is your name?');
  if (userName !== null) {
    window.alert(`Hi ${userName}!`);
  } else window.alert(`Hi guest!`)
};

//prints flights in a friendly format
const showFlights = (flights) => {
  for (const element of flights) {
    const { scale } = element;
    if (scale)
      console.log(`[${element.id}] The flight with origin: ${element.from}, and destination: ${element.to}, has a cost of ${element.cost}€ and has at least 1 scale.`);
    else
      console.log(`[${element.id}] The flight with origin: ${element.from}, and destination ${element.to}, has a cost of ${element.cost}€ and has no scales.`);
  }
};

//calculates and prints medium cost of total flights
const showFlightsAveragePrice = (flights) => {
  let totalCost = 0;
  for (const element of flights) {
    totalCost += element.cost;
  }
  let averagePrice = totalCost / flights.length;
console.log(`The average price of total flights is ${Math.floor(averagePrice)}€`);};

//prints the flights with scales
const showFlightsWithScale = (flights) => {
  const flightsWithScale = [];
  for (const element of flights) {
    if (element.scale) flightsWithScale.push(element.to);
  }
  const numberOfFlightsWithScale = flightsWithScale.length;
  console.log(`Today we have ${numberOfFlightsWithScale} fligths with scale to: ${flightsWithScale.join(', ')}`);
};

//prints to user the five last flights of the day
const showsLastFlightsOfTheDay = (flights) => {
  let fiveLastFlights = flights.slice(-5);
  let fiveLastFligthsDestinations = [];
  for (let i = 0; i < fiveLastFlights.length; i++) {
    fiveLastFligthsDestinations.push(fiveLastFlights[i].to);
  }
  console.log(`The last five flights of today are flying to: ${fiveLastFligthsDestinations.join(', ')}`);
};

/* main function of the program */

function airlines() {
  sayHi();
  showFlights(flights);
  showFlightsAveragePrice(flights);
  showFlightsWithScale(flights);
  showsLastFlightsOfTheDay(flights);
}

airlines();

/* -------- AIRLINES PRO -------- */

/* side functions */

const isValidStringInput = (promptInput, keyword1, keyword2, keyword3) => {
  while (typeof promptInput === 'string' && promptInput !== keyword1 && promptInput !== keyword2 && promptInput !== keyword3) {
    window.alert(`Error! Please insert the correct input or press "cancel" to exit`);
    return false;
  }
  return true;
};

const isValidNumberInput = (promptInput) => {
  while (typeof promptInput === 'number' && isNaN(promptInput)) {
    window.alert(`Please type a number or press "cancel" to exit`);
    return false;
  }
  return true;
};

//convert scale input ('yes' or 'no' to boolean value)
const convertToBoolean = (stringInput) => stringInput === 'yes';

//starts program asking user type
const startAirlinesPro = () => {
  let accessType = window.prompt('Are you "admin" or "user"?').toLowerCase();
  if (isValidStringInput(accessType, 'admin', 'user') !== true)
    startAirlinesPro();
  else {
    if (accessType === 'admin') admin();
    if (accessType === 'user') user();
  }
};

/* ADMIN OPTIONS */

//creates a new flight object
const createFlightObject = (id, to, from, cost, scale) => ({
  id: parseFloat(id),
  to,
  from,
  cost: parseFloat(cost),
  scale: convertToBoolean(scale),
});

//asks admin to add a flight
const addFlightQuestion = () => {
  const addOrNot = window.confirm('Do you want to add a flight?');
  if (addOrNot) {
    addFlight();
  }
  console.log('****** AIRLINES UPDATED WITH LAST CHANGES ******');
};

//asks admin to delete a flight
const deleteFlightQuestion = () => {
  const deleteOrNot = window.confirm('Do you want to delete a flight?');
  if (deleteOrNot) deleteFlight();
  else window.alert('Bye!');
};

//performs add a flight
const addFlight = () => {
  if (flights.length < 16) {
    let newFlightInput = window.prompt(`Insert the new flight following this structure: ID, destination, origin, cost, scale
    Example: 11, Madrid, Dublín, 80, yes`).split(', ');
    if (newFlightInput) {
      const [id, to, from, price, scale] = newFlightInput;
      let newFlightObject = createFlightObject(id, to, from, price, scale);
      flights.push(newFlightObject);
    }
    let newQuestion = window.confirm('Would you like to add more flights?');
    if (newQuestion) addFlight();
  } else window.alert(`You've reached the max number of flights added`);
};

//performs delete a flight
const deleteFlight = () => {
  const idFlight = parseFloat(window.prompt('Insert the ID of the flight you want to delete'));
  if (isValidNumberInput(idFlight) !== true) {
    deleteFlight();
  } else {
    const filteredFlights = flights.filter((id) => id.id !== idFlight);
    console.log(`****** FLIGHT WITH ID ${idFlight} DELETED. AIRLINES UPDATED ******`);
    showFlights(filteredFlights);
  }
};

/* USER OPTIONS */

//asks user to sort flights by price
const sortPricesQuestion = () => {
  let sortOrNot = window.confirm('Do you want to sort flights by price?');
  if (sortOrNot) sortPrices();
};

//outputs flights sorted by price
const sortFlightsByPrice = (value, sortType, flights) => {
  for (const element of flights) {
    if (sortType === 'high') {
      const higherPricesFlights = flights.sort((a, b) => a.cost - b.cost);
      const filteredByLowerPrice = higherPricesFlights.filter((flight) => flight.cost > value);
      return filteredByLowerPrice;

    } else if (sortType === 'low') {
      const lowerPricesFlights = flights.sort((a, b) => b.cost - a.cost);
      const filteredByHigherPrice = lowerPricesFlights.filter((flight) => flight.cost < value);
      return filteredByHigherPrice;

    } else if (sortType === 'equal') {
      const filteredBySamePrice = flights.filter((flight) => flight.cost === value);
      return filteredBySamePrice;
    }
  }
};

//performs sort and filter flights by price
const sortPrices = () => {
  const priceAnswer = parseFloat(window.prompt('Insert a price'));
  if (isValidNumberInput(priceAnswer) !== true) sortPrices();
  else {
    const sortType = window.prompt('Type "low", "high" or "equal" to sort flights by price');
    if (isValidStringInput(sortType, 'low', 'high', 'equal') !== true) sortPrices();
    else {
      const sortedFlights = sortFlightsByPrice(priceAnswer, sortType, flights);
      if (sortedFlights.length < 1) window.alert('No results found');
      else {
        console.log(`****** UPDATED AIRLINES WITH FLIGHTS SORTED BY ${sortType.toUpperCase()} PRICE ******`);
        showFlights(sortedFlights);
      }
    }
  }
};

//asks user to purchase a flight
const purchaseFlightQuestion = () => {
  const purchaseOrNot = window.confirm('Do you want to purchase a flight?');
  if (purchaseOrNot) purchaseFlightById();
  else window.alert('See you soon!');
};

//performs purchase flight
const purchaseFlightById = () => {
  const idInput = parseFloat(window.prompt('Insert the ID of the flight you want to purchase'))
  if (isValidNumberInput(idInput) !== true) purchaseFlightById();
  else {
    const matchingIdFlight = flights.filter((id) => id.id === idInput);
    if (matchingIdFlight.length >= 1) {
      window.alert(`Purchase of ID ${idInput} flight completed. See you soon!`);
    } else {
      window.alert('No results found! Please insert an existing ID flight');
      purchaseFlightById();
    }
  }
};

//main functions of user type
function admin() {
  addFlightQuestion();
  showFlights(flights);
  deleteFlightQuestion();
}

function user() {
  sortPricesQuestion();
  purchaseFlightQuestion();
}

//start airlines-pro program
startAirlinesPro();
