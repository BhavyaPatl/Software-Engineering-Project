import { Button, Dialog, TextField, Typography, styled, Box } from "@mui/material";
import PasswordChecklist from 'react-password-checklist';

import { useState,useContext } from "react";

import loginimg from './Login.png';

import { authenticateSignup, authenticateLogin } from "../../service/api";

import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  height: 75vh;
  width: 50vw;   /* Corrected width */
`;

const Image = styled(Box)`
    background: #d8ef47 url(${loginimg}) no-repeat center 75%;
    height: 115%;
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
    background-color: #FFA500;
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

const Error = styled(Typography)`
    font-size: 10px;
    color:#ff6161;
    line-height:0;
    margin-top: 10px;
    font-weight:600;
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

const loginInitialValues = {
    username:'',
    password:''
};

const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValue.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login,setLogin] = useState(loginInitialValues);
    const [error,setError] = useState(false);
    const [validemail,setvalidemail] = useState(false);

    const {setAccount} = useContext(DataContext);

    const handleClose = () => { 
        setOpen(false);
        toggleAccount(accountInitialValue.login);
        setError(false);
    };

    const handleKeyDown = (e) =>{
        if(!["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key) && !/^\d$/.test(e.key)){
            e.preventDefault();
        }
    };

    const toggleSignup = () => {
        toggleAccount(accountInitialValue.signup);
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'email' && !validateEmail(value)) {
            setvalidemail('Please enter a valid email address');
        } else {
            setvalidemail(false); // Clear error if email is valid
        }
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log("Updated signup data:", signup); // Added label to make log clearer
    };

    const onValueChange = (e)=>{
        setLogin({...login,[e.target.name]: e.target.value});
        console.log(signup);
    };

    const loginUser =async()=>{
        let response =await authenticateLogin(login);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
            
        }
        else{
            setError(true);
        }
    };

    const signupUser =async ()=>{
      let response =  await authenticateSignup(signup);
      if(!response) return;
      handleClose();
      setAccount(signup.firstname);
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
                            <TextField label="Enter Username"  onChange={(e)=>onValueChange(e)} name="username"  variant="outlined" />
                            {error && <Error>Pleasr Enter valid username or Password</Error>}
                            
                            <TextField label="Enter Password" onChange={(e)=>onValueChange(e)} name="password" variant="outlined" />
                            
                            <Text>By continuing, you agree to DealsDone's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: "center" }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={toggleSignup}>New to DealsDone? Let's create an account</CreateAccount>
                        </Wrapper>
                    ) : (
                        <Wrapper>
                            <TextField label="Enter Firstname" onChange={(e)=>onInputChange(e)} name="firstname" variant="outlined" />
                            <TextField label="Enter Lastname" onChange={(e)=>onInputChange(e)} name="lastname" variant="outlined" />
                            <TextField label="Enter Username" onChange={(e)=>onInputChange(e)} name="username" variant="outlined" />
                            <TextField label="Enter Email" onChange={(e)=>onInputChange(e)} name="email" variant="outlined" />
                            {validemail && <Error>{validemail}</Error>}
                            <TextField label="Enter Password" onChange={(e)=>onInputChange(e)} value={signup.password} name="password" variant="outlined" />
                            <PasswordChecklist
                                rules={["minLength","specialChar","number","capital","lowercase"]}
                                minLength={8}
                                value={signup.password}
                                // valueAgain={passwordAgain}
                            />
                            <TextField label="Enter PhoneNo" onChange={(e)=>onInputChange(e)}  onKeyDown={handleKeyDown} name="phone" variant="outlined" />
                            <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    )}
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
