import React from "react";

interface IProps {
  src: string;
  title: string;
  description: string;
  price?: string;
}

const Card: React.FC<IProps> = ({ src, title, description, price }) => {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
