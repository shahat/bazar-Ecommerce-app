import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";
import { productsData } from "../api/api";
function Home() {
  const [products, setProducts] = useState();
  const data = useLoaderData();
  console.log("this is the data in home ", data);
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
}
export default Home;
