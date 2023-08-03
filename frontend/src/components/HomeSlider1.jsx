import { Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";


export default class HomeSlider1 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        marginTop={3}
      >
        <Slider {...settings}>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              height={"430px"}
              objectFit={"cover"}
              src={"https://wallpaperaccess.com/full/679975.jpg"}
            />
          </Box>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              height={"430px"}
              objectFit={"cover"}
              src={"https://png.pngtree.com/background/20210709/original/pngtree-food-menu-fare-meal-background-picture-image_869492.jpg"}
            />
          </Box>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              height={"430px"}
              objectFit={"cover"}
              src={"https://cdn.create.vista.com/downloads/28d5fc31-6ab9-4d2c-8f4d-cfec7a420f88_1024.jpeg"}
            />
          </Box>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              height={"430px"}
              objectFit={"cover"}
              src={"https://wallpaperaccess.com/full/512874.jpg"}
            />
          </Box>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              height={"430px"}
              objectFit={"cover"}
              src={"https://wallpaperaccess.com/full/767256.jpg"}
            />
          </Box>
        </Slider>
      </Box>
    );
  }
}