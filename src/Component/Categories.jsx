import React from "react";
import Imgcomponent from "./Imgcomponent";
import mobile from "../assets/mobile.png";
import vechile from "../assets/vechile.png";
import property from "../assets/property.png";
import rent from "../assets/rent.png";
import bike from "../assets/bike.png";
import animals from "../assets/animals.png";
import books from "../assets/books.png";
import fashions from "../assets/fashions.png";
import furniture from "../assets/furniture.png";
import business from "../assets/business.png";
import electronics from "../assets/electronics.png";
import jobs from "../assets/jobs.png";



import { Grid } from "@mui/material";

const Categories = () => {
  return (
    <div className="mt-10 w-[80%] mx-auto">
      <h2>All Categories</h2>

      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={mobile} content={"Mobile"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={vechile} content={"Vechicle"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={property} content={"Property"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={electronics} content={"Electronics"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={rent} content={"Rent"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={bike} content={"Bike"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={animals} content={"Animals"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={books} content={"Books"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={furniture} content={"Furniture"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={fashions} content={"Fashions"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={jobs} content={"Jobs"} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Imgcomponent imgSrc={business} content={"Business"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Categories;
