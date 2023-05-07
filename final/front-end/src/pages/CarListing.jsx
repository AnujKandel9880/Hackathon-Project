import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import Link from '@mui/material/Link';

const CarListing = () => {
  const [sortOption, setSortOption] = useState("none");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSearch = () => {
    // Filter the cars based on the selected price range
    const filteredCars = carData.filter((item) => {
      if (minPrice && maxPrice) {
        return item.price >= minPrice && item.price <= maxPrice;
      } else if (minPrice) {
        return item.price >= minPrice;
      } else if (maxPrice) {
        return item.price <= maxPrice;
      } else {
        return true;
      }
    });

    // Sort the filtered cars based on the selected sort option
    const sortedCars = filteredCars.slice().sort((a, b) => {
      if (sortOption === "low") {
        return a.price - b.price;
      } else if (sortOption === "high") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

    return sortedCars;
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select value={sortOption} onChange={handleSortChange}>
                  <option value="none">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
                
                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />

                <input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />

                <button onClick={handleSearch}>Search</button>
              </div>
            </Col>

            {handleSearch().map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;