import React, { useState } from 'react'
import PinTab from '../components/PinTab'
import { Box, Button, Flex, Link, Text, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function OTPVerification() {
    const [otp, setOtp] = useState("")
    const toast = useToast()
    const navigate = useNavigate()
    const handleVerify = () => {
        if (otp == "123456") {
            toast({
                title: `Successful.`,
                description: `OTP has been Verified`,
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top"
            })
            setTimeout(() => {
                navigate("/restaurant")
            }, 2000)
        } else {
            toast({
                title: `OTP is Incorrect`,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "top"
            })
        }
    }
    return (
        <Flex
            m={6}
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"  >
            <Box
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                p={10}>

                <Text
                    fontWeight="700"
                    fontSize={"26px"}
                >OTP Verification</Text>

                <Text
                    fontWeight="500"
                    fontSize={"16px"}
                    textColor={"#8391A1"}>
                    Enter the verification code we just sent on your Mobile Number.
                </Text>

                <Box
                    mt={4}
                    align={"center"}>
                    <PinTab
                        length={6}
                        maxChar={1}
                        setOtp={setOtp} />
                </Box>

                <Button
                    mt={4}
                    width={"100%"}
                    bgColor="#FF6D6A"
                    color={"white"}
                    _hover={{ bgColor: "#FF6D6A" }}
                    onClick={handleVerify}>
                    Verify
                </Button>
                <Text
                    mt={2}
                    fontWeight={500}
                    textAlign={"center"}
                >Didn't received code?
                    <Link color={"#5574C6"}
                    >Resend</Link></Text>
            </Box>
        </Flex>

    )
}

export default OTPVerification