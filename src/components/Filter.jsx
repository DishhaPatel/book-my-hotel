import { useState } from "react";
import FilterItem from "./FilterItem";
import TagItem from "./TagItem";
import { CITY_FILTER, PRICE_FILTER, RATING_FILTER } from "../constant";
import "./Filter.css";

function Filter({ selectedFilters, setSelectedFilters }) {
  const handleFilterItemChange = (checked, filter) => {
    if (checked) {
      setSelectedFilters((_filters) => [..._filters, filter]);
    } else {
      setSelectedFilters((_filters) =>
        _filters.filter((f) => f.value !== filter.value)
      );
    }
  };

  const handleFilterRemove = (value) => {
    setSelectedFilters((_filters) => _filters.filter((f) => f.value !== value));
  };

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h5>Filters</h5>
        {selectedFilters.length > 0 && (
          <button className="clear-all" onClick={() => setSelectedFilters([])}>
            CLEAR ALL
          </button>
        )}
      </div>
      <div className="filter-tags">
        {selectedFilters.map((_filter) => (
          <TagItem
            key={_filter.value}
            label={_filter.label}
            value={_filter.value}
            onRemove={handleFilterRemove}
          />
        ))}
      </div>
      <Divider />
      <div className="filters-wrapper">
        <div className="filter-section">
          <h5>PRICE RANGE</h5>

          {PRICE_FILTER.map((_filter) => (
            <FilterItem
              key={_filter.value}
              filter={_filter}
              checked={selectedFilters.some((f) => f.value === _filter.value)}
              handleOnChange={handleFilterItemChange}
            />
          ))}
        </div>
        <Divider />
        <div className="filter-section">
          <h5>RATING</h5>

          {RATING_FILTER.map((_filter) => (
            <FilterItem
              key={_filter.value}
              filter={_filter}
              checked={selectedFilters.some((f) => f.value === _filter.value)}
              handleOnChange={handleFilterItemChange}
            />
          ))}
        </div>
        <Divider />
        <div className="filter-section">
          <h5>CITY</h5>

          {CITY_FILTER.map((_filter) => (
            <FilterItem
              key={_filter.value}
              filter={_filter}
              checked={selectedFilters.some((f) => f.value === _filter.value)}
              handleOnChange={handleFilterItemChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Divider = () => (
  <div
    style={{
      borderBottom: "1px solid rgba(10, 102, 187, 0.12)",
      height: "5px",
    }}
  />
);

export default Filter;
