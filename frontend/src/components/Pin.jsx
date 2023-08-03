import { Flex, Input } from '@chakra-ui/react'
import React, { forwardRef } from 'react'

const Pin = forwardRef(({ maxChar, forOnChange, forBackSpace }, ref) => {
    const handleKeyUp = (e) => {
        if (e.keyCode == 8) {
            //handle backspace keyStroke
            forBackSpace(e)
        } else {
            //default behaviour
            forOnChange(e)
        }
    }
    return (
        <Input
            border={"1px solid black"}
            maxLength={maxChar}
            ref={ref}
            type='number'
            // onChange={forOnChange}
            onKeyUp={handleKeyUp}
        />
    )

})

export default Pin