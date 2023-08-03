import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    console.log(mobileNumber)
    const toast = useToast()
    const navigate = useNavigate()
    const handleOTPSent = () => {
        if (mobileNumber.length == 10) {
            toast({
                title: `Successful.`,
                description: `OTP has been sent (123456)`,
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top"
            })
            setTimeout(() => {
                navigate("/otp")
            }, 2000)
        } else {
            toast({
                title: `Number should have 10 digits`,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "top"
            })
        }
    }
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            minHeight="100vh">
            <Box
                textAlign={"center"}
                p={10}
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">

                <Text
                    fontWeight="700"
                    fontSize={"26px"}
                >Enter Your Mobile Number</Text>

                <Text
                    fontWeight="500"
                    fontSize={"16px"}
                    textColor={"#8391A1"}>
                    We will send you the 6 digit verification code
                </Text>

                <FormControl id="mobileNumber" isRequired mt={4}>
                    <Input
                        backgroundColor={"#F7F8F9"}
                        height={"56px"}
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        fontSize="xl"
                        border={"1px solid #DADADA;"}
                        borderRadius={"8px"}
                    />
                </FormControl>
                <Button
                    mt={4}
                    width={"100%"}
                    bgColor="#FF6D6A"
                    color={"white"}
                    _hover={{ bgColor: "#FF6D6A" }}
                    onClick={handleOTPSent}>
                    Send Code
                </Button>
            </Box>
        </Flex>
    );
};

export default Login;
