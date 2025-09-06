import { Breadcrumbs, Link, Typography } from "@mui/material";
import Faqs from "../components/accordian";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import PopularFlightDestinations from "../components/popularFlightdestinations";
import PopularFlights from "../components/popularFlights";
import UseFullLinks from "../components/usefulLinks";
import "./App.css";

function App() {
  return (
    <div className="max-w-[992px]">
      <Navbar />
      <div className="flex flex-col gap-8">
<Hero />
      <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" href="https://www.google.com/travel/flights" fontSize={14} className="text-blue-500" >
            Flights
          </Link>
          <div className="text-sm font-normal">From Lahore</div>

        </Breadcrumbs>
         <div className="max-w-[992px] flex flex-col gap-14">

          <PopularFlights />
          {/* <PopularFlightDestinations /> */}
          <Faqs />
          <UseFullLinks />
      </div>
      </div>
      
    </div>
  );
}

export default App;
