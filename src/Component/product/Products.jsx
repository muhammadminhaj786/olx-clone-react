import React from "react";
import MyCard from '../MyCard'
import pro1 from "../../assets/pro1.jpeg";
import pro2 from "../../assets/box17img.jpg";
import pro3 from "../../assets/box18img.jpg";
import pro4 from "../../assets/box19img.jpg";
import './Products.css'

import Grid from '@mui/material/Grid';


const Products = () => {
  return (
    <div className="ml-4 mt-7">
      <div className="flex justify-between  h-[80px] border">
        <div className="py-2"><p className="text-[28px] font-bold">Cars</p></div>
        <div className="py-4"><p className="text-[#3A77FF] font-bold text-[15px]">View more &gt; </p></div>
      </div>

        <div className="products">
        <Grid container rowSpacing={1} >
        <Grid item xs={12} sm={6} md={4} lg={3} >
        <MyCard
              CardSrc={pro1}
              price="Rs 1,95,000"
              disc="Toyata belta from 2019"
            />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <MyCard
              CardSrc={pro1}
              price="Rs 1,95,000"
              disc="Toyata belta from 2019"
            />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <MyCard
              CardSrc={pro1}
              price="Rs 1,95,000"
              disc="Toyata belta from 2019"
            />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <MyCard
              CardSrc={pro1}
              price="Rs 1,95,000"
              disc="Toyata belta from 2019"
            />
        </Grid>
      </Grid>
        </div>
    </div>
  );
};

export default Products;
