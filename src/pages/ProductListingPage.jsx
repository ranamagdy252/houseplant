import React from "react";
import plants from "../data/plants";
import ProductCard from "../components/ProductCard";

const ProductListingPage = () => {
  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div style={{ padding: 20 }}>
      <h1>Houseplants For Sale</h1>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: 30 }}>
          <h2>{category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
