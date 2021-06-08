import React, { useEffect } from "react";

import Banner from "../components/Banner";
import Card from "../components/Card";
import { categories as data } from "../data";
import { GET_CATEGORIES } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../store/store";

interface Category {
  src: string;
  title: string;
  description: string;
  price?: string;
}

const Home = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.data.categories);

  useEffect(() => {
    dispatch({ type: GET_CATEGORIES, payload: data });
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        {categories.slice(0, 3).map((category: Category) => (
          <Card {...category} />
        ))}
      </div>
      <div className="home__section">
        {categories.slice(3, 6).map((category: Category) => (
          <Card {...category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
