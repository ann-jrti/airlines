//greeting function
const flights = [
    {
        name: 'BCN-MAD',
        origin: 'Barcelona',
        destination: 'Madrid',
        price: 100,
        scale: false,
        showFlightInfo: function() {
            if (this.scale === true) {
                return `The flight with origin: ${this.origin}, and destination: ${this.destination}, has a cost of ${this.price}€ and has at least 1 scale.`
            } else {
                return `The flight with origin: ${this.origin}, and destination ${this.destination}, has a cost of ${this.price}€ and has no scales.`
            }
        }
    },
    {
        name: 'ALC-DUB',
        origin: 'Alicante',
        destination: 'Dublin',
        price: 59,
        scale: true,
        showFlightInfo: function() {
            if (this.scale === true) {
                return `The flight with origin: ${this.origin}, and destination: ${this.destination}, has a cost of ${this.price}€ and has at least 1 scale.`
            } else {
                return `The flight with origin: ${this.origin}, and destination ${this.destination}, has a cost of ${this.price}€ and has no scales.`
            }
        }
    },
    {
        name: 'MAD-ALC',
        origin: 'Madrid',
        destination: 'Alicante',
        price: 110,
        scale: false,
        showFlightInfo: function() {
            if (this.scale === true) {
                return `The flight with origin: ${this.origin}, and destination: ${this.destination}, has a cost of ${this.price}€ and has at least 1 scale.`
            } else {
                return `The flight with origin: ${this.origin}, and destination ${this.destination}, has a cost of ${this.price}€ and has no scales.`
            }
        }
    },
]
flights.forEach(element => {
        console.log(element.showFlightInfo());
});



const greeting = () => {
    const userName = window.prompt('Welcome to Skyklab Airlines! What is your name?');
    window.alert(`Hi ${userName}!`)
}

function airlines () {

    greeting();    

}

airlines();
