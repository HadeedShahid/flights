import React from "react";

const flightLinks = [
  {
    label: "Flights from New York to London",
    url: "https://www.google.com/travel/flights/flights-from-new-york-to-london.html",
  },
  {
    label: "Flights from New York to Paris",
    url: "https://www.google.com/travel/flights/flights-from-new-york-to-paris.html",
  },
  {
    label: "Flights from London to Paris",
    url: "https://www.google.com/travel/flights/flights-from-london-to-paris.html",
  },
  {
    label: "Flights from New York to Rome",
    url: "https://www.google.com/travel/flights/flights-from-new-york-to-rome.html",
  },
  {
    label: "Flights from Montreal to Paris",
    url: "https://www.google.com/travel/flights/flights-from-montreal-to-paris.html",
  },
  {
    label: "Flights from London to Milan",
    url: "https://www.google.com/travel/flights/flights-from-london-to-milan.html",
  },
  {
    label: "Flights from Toronto to London",
    url: "https://www.google.com/travel/flights/flights-from-toronto-to-london.html",
  },
  {
    label: "Flights from New York to Milan",
    url: "https://www.google.com/travel/flights/flights-from-new-york-to-milan.html",
  },
  {
    label: "Flights from London to Dubai",
    url: "https://www.google.com/travel/flights/flights-from-london-to-dubai.html",
  },
  {
    label: "Flights from London to Tokyo",
    url: "https://www.google.com/travel/flights/flights-from-london-to-tokyo.html",
  },
  {
    label: "Flights from Madrid to Rome",
    url: "https://www.google.com/travel/flights/flights-from-madrid-to-rome.html",
  },
  {
    label: "Flights from London to Delhi",
    url: "https://www.google.com/travel/flights/flights-from-london-to-delhi.html",
  },
  {
    label: "Flights from New York to Los Angeles",
    url: "https://www.google.com/travel/flights/flights-from-new-york-to-los-angeles.html",
  },
  {
    label: "Flights from Paris to Marrakech",
    url: "https://www.google.com/travel/flights/flights-from-paris-to-marrakesh.html",
  },
  {
    label: "Flights from Sao Paulo to London",
    url: "https://www.google.com/travel/flights/flights-from-sao-paulo-to-london.html",
  },
  {
    label: "Flights from London to Istanbul",
    url: "https://www.google.com/travel/flights/flights-from-london-to-istanbul.html",
  },
  {
    label: "Flights from Paris to Bangkok",
    url: "https://www.google.com/travel/flights/flights-from-paris-to-bangkok.html",
  },
  {
    label: "Flights from New York to Orlando",
    url: "https://www.google.com/travel/flights/flights-from-new-york-to-orlando.html",
  },
  {
    label: "Flights from London to Berlin",
    url: "https://www.google.com/travel/flights/flights-from-london-to-berlin.html",
  },
  {
    label: "Flights from Chicago to Paris",
    url: "https://www.google.com/travel/flights/flights-from-chicago-to-paris.html",
  },
  {
    label: "Flights from Melbourne to London",
    url: "https://www.google.com/travel/flights/flights-from-melbourne-to-london.html",
  },
];

export default function UseFullLinks() {
  return (
    <section className="flex flex-col gap-4 text-left">
      <h2 className="text-2xl font-semibold">
        Find cheap flights on popular routes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {flightLinks.map((flight, index) => (
          <a
            key={index}
            href={flight.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-left"
          >
            {flight.label}
          </a>
        ))}
      </div>
    </section>
  );
}
