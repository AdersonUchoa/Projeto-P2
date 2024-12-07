module.exports = class Boarding_pass {
    constructor(seat_number, passenger_id, flight_id, issue_time) {
        this.seat_number = seat_number;
        this.passenger_id = passenger_id;
        this.flight_id = flight_id;
        this.issue_time = issue_time;
    }
}
