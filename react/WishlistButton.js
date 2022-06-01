import React from "react";
import cardJson from "./card.json";
import FilterGames from "./FilterGames";

const WishlistButton = () => {
  return (
    <div>
      <FilterGames />
      <div
        style={{
          margin: "2% 5%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gridGap: "1px",
          flexWrap: "wrap",
        }}
      >
        {cardJson.map((item) => {
          return (
            <div
              style={{
                width: "100%",
                borderRadius: "5px",
              }}
            >
              <img
                src={item.image}
                alt="card"
                style={{
                  height: "20rem",
                  width: "80%",
                  margin: "auto",
                  objectFit: "cover",
                }}
              />
              <p>{item.studio}</p>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.promotion}</p>
            </div>
          );
        })}
      </div>
      <button
        style={{
          margin: "2% auto",
          width: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Carregar mais...
      </button>
    </div>
  );
};

export default WishlistButton;
