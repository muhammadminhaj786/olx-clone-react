import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { UilHeart } from "@iconscout/react-unicons";
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
// import { UilHeart } from '@iconscout/react-unicons'

const MyCard = (props) => {
  let { CardSrc, price, disc } = props;
  return (
    <div className="w-[290px] h-[330px]">
      <div className=" h-[45%] ">
        <img className="w-[100%] h-[100%]" src={CardSrc} alt="" />
      </div>
      <div className=" h-[55%] ">
        <div className="flex justify-between w-[90%] mx-auto mt-[10px]">
          <div>Rs 1,12,00</div>
          <div>
            <Unicons.UilHeart />
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-[10px]">
          <p>
            Lorem ipsum dolor sit, consectetur adipisicing elit. Quas
            mollitia aperiam placeat vitae velit repellat esse sunt.
            accusamus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
