import "../CSS/ProductPage.css";
import React, { useEffect, useState } from "react";

import ProductCarousel from "./ProductCarousel";

import { useParams } from "react-router-dom";
import { useStateValue } from "../Context API/StateProvider";

function ProductPage() {
  const { id } = useParams();
  const [{ basket }, dispatch] = useStateValue();
  const [product, setProduct] = useState({});

  let carousel;

  /*==================================================
  Dispatches action to add item to basket*/
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product.image[0],
        price: product.price,
        rating: product.rating,
      },
    });
  };

  /*==================================================
  Gets the product from product-list.json*/
  useEffect(() => {
    const getProduct = async () => {
      await fetch("/product-list.json")
        .then((response) => response.json())
        .then((data) => {
          setProduct(data.products.filter((item) => item.id == id)[0]); //Takes the product with corresponding ID
        })
        .catch((error) =>
          alert(
            "There was a problem retrieving the item list, please try reloading the page or try again later. Sorry for the inconvenient..."
          )
        );
    };

    getProduct();
  }, []);

  /*==================================================
  Builds the image carousel for the product*/

  /*if (product.image) {
    const buildCarousel = () => {
      let images = product?.image.map(function (img) {
        return <img className="productPage__imageCarousel" alt="" src={img} />;
      });

      return (
        <Carousel infinite autoPlay={4000} animationSpeed={1000}>
          {images}
        </Carousel>
      );
    };

    carousel = buildCarousel();
  }*/

  if (product.image) {
    carousel = <ProductCarousel imageList={product.image} />;
  }

  return (
    <div className="productPage">
      <div className="productPage__main">
        <div className="productPage__mainImage">{carousel}</div>
        <div className="productPage__mainDetails">
          <div className="productPage__info">
            <p className="productPage__title">{product?.title}</p>

            {product.rating && (
              <div className="productPage__rating">
                {Array(product?.rating)
                  .fill()
                  .map((_, i) => (
                    <p>🌟</p>
                  ))}
              </div>
            )}

            {product.title && <hr className="productPage__separator" />}

            {product.price && (
              <div className="productPage__actions">
                <p className="productPage__actionsPrice">
                  <span style={{ color: "black", fontSize: "1rem" }}>
                    Price:{" "}
                  </span>
                  <strong>${product?.price?.toFixed(2)}</strong>
                </p>

                <button
                  className="productPage__actionsAddButton"
                  onClick={addToBasket}
                >
                  Add to Basket
                </button>
              </div>
            )}

            {product.title && <hr className="productPage__separator" />}

            <ul className="productPage__descriptions">
              {product?.descriptions?.map((desc) => (
                <li className="productPage__description">{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
