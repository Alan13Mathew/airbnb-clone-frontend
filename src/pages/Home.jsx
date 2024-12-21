import Banner from "../components/Banner";
import ExploreNearby from "../Components/ExploreNearby";
import PropertyCard from "../Components/PropertyCard";
import { useAuth } from "../Services/AuthContext";
import { useLoading } from "../Services/LoadingContext";
import { Loader } from "../Components/loader/Loader";
import hotelApi from "../Services/hotelApi";
import { useState, useEffect } from "react";

export default function Home() {
  const { user } = useAuth();
  const { isloading, setIsLoading } = useLoading();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchHotels = async () => {
      setIsLoading(true);
      try {
        const response = await hotelApi.getAllHotels();
        console.log("API Response:", response); // Check the response structure
        // Ensure we're setting an array
        setListings(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.log("Error fetching hotels:", error);
          setListings([]); // Set empty array on error
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotels();

    return () => {
      controller.abort();
    };
  }, [setIsLoading]);

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
                {listings && listings.length > 0 ? (
                  listings.map((listing) => (
                    <PropertyCard key={listing._id} {...listing} />
                  ))
                ) : (
                  <p>No listings available</p>
                )}
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
