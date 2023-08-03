import { Box, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
const data = [

    "https://images.pexels.com/photos/7190365/pexels-photo-7190365.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7190364/pexels-photo-7190364.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6783155/pexels-photo-6783155.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10026524/pexels-photo-10026524.png?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2955818/pexels-photo-2955818.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5865466/pexels-photo-5865466.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default class HomeSlider2 extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            initialSlide: 0,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <Box marginTop={3}>
                <Slider {...settings}>
                    {data.map((item, i) => {
                        return (
                            <Box borderRadius={"20px"} key={i} position="relative">
                                <Image
                                    borderRadius={"20px"}
                                    width={"90%"}
                                    margin="auto"
                                    src={item}
                                />
                                <Box
                                    fontWeight={"bold"}
                                    textAlign="center"
                                    position="absolute"
                                    bottom="0"
                                    left="50%"
                                    transform="translateX(-50%)" // Center the text horizontally
                                    backgroundColor="rgba(255, 255, 255, 0.8)" // Add a semi-transparent background for better visibility
                                    w="100%"
                                    padding="8px 16px"
                                    borderRadius="10px"
                                >
                                    <Text fontSize={"lg"}>
                                        Nik Baker's
                                    </Text>
                                </Box>
                            </Box>

                        );
                    })}
                </Slider>
            </Box>
        );
    }
}