import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { UilHeart } from "@iconscout/react-unicons";
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
// import { UilHeart } from '@iconscout/react-unicons'

const MyCard = (props) => {
  let { CardSrc, price, disc } = props;
  return (
    <div className="w-[290px] h-[330px] border mt-2">
      <div className=" h-[47%] ">
        <img className="w-[100%] h-[100%]" src={CardSrc} alt="" />
      </div>
      <div className=" h-[53%] ">
        <div className="flex justify-between w-[90%] mx-auto mt-[10px]">
          <div className="font-bold">Rs 1,12,00</div>
          <div>
            <Unicons.UilHeart />
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-[10px]">
          <p>
            Lorem ipsum dolor sit, consectetur adipisicing elit. Quas
            mollitia  sunt accusamus.
          </p>
          <p className="mt-2 text-[13px] text-[gray] ">
            karachi, Pakistan
          </p>
          <p className="text-[13px] text-[gray]" >
            3 weeks ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
