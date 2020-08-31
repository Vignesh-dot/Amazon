import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/ShakuntalaDevi/1500x600_Hero-Tall_np._CB406910536_.jpg"
        alt=""
      />

      {/* Product id, title, Price, Rating, Image */}
      <div className="home__row">
        <Product
          id="12321342"
          title="OPPO A12 (Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={11490.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71-nSoWl8iL._AC_UY327_FMwebp_QL65_.jpg"
        />

        <Product
          id="12321343"
          title="Lenovo Legion Y740 9th Gen Intel Core i7 15.6 inch FHD Gaming Laptop (16GB/1TB SSD/NVIDIA RTX 2060 6GB Graphics/Windows 10/MS Office/Black/2.2Kg)"
          price={165490}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81i3Elt6tcL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="Just Cause 4 - Steelbook Edition (PS4)"
          price={1999.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81EjXmObojL._SL1500_.jpg"
        />

        <Product
          id="12321345"
          title="VERO MODA Women's Blazer"
          price={3590.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/819grmE%2BfSL._UL1500_.jpg"
        />

        <Product
          id="12321346"
          title="
          Samsung 23 L Solo Microwave Oven (MS23F301TAK/TL, Black)"
          price={5699.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61RZcuVxPFL._SL1500_.jpg"
        />
      </div>
      <Product
        id="12321344"
        title="Syanka Premium Old Fashioned Whiskey Glasses for Wine, Scotch, Cocktails, Juice, and Water Glass Set 6 (Bar Glass, 310 ML)"
        price={490.0}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/71LggyUYwhL._SL1500_.jpg"
      />
      <div></div>
    </div>
  );
}

export default Home;
