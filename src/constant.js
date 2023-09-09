export const FILTER_TYPE = {
  rating: "rating",
  city: "city",
  price: "price",
};

export const PRICE_FILTER = [
  {
    label: "Up to Rs. 1000",
    value: "1000",
    type: FILTER_TYPE.price,
  },
  {
    label: "Rs. 2001 to Rs. 5000",
    value: "2001-5000",
    type: FILTER_TYPE.price,
  },
  {
    label: "Rs. 1001 to Rs. 2000",
    value: "1001-2000",
    type: FILTER_TYPE.price,
  },
  {
    label: "Rs. 1001 to Rs. 5000",
    value: "1001-5000",
    type: FILTER_TYPE.price,
  },
  {
    label: "Above Rs. 5000",
    value: "5000",
    type: FILTER_TYPE.price,
  },
];

export const RATING_FILTER = [
  {
    label: "0 - 1 Star",
    value: "0-1",
    type: FILTER_TYPE.rating,
    min: 0,
    max: 1,
  },
  {
    label: "1 - 2 Star",
    value: "1-2",
    type: FILTER_TYPE.rating,
    min: 1,
    max: 2,
  },
  {
    label: "2 - 3 Star",
    value: "2-3",
    type: FILTER_TYPE.rating,
    min: 2,
    max: 3,
  },
  {
    label: "3 - 4 Star",
    value: "3-4",
    type: FILTER_TYPE.rating,
    min: 3,
    max: 4,
  },
  {
    label: "4 - 5 Star",
    value: "4-5",
    type: FILTER_TYPE.rating,
    min: 4,
    max: 5,
  },
];

export const CITY_FILTER = [
  {
    label: "Mumbai",
    value: "mumbai",
    type: FILTER_TYPE.city,
  },
  {
    label: "Delhi",
    value: "delhi",
    type: FILTER_TYPE.city,
  },
  {
    label: "Bengaluru",
    value: "Bengaluru",
    type: FILTER_TYPE.city,
  },
  {
    label: "Ahmedabad",
    value: "ahmedabad",
    type: FILTER_TYPE.city,
  },
  {
    label: "Kolkata",
    value: "kolkata",
    type: FILTER_TYPE.city,
  },
  {
    label: "Jaipur",
    value: "Jaipur",
    type: FILTER_TYPE.city,
  },
];
