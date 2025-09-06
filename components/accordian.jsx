import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "How can I find last-minute flight deals?",
    answer: (
      <>
        Finding last-minute flights is easy on Google Flights. Select your{" "}
        <strong>departure</strong> and <strong>destination</strong> cities in
        the form on the top of the page, and use the calendar to pick travel
        dates and find the cheapest flights available. You can even check for
        flights departing today. To find the cheapest tickets, it’s usually best
        to book at least a few weeks in advance for domestic flights and a few
        months in advance for cheap international flights.
      </>
    ),
  },
  {
    question: "How can I find cheap flights for a weekend getaway?",
    answer: (
      <>
        It’s easy to use Google Flights to find deals on weekend getaways or
        even weeklong trips. Just enter your <strong>departure</strong> and{" "}
        <strong>destination</strong> cities near the top of the page. Then, open
        the date selector and choose a trip length to see how the round-trip
        ticket prices changes on different days. Adjust the trip type to see
        one-way tickets. The cheapest available flights are highlighted and easy
        to spot. Once you settle on dates, select Search to see flight options
        and book the deal. You can also turn on price tracking to get alerts if
        the price changes for a route or flight.
      </>
    ),
  },
  {
    question: "How can I find flight deals if my travel plans are flexible?",
    answer: (
      <>
        It’s easy to search for flights, even if your plans are up in the air:
        <ol style={{ marginTop: "8px", marginBottom: "8px" }}>
          <li>
            Tap <strong>Explore</strong> near the top of the page
          </li>
          <li>Then, tap the calendar icon</li>
          <li>
            Toggle to <strong>Flexible dates</strong> and select a time frame or
            trip length
          </li>
          <li>Tap done</li>
        </ol>
        Trip options will appear on the map, with the cheapest available flights
        highlighted and easy to spot. Tap the destination to see available
        flight options you can select and book. Price insights and other useful
        tools can help you find more options that work for your schedule and
        budget.
      </>
    ),
  },
  {
    question: "How can I find cheap flights to anywhere?",
    answer: (
      <>
        You can find cheap flight deals to anywhere in the world on Google
        Flights. Just enter your departure city, choose{" "}
        <strong>Anywhere</strong> as the destination, and select{" "}
        <strong>Explore</strong>. You can pick specific dates or leave departure
        and return dates blank if your plans are flexible. You will see the
        cheapest airline tickets to popular destinations. You can filter the
        results to see only nonstop flights or flights under a certain price to
        more easily plan your perfect budget trip. If you already have a
        destination in mind, you can turn on price tracking to get alerts if the
        fare changes for a route or flight.
      </>
    ),
  },
  {
    question: "How can I get flight alerts for my trip?",
    answer: (
      <>
        You can track flight prices for specific dates or, if your plans are
        flexible, any dates. To get flight alerts for a specific round trip,
        choose your dates and flights and select <strong>Search</strong>. Then,
        you can turn on price tracking.
      </>
    ),
  },
];

export default function Faqs() {
  return (
    <div className="w-full text-left flex flex-col gap-4">
      <h2 className="text-2xl">Frequently asked questions</h2>
      <div>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            square
            sx={{
              borderBottom: "1px solid #ddd",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                textAlign: "left",
                "& .MuiAccordionSummary-content": { margin: 0 },
                "&.Mui-focusVisible": { outline: "none" },
                "&.Mui-focusVisible, &:focus, &:focus-visible": {
                  outline: "none !important",
                  boxShadow: "none !important",
                },
              }}
              onClick={(e) => e.currentTarget.blur()}
            >
              <Typography align="left">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: "left" }}>
              <Typography align="left">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
