import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PlaceCard = ({ place }) => {
  const { _id: placeId, photos, address, title, price } = place;
  const [count, setCount] = useState(0);
  const [isVisibleRight, setIsVisibleRight] = useState(false);
  const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  // console.log(photos.length)

  function imageChangedRight(e) {
    // e.stopPropagation();
    // console.log(count);
    if (count < photos.length - 1) {
      setCount((count) => (count = count + 1));
      setIsVisibleRight(true);
    } else {
      setIsVisibleRight(false);
    }
    // if(count == photos.length-1) setIsVisible(false);
  }
  function imageChangedLeft(e) {
    // e.stopPropagation();
    if (count > 0) {
      setCount((count) => (count = count - 1));
      // setIsVisibleLeft(true);
    }
  }

  function displayFlex() {
    if (count < photos.length - 1) {
      setIsVisibleRight(true);
    } else if (count == photos.length - 1) {
      setIsVisibleRight(false);
    }
    if (count > 0) {
      setIsVisibleLeft(true);
    } else if (count == 0) {
      setIsVisibleLeft(false);
    }

    // console.log(isVisible);
  }
  function displayNone() {
    setIsVisibleRight(false);

    setIsVisibleLeft(false);
    // console.log(isVisible);
  }

  return (
    <div className="relative flex w-full flex-col">
      <i
        onClick={imageChangedRight}
        onMouseOver={displayFlex}
        className={`material-symbols-outlined absolute ml-64 mt-28  h-7 w-7 cursor-pointer  items-center justify-center rounded-2xl bg-white/80 hover:bg-white ${isVisibleRight ? 'flex' : 'hidden'}`}
      >
        chevron_right
      </i>
      <i
        onMouseOver={displayFlex}
        onClick={imageChangedLeft}
        className={`material-symbols-outlined absolute ml-3 mt-28 h-7  w-7 cursor-pointer items-center justify-center rounded-2xl bg-white/80 hover:bg-white ${isVisibleLeft ? 'flex' : 'hidden'}`}
      >
        chevron_left
      </i>

      <Link
        to={`/place/${placeId}`}
        onMouseOver={displayFlex}
        onMouseLeave={displayNone}
        className=" flex flex-col md:m-2 xl:m-0"
      >
        <div className="card ">
          {photos?.[count] && (
            <img
              src={`${photos?.[count]}`}
              className="h-4/5 w-full rounded-xl object-cover"
            />
          )}
          <div className="absolute bottom-24 left-0 right-0">
            <div className="flex h-3 items-center justify-center gap-2">
              {photos.map((item, i) => {
                return (
                  <div
                    className={`h-3 w-3 rounded-full bg-white transition-all ${count === i ? 'p-2' : 'bg-opacity-50'}`}
                  ></div>
                );
              })}
            </div>
          </div>
          <h2 className="truncate font-bold">{address}</h2>
          <h3 className="truncate text-sm text-gray-500">{title}</h3>
          <div className="mt-1">
            <span className="font-semibold">₹{price} </span>
            per night
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlaceCard;
