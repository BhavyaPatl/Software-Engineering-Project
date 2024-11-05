import { Button, Dialog, TextField, Typography,styled,Box } from "@mui/material";
import { useState } from "react";
import loginimg from './Login.png';

const Component = styled(Box)`
  height: 70vh;
  widht: 50vw;  
`;

const Image = styled(Box)
`
    background: #d8ef47 url(${loginimg}) no-repeat center 75%;
    height: 100%;
    width: 40%;
    background-size: 100%;
    padding: 35px 25px;
    & > p , & > h5 {
        color: #ffffff;
        font-weight: 600;
    }
`;


const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div , & > button , & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background-color: #fb641b;
    color: #ffffff;
    height: 48px;
    border-radius: 4px;
`;
const RequestOTP = styled(Button)`
    text-transform: none;
    background-color: #f3e84e;
    color: #a70f0f;
    height: 48px;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #a70f0f;
    font-weight: 600;
    cursor: pointer;

`;


const LoginDialog = ({open, setOpen }) => {

    const handleClose = () => { 
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}} >
            <Component>
            <Box style={{display:'flex',height:'100%'}}>
                <Image>
                    <Typography variant="h5">Login</Typography>
                    <Typography style={{marginTop:20}}>Get access to your Orders, Wishlist and Recommendations</Typography>
                </Image>
                {
                    true ?
                    <Wrapper>
                        <TextField label="Enter Email" variant="outlined" />
                        <TextField label="Enter Password" variant="outlined" />
                        <Text>By continuing, you agree to DealsDone's Terms of Use and Privacy Policy.</Text>
                        <LoginButton>Login</LoginButton>
                        <Typography style={{textAlign:"center"}}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount>New to DealsDone? Let's create an account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField label="Enter Email" variant="outlined" />
                        <RequestOTP>Request OTP</RequestOTP>
                        <Text>By continuing, you agree to DealsDone's Terms of Use and Privacy Policy.</Text>
                        <Typography style={{textAlign:"center"}}>OR</Typography>
                        <LoginButton>Login</LoginButton>
                        <CreateAccount>New to DealsDone? Let's create an account</CreateAccount>
                    </Wrapper>
                }
                
            </Box>    
            </Component>
        </Dialog>
    )

}

export default LoginDialog;