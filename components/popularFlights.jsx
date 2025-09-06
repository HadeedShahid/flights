import { useEffect, useState } from "react";

export default function LahoreFlights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample flight data for popular destinations from Lahore
  const sampleFlights = [
    {
      city: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=200&fit=crop&auto=format",
      price: "PKR 85,500",
      dates: "Oct 15 — Oct 22",
      duration: "3h 45m",
      stops: 0,
      airline: "Emirates"
    },
    {
      city: "London", 
      country: "UK",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=200&fit=crop&auto=format",
      price: "PKR 207,002",
      dates: "Oct 4 — Oct 13",
      duration: "8h 20m",
      stops: 1,
      airline: "British Airways"
    },
    {
      city: "New York",
      country: "USA", 
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=200&fit=crop&auto=format",
      price: "PKR 277,270",
      dates: "Oct 6 — Oct 13",
      duration: "36h 30m",
      stops: 2,
      airline: "Emirates"
    },
    {
      city: "Sydney",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=200&fit=crop&auto=format",
      price: "PKR 316,961",
      dates: "Nov 10 — Nov 17", 
      duration: "22h 15m",
      stops: 1,
      airline: "Qatar Airways"
    },
    {
      city: "Singapore",
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=200&fit=crop&auto=format",
      price: "PKR 211,847",
      dates: "Sep 18 — Sep 24",
      duration: "8h 45m", 
      stops: 1,
      airline: "Batik Air"
    },
    {
      city: "Los Angeles",
      country: "USA",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=200&fit=crop&auto=format",
      price: "PKR 330,980",
      dates: "Sep 29 — Oct 7",
      duration: "43h 30m",
      stops: 2,
      airline: "Emirates"
    }
  ];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setFlights(sampleFlights);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-left">Popular trips from Lahore</h2>
        <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg p-3 animate-pulse">
              <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-16 h-16 rounded-xl flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between">
                    <div className="space-y-1">
                      <div className="h-4 bg-gray-300 rounded w-20"></div>
                      <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                  </div>
                  <div className="h-3 bg-gray-300 rounded w-32"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-semibold text-left">Cheap flights from Lahore</h2>
         <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-800 text-left">Popular trips from Lahore</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {flights.map((flight, i) => (
          <div key={i} className="bg-white rounded-xl flex gap-2">
              <img 
                src={flight.image} 
                alt={flight.city}
                className="w-48 h-36 rounded-xl object-cover"
              />
            
            <div className="w-full flex flex-col items-start py-4 px-4 gap-1">
              <div className="flex justify-between items-start w-full">
                  <h3 className="text-base font-semibold text-gray-800">{flight.city}</h3>
                <span className="text-lg font-bold text-gray-800">{flight.price}</span>
              </div>
                  <p className="text-gray-600 text-sm">{flight.dates}</p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  {flight.stops === 0 ? "Non-stop" : `${flight.stops} stop(s)`} &#183; {flight.duration} &#183; {flight.airline}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
}