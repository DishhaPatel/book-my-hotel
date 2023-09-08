import { useEffect, useState } from "react";
import HotelInfo from "../section/HotelInfo";
import RoomList from "../section/RoomList";
import HotelAbout from "../section/HotelAbout";
import axios from "axios";
import { useParams } from "react-router-dom";

// ------------------------------------

function HotelDetailsPage() {
  const [fetchedDetails, setFetchedDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { hotelId } = useParams();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://www.gocomet.com/api/assignment/hotels/${hotelId}`
      );

      if (res.status === 200 && res.data) {
        setFetchedDetails(res.data?.hotel);
      } else {
        setError("Something went wrong. Please try again later.");
      }

      console.log(res);
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="box-center">
          <div className="page-loader" />
        </div>
      )}
      {!isLoading && fetchedDetails && (
        <>
          <HotelInfo info={fetchedDetails} />
          <RoomList
            rooms={fetchedDetails?.rooms || []}
            hotelName={fetchedDetails?.name}
          />
          <HotelAbout
            name={fetchedDetails?.name || ""}
            description={fetchedDetails?.description || ""}
          />
        </>
      )}
      {!isLoading && !fetchedDetails && error && <h1>{error}</h1>}
    </>
  );
}

export default HotelDetailsPage;
