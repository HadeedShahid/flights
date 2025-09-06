import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const destinations = [
  {
    name: "London",
    image: "/images/london.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-london.html",
  },
  {
    name: "Jeddah",
    image: "/images/jeddah.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-jeddah.html",
  },
  {
    name: "Dubai",
    image: "/images/dubai.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-dubai.html",
  },
  {
    name: "Istanbul",
    image: "/images/istanbul.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-istanbul.html",
  },
  {
    name: "Karachi",
    image: "/images/karachi.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-karachi.html",
  },
  {
    name: "Riyadh",
    image: "/images/riyadh.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-riyadh.html",
  },
  {
    name: "Islamabad",
    image: "/images/islamabad.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-islamabad.html",
  },
  {
    name: "Dammam",
    image: "/images/dammam.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-dammam.html",
  },
  {
    name: "Cairo",
    image: "/images/cairo.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-cairo.html",
  },
  {
    name: "New York",
    image: "/images/new-york.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-new-york.html",
  },
  {
    name: "Paris",
    image: "/images/paris.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-paris.html",
  },
  {
    name: "Milan",
    image: "/images/milan.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-milan.html",
  },
  {
    name: "Tokyo",
    image: "/images/tokyo.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-tokyo.html",
  },
  {
    name: "Dhaka",
    image: "/images/dhaka.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-dhaka.html",
  },
  {
    name: "Kuwait City",
    image: "/images/kuwait.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-kuwait-city.html",
  },
  {
    name: "Washington",
    image: "/images/washington.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-washington.html",
  },
  {
    name: "Federal Territory of Kuala Lumpur",
    image: "/images/kuala.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-federal-territory-of-kuala-lumpur.html",
  },
  {
    name: "Madinah",
    image: "/images/madinah.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-madinah.html",
  },
  {
    name: "New Delhi",
    image: "/images/new-delhi.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-new-delhi.html",
  },
  {
    name: "Mumbai",
    image: "/images/mumbai.jpeg",
    url: "https://www.google.com/travel/flights/flights-to-mumbai.html",
  },
];

export default function PopularDestinations() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Box className="mx-auto relative">
      <Typography variant="h5" className="mb-4 font-semibold text-left">
        Popular flight destinations
      </Typography>

      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        navigation={false} // disable default buttons
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 7 },
        }}
        grabCursor={true} // ✅ enables grab cursor for swipe on desktop
      >
        {destinations.map((d) => (
          <SwiperSlide key={d.name}>
            <Box className="relative rounded-xl overflow-hidden">
              <a href={d.url}>
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-28 object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <Typography className="absolute bottom-2 left-2 text-white font-semibold drop-shadow-lg">
                  {d.name}
                </Typography>
              </a>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Left Button */}
      {!isBeginning && (
        <div
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute top-1/2 -left-5  z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
        >
          <ChevronLeft fontSize="small" />
        </div>
      )}

      {/* Custom Right Button */}
      {!isEnd && (
        <div
          onClick={() => swiperRef.current.slideNext()}
          className="absolute top-1/2 -right-5 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
        >
          <ChevronRight fontSize="small" />
        </div>
      )}
    </Box>
  );
}
