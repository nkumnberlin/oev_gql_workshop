import React from 'react';
import {Grid, Button} from '@material-ui/core'
import styled from 'styled-components';
import RichTextConverter from '../utils/RichTextConverter';

const Header = styled.h1`
    text-align: center;
`;

const Subtitle = styled.h3`
    text-align: center;
    margin-bottom: 5rem;`;

const Image = styled.img`
    padding-left: 3rem;
    margin-bottom: 2rem;
    max-width: 300px;
    max-height:300px;
`;
const Text = styled.div`
    padding-left: 3rem;
    padding-right: 3rem;
`;

function LandingPage({landingPage, loadTextMitBild}: any) {
    return (
        <div className="library">
            <Grid container justify="center">
                <Grid container>
                    <Grid item xs={12}><Header>{landingPage?.title}</Header></Grid>
                    <Grid item xs={12}><Subtitle>{landingPage?.subtitle}</Subtitle></Grid>
                    <Grid item xs={12}>
                        <Text className="text">
                            <RichTextConverter textArray={landingPage.introduction}/>
                        </Text>
                    </Grid>
                </Grid>
                <Grid item container justify={"center"} xs={12}>
                    <Image src={landingPage?.img1}/>
                </Grid>
                <Grid item container justify={"center"} xs={6}>
                    <Button variant="contained" color="primary" onClick={() => loadTextMitBild()}>
                        Lade mehr Spongy Stuff
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default LandingPage;
