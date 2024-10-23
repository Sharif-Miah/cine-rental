/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MoviContext } from "../../../../Context";
import { getImgUrl } from "../../../../utils/cine-utility";
import MovieModal from "../../MovieModal/MovieModal";
import Rating from "../../Rating/Rating";

const MoviCart = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);
  const { cartData, setCartData } = useContext(MoviContext);

  const notify = () => toast("Wow so easy!");

  const handleDeleteModal = () => {
    setSelectedModal(null);
    setShowModal(false);
  };

  const handleShowModal = (movie) => {
    setSelectedModal(movie);
    setShowModal(true);
  };

  const hanleAddToCart = (event, movie) => {
    event.stopPropagation();

    // const found = cartData.find((item) => item.id === movie.id);
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });

    console.log(found);

    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.error("product alreday added");
    }
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
              onClick={(e) => hanleAddToCart(e, movie)}
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
