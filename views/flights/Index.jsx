const React = require('react');

const Index = (props) => {
  return (
    <div>
      <h1> Index Route </h1>

<a href="/flights/new">Create a New Flight!</a>

<ul>
  {
    props.flights.map((flight, index) => {
      return (
        <li key={index}>
          The <a href={`/flights/${flight._id}`}>{flight.airline}</a> is {flight.flightNo} and it leaves at {flight.departs.toDateString()}
        </li>
      )
    })
  }
</ul>
    </div>
  )
}

module.exports = Index;