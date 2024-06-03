import React from "react";

const MoviesCard = () => {
  return (
    <div
      className="h-[40vh] w-[200px] my-4 bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between"
      style={{ backgroundImage: `url(https://picsum.photos/200/300)` }}
    ></div>
  );
};

export default MoviesCard;

