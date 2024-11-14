
import { Box, Button, styled } from "@mui/material";

import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
}))

const Image = styled('img')({
    width: '95%', 
    padding : '15px'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem =({product}) =>{
    return (
        <LeftContainer>
            <Box style = {{padding : '15px 20px', border : '1px solid #f0f0f0'}}>
                <img src={product.detailUrl}/>
            </Box>
            <StyledButton variant="contained" style={{marginRight:10, background:'#ff9f00'}}>Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{ background:'#fb541b'}} >BUY NOW</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;