import React, { useState } from "react";

import { Button } from "@material-ui/core";
import DatePicker from "./DatePicker";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showDatePicker && <DatePicker />}

        <Button
          onClick={() => setShowDatePicker((prevState: boolean) => !prevState)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showDatePicker ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
