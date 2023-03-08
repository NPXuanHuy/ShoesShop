import React, { useEffect } from "react";
import ShoesCard from "../../components/shoesCard/ShoesCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getProductAction } from "../../redux/reducers/productReducer";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const getAllProduct = async () => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    const action = getProductAction(result.data.content);
    dispatch(action);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <div id="carouselAPI" className="carousel slide" data-ride="carousel">
        <div>
          <ol className="carousel-indicators">
            <li
              data-target="#carouselAPI"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselAPI" data-slide-to="1"></li>
            <li data-target="#carouselAPI" data-slide-to="2"></li>
            <li data-target="#carouselAPI" data-slide-to="3"></li>
          </ol>
          <div id="slideDisplay" className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-8">
                  <img src={arrProduct[0]?.image} alt="..." />
                </div>
                <div className="col-md-4">
                  <div className="carousel-content">
                    <h2>{arrProduct[0]?.name}</h2>
                    <p>{arrProduct[0]?.description}</p>
                    <a href="#">Buy now</a>
                  </div>
                </div>
              </div>
            </div>
            {arrProduct.slice(1, 4).map((item, index) => {
              return (
                <div className="carousel-item" key={index}>
                  <div className="row">
                    <div className="col-md-8">
                      <img src={item?.image} alt="..." />
                    </div>
                    <NavLink to={`/detail/${item?.id}`} className="col-md-4">
                      <div className="carousel-content">
                        <h2>{item?.name}</h2>
                        <p>{item?.description}</p>
                        <a href="#" className="button">Buy now</a>
                      </div>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <a
              className="carousel-control-prev"
              href="#carouselAPI"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselAPI"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="heading-bar bg w-50 mt-5">
        <h2>Product Feature </h2>
      </div>
      <div className="container">
        <div id="productDisplay" class="row">
          {arrProduct.map((prod, idx) => {
            return (
              <div className="col-md-4" key={prod.id}>
                <ShoesCard prod={prod} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
