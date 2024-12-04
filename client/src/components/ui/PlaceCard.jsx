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
      e.stopPropagation();
      // console.log(count);
      if(count < photos.length-1){
      setCount((count)=> count += 1);
      setIsVisibleRight(true);
      }else{
        setIsVisibleRight(false)
      }
      // if(count == photos.length-1) setIsVisible(false);
  }
  function imageChangedLeft(e){
    e.stopPropagation();
    if(count > 0){
      setCount((count) => count = count - 1);
      // setIsVisibleLeft(true);
    }
  }
  
  function displayFlex(){
    if(count < photos.length-1)
    setIsVisibleRight(true)
    if(count > 0)
    setIsVisibleLeft(true)
    // console.log(isVisible);
  }
  function displayNone(){
    
    setIsVisibleRight(false)
    
    setIsVisibleLeft(false)
    // console.log(isVisible);
  }
  
  return (<div className='flex flex-col w-full'>
    <i onClick={imageChangedRight} onMouseOver={displayFlex} className={`material-symbols-outlined h-7 w-7 ml-64  mt-28 absolute cursor-pointer  bg-white rounded-2xl items-center justify-center ${isVisibleRight ? "flex" : "hidden"}`}>
              chevron_right
     </i>
          <i onMouseOver={displayFlex} onClick={imageChangedLeft} className={`material-symbols-outlined h-7 w-7 mt-28 ml-3  absolute cursor-pointer bg-slate-50 rounded-2xl items-center justify-center ${isVisibleLeft ? "flex" : "hidden"}`}>
            chevron_left
          </i>
    <Link to={`/place/${placeId}`} onMouseOver={displayFlex} onMouseLeave={displayNone} className=" flex flex-col md:m-2 xl:m-0">
          
      <div className="card ">
        {photos?.[count] && (
          
          <img
            src={`${photos?.[count]}`}
            className="h-4/5 w-full rounded-xl object-cover"
          />
        )}
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
