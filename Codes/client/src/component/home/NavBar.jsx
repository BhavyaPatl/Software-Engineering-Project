import { Box, Typography, styled } from '@mui/material';
import { navData } from '../../constants/data';

const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
`;

const Container = styled(Box)`
    display: flex;
    flex-direction: column; /* Make items stack vertically */
    align-items: center; /* Center-align image and text */
    padding: 12px 8px;
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
                    <Text>{data.text}</Text>
                </Container>
            ))}
        </Component>
    );
};

export default NavBar;
