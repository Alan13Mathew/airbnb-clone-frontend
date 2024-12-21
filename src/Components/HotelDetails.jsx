import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StarIcon } from "@heroicons/react/16/solid";
import { useLoading } from "../Services/LoadingContext";
import hotelApi from "../Services/hotelApi";
import { Loader } from "../Components/loader/Loader";

export default function HotelDetails() {
  const [activeTab, setActiveTab] = useState("details");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const { setIsLoading } = useLoading();
  const navigate = useNavigate();

  // const listings = [
  //   {
  //     id: 1,
  //     img: "https://links.papareact.com/xqj",
  //     location: "Private room in center of London",
  //     title: "Stay at this spacious Edwardian House",
  //     description:
  //       "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
  //     star: 4.73,
  //     price: "₹30",
  //     total: "₹117",
  //     images: [
  //       "https://links.papareact.com/xqj",
  //       "https://links.papareact.com/hz2",
  //       "https://links.papareact.com/xqj",
  //       "https://links.papareact.com/hz2",
  //     ],
  //     amenities: [
  //       "Free WiFi",
  //       "Swimming Pool",
  //       "Spa & Wellness Center",
  //       "24/7 Room Service",
  //       "Fitness Center",
  //       "Restaurant & Bar",
  //     ],
  //     reviews: [
  //       {
  //         id: 1,
  //         user: "John Doe",
  //         rating: 5,
  //         comment:
  //           "Amazing stay! The staff was very friendly and the facilities were excellent.",
  //       },
  //       {
  //         id: 2,
  //         user: "Jane Smith",
  //         rating: 4,
  //         comment: "Great location and comfortable rooms. Would recommend!",
  //       },
  //     ],
  //   },
  //   // Add more hotel data here
  // ];

  // useEffect(() => {
  //   setIsLoading(true);

  //   const foundHotel = listings.find((listing) => listing.id === id);
  //   if (foundHotel) {
  //     setHotel(foundHotel);
  //   } else {
  //     navigate("/not-found");
  //   }

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 800);
  // }, [id]);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      setIsLoading(true);
      try {
        const response = await hotelApi.getHotelById(id);
        setHotel(response.data);
      } catch (error) {
        console.log("Error fetching hotel details", error);
        navigate("/not-found");
      }
      setIsLoading(false);
    };
    fetchHotelDetails();
  }, [id, setIsLoading, navigate]);

  const handleBooking = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 3000);
  };

  if (!hotel) {
    return <Loader type="travel" />;
  }
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <img
              src={hotel.img}
              alt={hotel.title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="grid grid-cols-4 gap-2">
              {hotel.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${hotel.title} view ${index + 1}`}
                  className="h-20 w-full object-cover rounded-lg cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Hotel Info */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{hotel.title}</h1>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(hotel.star)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-gray-500 ml-2">
                {hotel.star} (234 reviews)
              </span>
            </div>
            <p className="text-gray-600">{hotel.description}</p>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="text-xl font-semibold">
                  {hotel.price}/night
                </span>
                <button
                  onClick={handleBooking}
                  className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b">
          <div className="flex space-x-8">
            <button
              className={`pb-4 ${
                activeTab === "details" ? "border-b-2 border-rose-600" : ""
              }`}
              onClick={() => setActiveTab("details")}
            >
              Details
            </button>
            <button
              className={`pb-4 ${
                activeTab === "reviews" ? "border-b-2 border-rose-600" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === "details" && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index}>✓ {amenity}</div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              {hotel.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200" />
                    <div>
                      <h4 className="font-semibold">{review.user}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className={`h-4 w-4 ${
                              index < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Success Alert */}
        {bookingSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            Booking successful! Check your email for details.
          </div>
        )}
      </div>
    </>
  );
}
