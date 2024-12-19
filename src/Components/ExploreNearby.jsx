export default function ExploreNearby() {
  const exploreData = [
    {
      img: "/london.jpg",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "/london.jpg",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "/london.jpg",
      location: "Liverpool",
      distance: "4-hour drive",
    },
    {
      img: "/london.jpg",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "/london.jpg",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "/london.jpg",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
  ];

  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData.map(({ img, distance, location }) => (
          <div
            key={img}
            className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
          >
            <div className="relative h-16 w-16">
              <img src={img} alt={location} className="rounded-lg" />
            </div>

            <div>
              <h3 className="text-lg font-semibold">{location}</h3>
              <p className="text-gray-500">{distance}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
