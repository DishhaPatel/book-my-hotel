import { useEffect, useMemo, useState } from "react";
import HotelCard from "./HotelCard";
import Pagination from "./Pagination";
import noDataImage from "../assets/no-data.svg";

import "./HotelList.css";
import axios from "axios";
import { FILTER_TYPE } from "../constant";

export default function HotelList({ selectedFilters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelListData, setHotelListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const size = 6;

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://www.gocomet.com/api/assignment/hotels?page=1&size=30`
      );

      if (res.status === 200 && res.data) {
        const finalList = res.data?.hotels.map((_hotel) => {
          const { maxPrice, minPrice } = findMinMaxPrice(_hotel.rooms || []);
          return { ..._hotel, maxPrice, minPrice };
        });
        setHotelListData(finalList);
      }
    } catch (error) {
      console.log("Error =>", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredList = useMemo(
    () => applyFilter(hotelListData, selectedFilters),
    [hotelListData, selectedFilters]
  );

  const paginatedList = useMemo(
    () => getPaginatedList(filteredList, currentPage, size),
    [currentPage, filteredList]
  );

  const totalPages = useMemo(
    () => Math.ceil(filteredList.length / size),
    [filteredList.length]
  );

  return (
    <div className="list-container">
      {/* <div className="sort-container">
        <select name="cars" id="cars">
          <option value="volvo">Rating high to low</option>
          <option value="saab">Rating low to high</option>
          <option value="saab">Price High to Low</option>
          <option value="saab">Price Low to High</option>
        </select>
      </div> */}

      {isLoading && (
        <div className="box-center">
          <div className="page-loader" />
        </div>
      )}

      {!isLoading && paginatedList.length > 0 && (
        <div className="grid-container">
          {paginatedList.map((hotel) => (
            <HotelCard key={hotel.id} details={hotel} />
          ))}
        </div>
      )}

      {!isLoading && paginatedList.length === 0 && (
        <img
          src={noDataImage}
          style={{ objectFit: "contain", width: "100%", height: "500px" }}
        />
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

const findMinMaxPrice = (rooms) => {
  let maxPrice = 0;
  let minPrice = Infinity;

  rooms.forEach((room) => {
    const price = room.price;
    if (price > maxPrice) {
      maxPrice = price;
    }
    if (price < minPrice) {
      minPrice = price;
    }
  });

  return { maxPrice, minPrice };
};

const getPaginatedList = (items, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};

const applyFilter = (items, filters) => {
  let filteredItems = items;
  for (const filter of filters) {
    switch (filter.type) {
      case FILTER_TYPE.city:
        filteredItems = getCityFilter(filteredItems, filter);
        break;
      case FILTER_TYPE.price:
        filteredItems = getPriceFilter(filteredItems, filter);
        break;
      case FILTER_TYPE.rating:
        filteredItems = getRatingFilter(filteredItems, filter);
        break;

      default:
        break;
    }
  }
  return filteredItems;
};

const getCityFilter = (items, filter) =>
  items.filter(
    (item) => item.city?.toLowerCase() === filter.value?.toLowerCase()
  );

const getRatingFilter = (items, filter) =>
  items.filter(
    (item) =>
      Number(item?.rating) >= filter?.min && Number(item?.rating) <= filter?.max
  );

const getPriceFilter = (items, filter) =>
  items.filter((item) => {
    if (filter.value === "1000") {
      return item.maxPrice <= 1000 || item.minPrice <= 1000;
    }

    if (filter.value === "5000") {
      return item.maxPrice >= 5000 || item.maxPrice >= 5000;
    }

    if (filter.value === "1001-2000") {
      return item.minPrice >= 1001 && item.maxPrice <= 2000;
    }

    if (filter.value === "2001-5000") {
      return item.minPrice >= 2001 && item.maxPrice <= 5000;
    }

    if (filter.value === "1001-5000") {
      return item.minPrice >= 1001 && item.maxPrice <= 5000;
    }

    return false;
  });
