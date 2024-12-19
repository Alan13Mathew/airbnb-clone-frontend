import Banner from "../components/Banner";
import ExploreNearby from "../Components/ExploreNearby";
import PropertyCard from "../Components/PropertyCard";
import { useAuth } from "../Services/AuthContext";
import { useLoading } from "../Services/LoadingContext";
import { Loader } from "../Components/loader/Loader";
import { useEffect } from "react";

export default function Home() {
  const { user } = useAuth();
  const { isloading, setIsLoading } = useLoading();
  const listings = [
    {
      img: "https://links.papareact.com/xqj",
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "₹30",
      total: "₹117",
    },
    {
      img: "https://links.papareact.com/hz2",
      location: "Private room in center of London",
      title: "Independent luxury studio apartment",
      description:
        "2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen",
      star: 4.3,
      price: "₹40",
      total: "₹157",
    },
    ,
    {
      img: "https://links.papareact.com/hz2",
      location: "Private room in center of London",
      title: "Independent luxury studio apartment",
      description:
        "2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen",
      star: 4.3,
      price: "₹40",
      total: "₹157",
    },
    {
      img: "https://links.papareact.com/xqj",
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "₹30",
      total: "₹117",
    },
    {
      img: "https://links.papareact.com/xqj",
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "₹30",
      total: "₹117",
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {isloading ? (
        <Loader type="travel" />
      ) : (
        <div className="pt-20">
          {/* Added padding-top to account for fixed header */}
          <Banner />
          <main className="max-w-7xl mx-auto px-8 sm:px-16">
            {/* <ExploreNearby /> */}

            <section className="pt-6">
              <h2 className="text-4xl font-semibold py-8">Places to stay</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {listings.map((listing, index) => (
                  <PropertyCard key={index} {...listing} />
                ))}
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
