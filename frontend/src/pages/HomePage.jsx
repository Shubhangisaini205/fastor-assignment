import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BsPersonCheck } from "react-icons/bs"
import { BiSolidOffer } from "react-icons/bi"
import { FaWallet } from "react-icons/fa"

import HomeSlider2 from '../components/HomeSlider2'
import HomeSlider1 from '../components/HomeSlider1'
import RestaurantList from '../components/RestaurantList'
function HomePage() {


    return (
        <Box>
        
            <Box p={5} mb={8} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >
                <Flex>
                    <Text textColor={"#5b5e61"}>Pre Order From
                    </Text>
                    <Box mt={1} ml={1}>
                        <BsPersonCheck />
                    </Box>
                </Flex>
                <Text fontWeight={"bold"} color={'gray.700'} >Connaught Place</Text>
            </Box>

            <Flex py={5} boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" width={"95%"} margin={"auto"} justifyContent={"space-between"}  >
                <Box ml={3}>
                    <Text fontSize={"3xl"} fontWeight={"bold"}>Karan</Text>
                    <Text fontSize={"lg"} fontWeight={500}   >Let's explore this evening</Text>
                </Box>


                <Flex justifyContent={"center"} align={"center"}>
                    <Box display={{
                        lg: "block",
                        md: "block",
                        sm: "none",
                        base: "none",
                    }}>
                        <Image
                            src={"https://www.fastor.ai/_next/static/media/FooterLogo.cf77e888.png"}

                            width="100px"
                            height="50px"
                            alt="Fastor Logo"
                        />
                    </Box>
                </Flex>

                <Flex gap={5} mr={3}>
                    <Flex
                        borderRadius={"8px"}
                        bgColor={"#ff6969"}
                        width={{ lg: "100px", md: "100px", sm: "100px", base: "80px" }}
                        height={{ lg: "100px", md: "100px", sm: "100px", base: "80px" }}
                        justifyContent="center" alignItems="center" >

                        <BiSolidOffer
                            color='white'
                            fontSize={"70px"}
                        />
                    </Flex>
                    <Flex
                        borderRadius={"8px"}
                        bgColor={"#476bc5"}
                        width={{ lg: "100px", md: "100px", sm: "100px", base: "80px" }}
                        height={{ lg: "100px", md: "100px", sm: "100px", base: "80px" }}
                        justifyContent="center" alignItems="center" >

                        <FaWallet
                            color='white'
                            fontSize={"65px"}
                        />
                    </Flex>
                </Flex>


            </Flex>

            <Box width={"95%"} margin={"auto"}  mt={30} py={5} >
                <Text
                    fontSize={"30px"}
                    fontWeight={"semibold"}
                    textAlign="left"
                    ml={3}
                >
                    Your Taste
                </Text>
                <HomeSlider2 />
            </Box>
            <Box mt={20}>
                <HomeSlider1 />
            </Box>


            <Box width={"95%"} margin={"auto"} mt={"20"} >
                <Text
                    fontSize={"30px"}
                    fontWeight={"semibold"}
                    textAlign="left"

                >
                    Popular Ones
                </Text>
                <RestaurantList />
            </Box>


        </Box>
    )
}

export default HomePage