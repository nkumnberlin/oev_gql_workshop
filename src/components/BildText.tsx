import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';


const Header = styled.h1`
    text-align: center;
`;

const Subtitle = styled.h3`
    text-align: center;
    margin-bottom: 5rem;`;

const ImageGrid = styled(Grid)`
    margin-bottom: 5rem;
`;
const Image = styled.img`
    padding-left: 3rem;
    margin-bottom: 2rem;
    max-width: 300px;
    max-height:300px;
`;

const BildText = ({blogs}: any) => {
    return (
        <Grid container spacing={4}>
            {blogs.map((blog: any) => {
                return <>
                    <Grid item xs={12}><Header>{blog?.title}</Header></Grid>
                    <Grid item xs={12}><Subtitle>{blog?.subtitle}</Subtitle></Grid>
                    <ImageGrid container>
                        <Grid item container xs={6} justify="center">
                            <Image src={blog?.imageLeft} alt=""/>
                        </Grid>
                        <Grid item xs={6}>
                            <Image src={blog?.imageRight} alt=""/>
                        </Grid>
                        )}
                    </ImageGrid>
                </>
            })}
        </Grid>
    )
};

export default BildText;
