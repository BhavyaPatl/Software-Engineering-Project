import { Box, styled, Typography } from "@mui/material"

const Component = styled(Box)`
    display: flex;

`

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: auto ;
    margin-left: auto ;
    color: orange;
    text-align: center;
`
const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
`
const TRow =styled(Box)`
    display: flex;

   
`
const IBox = styled(Box)`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 50%;
`

const Container = styled(Box)`
    background: #fff;
    margin: 10px;
`
const BoxSlide = () => {

    const title = "hello hi";
    return (
        <Component>
            <Container>
                <Deal style={{background: 'white'}}>
                    <DealText>
                            <span style={{ color: 'orange' }}>{title.split(' ')[0]}</span>{' '}
                            <span style={{ color: 'black' }}>{title.split(' ').slice(1).join(' ')}</span>
                    </DealText>
                </Deal>
                <TRow>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/k5lcvbk0/moisturizer-cream/9/w/g/600-body-lotion-aloe-hydration-for-normal-skin-nivea-lotion-original-imafz8jb3ftt8gf9.jpeg?q=70' /></IBox>
                </TRow>
                <TRow>
                    <IBox> <img src='https://rukminim1.flixcart.com/flap/200/200/image/74bc985c62f19245.jpeg?q=70' /></IBox>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                </TRow>

            </Container>

            <Container>
                <Deal style={{background: 'white'}}>
                    <DealText>
                            <span style={{ color: 'orange' }}>{title.split(' ')[0]}</span>{' '}
                            <span style={{ color: 'black' }}>{title.split(' ').slice(1).join(' ')}</span>
                    </DealText>
                </Deal>
                <TRow>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                </TRow>
                <TRow>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                </TRow>

            </Container>
            
            <Container>
                <Deal style={{background: 'white'}}>
                    <DealText>
                            <span style={{ color: 'orange' }}>{title.split(' ')[0]}</span>{' '}
                            <span style={{ color: 'black' }}>{title.split(' ').slice(1).join(' ')}</span>
                    </DealText>
                </Deal>
                <TRow>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                </TRow>
                <TRow>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                </TRow>

            </Container>

            <Container>
                <Deal style={{background: 'white'}}>
                    <DealText>
                            <span style={{ color: 'orange' }}>{title.split(' ')[0]}</span>{' '}
                            <span style={{ color: 'black' }}>{title.split(' ').slice(1).join(' ')}</span>
                    </DealText>
                </Deal>
                <TRow>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                </TRow>
                <TRow>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                    <IBox> <img src='https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70' /></IBox>
                </TRow>

            </Container>

        </Component>
    )
}

export default BoxSlide;