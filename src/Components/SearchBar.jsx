import { useState } from "react";

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("stays");
  const [searchParams, setSearchParams] = useState({
    location: "",
    check_in_date: "",
    check_out_date: "",
    adults: "",
    children: "",
    rooms: "",
    smoking: "",
    pets: "",
    currency: "",
  });

  const tabs = [
    { id: "stays", label: "Stays" },
    { id: "activities", label: "Activities" },
    { id: "experiences", label: "Experiences" },
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Search Tabs */}
      <div className="flex justify-center mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all
              ${
                activeTab === tab.id
                  ? "bg-gray-100 text-gray-800"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Search Bar */}
      <div
        className={`flex flex-col md:flex-row items-center bg-white rounded-full border 
          ${isExpanded ? "shadow-2xl" : "shadow-md"} 
          transition-all duration-300`}
        onClick={() => setIsExpanded(true)}
      >
        {/* Location */}
        <div className="flex-1 w-full md:w-auto">
          <div className="relative p-4">
            <label className="block text-xs font-bold text-gray-700">
              Where
            </label>
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full text-sm outline-none bg-transparent"
              value={searchParams.location}
              onChange={(e) =>
                setSearchParams({ ...searchParams, location: e.target.value })
              }
            />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-gray-200" />

        {/* Check-in/Check-out */}
        <div className="flex-1 w-full md:w-auto">
          <div className="relative p-4">
            <label className="block text-xs font-bold text-gray-700">
              When
            </label>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm outline-none bg-transparent"
              value={searchParams.dates}
              onChange={(e) =>
                setSearchParams({ ...searchParams, dates: e.target.value })
              }
            />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-gray-200" />

        {/* Guests */}
        <div className="flex-1 w-full md:w-auto">
          <div className="relative p-4">
            <label className="block text-xs font-bold text-gray-700">Who</label>
            <input
              type="text"
              placeholder="Add guests"
              className="w-full text-sm outline-none bg-transparent"
              value={searchParams.guests}
              onChange={(e) =>
                setSearchParams({ ...searchParams, guests: e.target.value })
              }
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="p-2 md:p-4">
          <button className="bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded Search Overlay */}
      {isExpanded && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsExpanded(false)}
          />
          <div className="absolute top-full left-0 right-0 bg-white rounded-3xl shadow-2xl mt-4 p-6 z-50">
            {/* Quick Filters */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {[
                "Entire homes",
                "Pet-friendly",
                "Free cancellation",
                "Beachfront",
                "Luxury",
              ].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Popular Destinations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["London", "Paris", "New York", "Tokyo"].map((city) => (
                <button
                  key={city}
                  className="p-4 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-medium">{city}</h3>
                  <p className="text-sm text-gray-500">Trending destination</p>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
