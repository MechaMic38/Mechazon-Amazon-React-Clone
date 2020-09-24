import "../CSS/Home.css";
import React, { useEffect, useState } from "react";
import Product from "./Product.js";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function Home() {
  const [productList, setProductList] = useState({});
  const [imgList, setImgList] = useState({});

  let carousel;
  let products;

  /*=====================================================
  Retrieves the Product List from local JSON file*/
  useEffect(() => {
    const getProducts = async () => {
      await fetch("/product-list.json")
        .then((response) => response.json())
        .then((data) => setProductList(data))
        .catch((error) =>
          alert(
            "There was a problem retrieving the item list, please try reloading the page or try again later. Sorry for the inconvenient..."
          )
        );
    };

    getProducts();
  }, []);

  /*=====================================================
  Retrieves the Carousel Images List from local JSON file*/
  useEffect(() => {
    const getProducts = async () => {
      await fetch("/img-list.json")
        .then((response) => response.json())
        .then((data) => setImgList(data))
        .catch((error) =>
          alert(
            "There was a problem retrieving the item list, please try reloading the page or try again later. Sorry for the inconvenient..."
          )
        );
    };

    getProducts();
  }, []);

  /*=====================================================
  Retrieves the Carousel Images List from local JSON file*/
  if (imgList.images) {
    const buildCarousel = () => {
      let images = imgList?.images.map(function (img) {
        return <img className="home__imageCarousel" alt="" src={img} />;
      });

      return (
        <Carousel infinite autoPlay={4000} animationSpeed={1000}>
          {images}
        </Carousel>
      );
    };

    carousel = buildCarousel();
  }

  /*=====================================================
  Show Products on page, listed in different rows
  (hope you don't mind some SPAGHETTI CODE u.u)*/
  if (productList.products) {
    //Creates a copy of the original array, to work with
    let copy = JSON.parse(JSON.stringify(productList.products));
    let items_per_row = 3;
    let productsInRow = [];

    //Extracts Products from array
    const takeProducts = (items_per_row) => {
      let products = [];

      for (let i = 0; i < items_per_row; i++) {
        if (copy[0]) {
          //checks for existance of Product
          let product = copy.shift();
          products.push(product);
        }
      }

      return (
        <div className="home__row">
          {products.map(function (product) {
            return (
              <Product
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            );
          })}
        </div>
      );
    };

    while (copy.length > 0) {
      let products = takeProducts(items_per_row);
      items_per_row != 1 ? items_per_row-- : (items_per_row = 3);
      productsInRow.push(products);
    }

    products = [...productsInRow];
  }

  return (
    <div className="home">
      <div className="home__container">
        {carousel}

        {products}
      </div>
    </div>
  );
}

export default Home;
