import React from "react";
import { NavLink } from "react-router-dom";

const ShoesCard = (props) => {
  const { prod } = props;
  return (
    <NavLink to={`/detail/${prod?.id}`} className="card">
      <div className="thumb">
        <img src={prod?.image} alt="..." />
      </div>
      <div className="content">
        <h3>{prod?.name}</h3>
        <p>{prod?.shortDescription}</p>
      </div>
      <div className="button">
        <div>Buy now</div>
        <div>{prod?.price}$</div>
      </div>
    </NavLink>
  );
};

export default ShoesCard;
