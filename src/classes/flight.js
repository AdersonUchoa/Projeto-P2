module.exports = class Flight {
    constructor(flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id) {
        this.flight_number = flight_number;
        this.departure_airport = departure_airport;
        this.arrival_airport = arrival_airport;
        this.departure_time = departure_time;
        this.arrival_time = arrival_time;
        this.aircraft_id = aircraft_id;
    }
}
