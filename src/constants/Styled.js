import { Box, Button, OutlinedInput, Stack, styled } from "@mui/material"

export const Wrapper = styled(Stack)({
    top: 0,
    left: 0,
    padding: "20px"
})

export const OutlinedButton = styled(Button)({
    color: "#3b3b3b",
    flex: 1,
    borderColor: "#424242",
    backgroundColor: "#000000",
    borderRadius: "0px",
    "&:hover": {
        borderColor: "#424242"
    }
})