const React = require('react')

const Show = (props) => {
    return (
        <div>
            <h1> Show Page </h1>
            <p>
                The {props.flight.airline} flight number is {props.flight.flightNo} and it leaves at {props.flight.departs.toDateString() ? "datetime-local" : "one year from the date created!"}.
            </p>
        </div>
    )
}

module.exports = Show;