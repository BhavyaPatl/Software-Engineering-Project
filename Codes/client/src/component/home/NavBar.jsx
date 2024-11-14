import { Box, Typography, styled } from '@mui/material';
import { navData } from '../../constants/data';

const Component = styled(Box)`
    display: flex;
    margin: 55px 50px 0 50px;
    justify-content: space-between;
`;

const Container = styled(Box)`
    display: flex;
    flex-direction: column; /* Make items stack vertically */
    align-items: center; /* Center-align image and text */
    padding: 12px 12px;
    border: solid;
    border-width: 1px;
    border-radius: 100px; /* Adjust radius as needed */

    width: 100px;  /* Set desired width */
    height: 100px; /* Set the same height to make it circular */
    border-radius: 50%;
    background-color: #3498db; /* Optional: Set a background color */
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 8px; /* Add spacing between image and text */
    font-weight: 600;
    font-family: inherit;
`;

const NavBar = () => {
    return (
        <Component>
            {navData.map((data, index) => (
                <Container key={index}>
                    <img src={data.url} alt="nav" style={{ width: 64 }} />
                    <Text style={{ textAlign: 'center' }}>{data.text}</Text>
                </Container>
            ))}
        </Component>
    );
};

export default NavBar;
