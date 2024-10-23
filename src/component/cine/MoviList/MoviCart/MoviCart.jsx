/* eslint-disable react/prop-types */

import { useState } from "react";
import { getImgUrl } from "../../../../utils/cine-utility";
import MovieModal from "../../MovieModal/MovieModal";
import Rating from "../../Rating/Rating";

const MoviCart = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  const handleDeleteModal = () => {
    setSelectedModal(null);
    setShowModal(false);
  };

  const handleShowModal = (movie) => {
    setSelectedModal(movie);
    console.log(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieModal onDelete={handleDeleteModal} movie={selectedModal} />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          className="w-full object-cover"
          src={getImgUrl(`${movie.cover}`)}
          alt="movie codver"
        />
        <a href="#" onClick={() => handleShowModal(movie)}>
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MoviCart;
