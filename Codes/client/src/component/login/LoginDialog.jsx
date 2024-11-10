import { Button, Dialog, TextField, Typography, styled, Box } from "@mui/material";
import { useState } from "react";
import loginimg from './Login.png';

import { authenticateSignup } from "../../service/api";

const Component = styled(Box)`
  height: 75vh;
  width: 50vw;   /* Corrected width */
`;

const Image = styled(Box)`
    background: #d8ef47 url(${loginimg}) no-repeat center 75%;
    height: 100%;
    width: 32%;
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

const accountInitialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlists and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValue.login);
    const [signup, setSignup] = useState(signupInitialValues);

    const handleClose = () => { 
        setOpen(false);
        toggleAccount(accountInitialValue.login);
    };

    const toggleSignup = () => {
        toggleAccount(accountInitialValue.signup);
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log("Updated signup data:", signup); // Added label to make log clearer
    };

    const signupUser =async ()=>{
      let response =  await authenticateSignup(signup);
    };

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {account.view === 'login' ? (
                        <Wrapper>
                            <TextField label="Enter Email" variant="outlined" />
                            <TextField label="Enter Password" variant="outlined" />
                            <Text>By continuing, you agree to DealsDone's Terms of Use and Privacy Policy.</Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{ textAlign: "center" }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={toggleSignup}>New to DealsDone? Let's create an account</CreateAccount>
                        </Wrapper>
                    ) : (
                        <Wrapper>
                            <TextField label="Enter Firstname" onChange={onInputChange} name="firstname" variant="outlined" />
                            <TextField label="Enter Lastname" onChange={onInputChange} name="lastname" variant="outlined" />
                            <TextField label="Enter Username" onChange={onInputChange} name="username" variant="outlined" />
                            <TextField label="Enter Email" onChange={onInputChange} name="email" variant="outlined" />
                            <TextField label="Enter Password" onChange={onInputChange} name="password" variant="outlined" />
                            <TextField label="Enter PhoneNo" onChange={onInputChange} name="phone" variant="outlined" />
                            <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    )}
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
