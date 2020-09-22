import "../CSS/Home.css";
import React from "react";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71kj5nomj0L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={3}
          />
          <Product
            id="4903850"
            title="Samsung Gear Fit2 Pro Smartwatch Fitness Band (Large), Liquid Black, SM-R365NZKAXAR – US Version with Warranty"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51hZ1Ix1bdL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED GAming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="2304835729"
            title="AUKEY FHD Webcam, 1080p Live Streaming Camera with Stereo Microphone, Desktop or Laptop USB Webcam for Widescreen Video Calling and Recording"
            price={54.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51NaTEP5xbL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="3725435261"
            title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="9385267154372"
            title="Samsung Electronics EVO Select 256GB microSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME256HA)"
            price={31.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81Cmetw9jTL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="538756436"
            title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
            price={10.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71gK7VlDnGL._AC_SL1280_.jpg"
            rating={4}
          />
          <Product
            id="4387562984"
            title="TP-Link AC750 WiFi Extender | Covers Up to 1200 Sq.ft and 20 Devices Up to 750Mbps| Dual Band WiFi Range Extender | WiFi Booster to Extend Range of WiFi Internet Connection (RE220)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61xNxQEJfkL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="32672354726111"
            title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6' Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard, PH315-53-72XD"
            price={1196.28}
            image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
