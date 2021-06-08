import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

interface IProps {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
}

const SearchCard: React.FC<IProps> = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="searchCard">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchCard__heart" />

      <div className="searchCard__info">
        <div className="searchCard__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchCard__infoBottom">
          <div className="searchCard__stars">
            <StarIcon className="searchCard__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchCard__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
