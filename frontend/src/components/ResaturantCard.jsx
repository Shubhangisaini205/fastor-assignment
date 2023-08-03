import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { BiSolidOffer } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai"
import { FaDollarSign } from "react-icons/fa"
import { Link } from 'react-router-dom'
function ResaturantCard({ el }) {
   
    return (
        <Link  to={`/restaurant/${el.id}`} >   
        <Flex
            key={el.id}
            p={2}
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            flexDir={{
                lg: "column",
                md: "column",
                sm: "row",
                base: "row"
            }}
        >
            <Box
                margin={"auto"}
                borderRadius={"10px"} >

                <Image
                    width={{
                        lg: "300px",
                        md: "300px",
                        sm: "200px",
                        base: "200px"
                    }}
                    height={{
                        lg: "300px",
                        md: "300px",
                        sm: "200px",
                        base: "200px"
                    }}
                    borderRadius={"10px"}
                    src={"https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&w=600"}
                />
            </Box>
            <Box
                margin={"auto"}
                pl={2}
                pr={2}
                width={{
                    lg: "300px",
                    base: "280px"
                }}
                height={"200px"}
            >
                <Box>
                    <Text
                        fontWeight={"bold"}
                        fontSize={"xl"}
                    >
                        {el.name}
                    </Text>
                    <Text
                        fontWeight={500}
                        color={"#848789"}
                    >
                        Cakes, Pastry,Pastas
                    </Text>
                    <Text
                        fontWeight={500}
                        color={"#848789"}
                    >
                        Cannaught Place, New Delhi
                    </Text>
                </Box>



                <Flex
                    gap={2}
                    mt={3}
                >
                    <Box mt={1}>
                        <BiSolidOffer color='#d59474' />
                    </Box>

                    <Text
                        fontWeight={"semibold"}
                        color={"#d59474"}
                    >4 Offers trending</Text>
                </Flex>

                <Flex

                    justifyContent={"space-between"} mt={3}>
                    <Box>
                        <Flex gap={1}>
                            <Box mt={1}>
                                <AiFillStar />
                            </Box>
                            <Text
                                fontWeight={"semibold"}>{el.rating}</Text>
                        </Flex>
                        <Text fontWeight={"semibold"}>Popularity</Text>
                    </Box>
                    <Box>
                        <Flex gap={1}>
                            <Box mt={1}>
                                <FaDollarSign />
                            </Box>
                            <Text
                                fontWeight={"semibold"}>{el.price_starts_from}</Text>
                        </Flex>
                        <Text fontWeight={"semibold"}>Price </Text>
                    </Box>

                </Flex>

            </Box>

        </Flex>
        </Link>
    )
}

export default ResaturantCard