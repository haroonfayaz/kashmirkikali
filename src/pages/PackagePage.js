import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ServicesCard from "../components/ServicesCard";
import HotelCard from "../components/HotelCard";
import p1 from "../assets/images/p1.jpg";
import p4 from "../assets/images/p4.jpg";

const PackagePage = () => {
  const packageData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1576424298745-7467a0aa532b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "Bronze Package",
      priceRange: "₹10,000 - ₹12,000",
      duration: "4D/3N",
      hotelStars: "3 Star Hotel",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
      title: "Silver Package",
      priceRange: "₹20,000 - ₹28,000",
      duration: "5D/4N",
      hotelStars: "4 Star Hotel",
    },
    {
      imageUrl: p4, // Update this path if necessary
      title: "Gold Package",
      priceRange: "₹40000 - ₹70,000",
      duration: "6D/5N",
      hotelStars: "5 Star Hotel",
    },
    {
      imageUrl: p1, // Update this path if necessary
      title: "Diamond Package",
      priceRange: "₹55,000 - ₹90,000",
      duration: "7D/6N",
      hotelStars: "5 Star Hotel",
    },
  ];

  return (
    <Box mt="4rem" m={2}>
      <ServicesCard />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
            color="primary"
            sx={{
              textAlign: "center",
              mb: {
                xs: 2,
                sm: 3,
                md: 4,
                lg: 5,
              },
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
              },
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#B9F3FC",
                borderRadius: "8px",
                display: "inline", // Ensure the background color wraps around the text only
                padding: "0.4rem 0.8rem", // Optional: Adds some padding around the text
              }}
            >
              Packages
            </Box>
          </Typography>
        </Grid>
        {packageData.map((packData, index) => (
          <Grid item xs={12} md={3} key={index}>
            <HotelCard data={packData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PackagePage;
