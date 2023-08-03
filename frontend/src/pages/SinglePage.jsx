import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineStar } from "react-icons/ai"
import { BiSolidOffer } from "react-icons/bi"
import { BsPersonCheck } from "react-icons/bs"
function SinglePage() {
  const [data, setData] = useState({})
  let { id } = useParams()
  useEffect(() => {
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

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
      <Box
        width={"90%"}
        margin={"auto"}
        mt={10}
      >
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          color={"#8391A1"}
        >
          Keep your survey secure
        </Text>
      </Box>

      <Flex
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        flexDir={{
          lg: "row",
          md: "row",
          sm: "column",
          base: "column"
        }}
        width={"90%"}
        margin={"auto"}
        justifyContent={"space-around"}
        borderRadius={"10px"}
        mt={8}
        py={10}>
        <Box
          borderRadius={"10px"}
          width={{
            lg: "45%",
            md: "45%",
            sm: "100p%",
            base: "100%"
          }} >
          <Box position={"relative"}>
            <Image
              width={"100%"}
              borderRadius={"10px"}
              height={"400px"}
              src={"https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&w=600"} />
            <Image
              src={"https://www.fastor.ai/_next/static/media/FooterLogo.cf77e888.png"}
              position="absolute"
              bottom="10px"
              right="10px"
              width="100px"
              height="50px"
              alt="Fastor Logo"
            />
          </Box>
        </Box>
        <Flex
          height={"400px"}
          flexDir={"column"}
          width={{
            lg: "45%",
            md: "45%",
            sm: "100p%",
            base: "100%"
          }}>
          <Flex
            pr={2}
            justifyContent={"space-between"}
            mt={5}
            mb={5}>
            <Box >
              <Text
                fontWeight={"bold"}
                fontSize={"2xl"}
              >
                {data.name}
              </Text>
              <Text
                fontSize={"xl"}
                fontWeight={500}
                color={"#4a4b4b"}
              >
                Cakes, Pastry,Pastas
              </Text>
              <Text
                fontSize={"xl"}
                fontWeight={500}
                color={"#4a4b4b"}
              >
                Cannaught Place, New Delhi
              </Text>
            </Box>
            <Flex >
              <Flex
                justifyContent={"center"}
                align={"center"}
              >
                <AiOutlineStar fontSize={"30px"} />
                <Text fontWeight={"semibold"}>4.5</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap={2}
          >
            <Box mt={1}>
              <BiSolidOffer color='#d59474' />
            </Box>

            <Text
              fontWeight={"semibold"}
              color={"#d59474"}
            >4 Offers trending</Text>
          </Flex>
          <Text
            fontWeight={'semibold'}
            mt={8}
            color={"#4a4b4b"}>
            Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default SinglePage