import React, { useEffect } from "react";
import { Button } from "@material-ui/core";

import SearchCard from "../components/SearchCard";
import { useAppDispatch, useAppSelector } from "../store/store";
import { GET_SEARCHPLACES } from "../store/actions";
import { searchPlaces as data } from "../data";

interface SearchPlace {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
}

const Search = () => {
  const dispatch = useAppDispatch();
  const searchPlaces = useAppSelector((state) => state.data.searchPlaces);
  useEffect(() => {
    dispatch({ type: GET_SEARCHPLACES, payload: data });
  }, [dispatch]);
  return (
    <div className="search">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      {searchPlaces.map((searchPlace: SearchPlace) => (
        <SearchCard {...searchPlace} />
      ))}
    </div>
  );
};

export default Search;
