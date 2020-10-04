import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import RichTextConverter from '../utils/RichTextConverter';

interface HighlightsTextProps {
    blog: any;
}

const Header = styled.h1`
    text-align: center;
`;

const Subtitle = styled.h3`
    text-align: center;
    margin-bottom: 5rem;`;

const ImageGrid = styled.img`
    padding-left: 3rem;
    margin-bottom: 2rem;
    min-width: 200px;
    min-height: 200px;
    max-width: 200px;
    max-height:200px;
`;
const Text = styled.div`
    padding-left: 3rem;
    padding-right: 3rem;
    margin-bottom: 5rem;
`;

const HighlightsText = ({blog}: HighlightsTextProps) => {
    const array: any = [];
    const mappedImages = [blog].map((e) => {
        e.img1 && array.push(e.img1);
        e.img2 && array.push(e.img2);
        e.img3 && array.push(e.img3);
        return array;
    });
    const introExist = blog.introduction && !(blog.introduction[0].children[0].length === 1);
    const gridSize: any = mappedImages[0].length === 3 ? 4 : mappedImages[0].length === 2 ? 6 : mappedImages[0].length === 1 ? 12 : '';
    return (
        <Grid container>
            <Grid container justify="center">
                {blog.title && <Grid item xs={12}><Header>{blog.title}</Header></Grid>}
                {blog.subtitle && <Grid item xs={12}><Subtitle>{blog.subtitle}</Subtitle></Grid>}
            </Grid>
            {introExist && (
                <Grid item xs={12}>
                    <Text>
                        <RichTextConverter textArray={blog.introduction}/>
                    </Text>
                </Grid>
            )}
            <Grid container spacing={2}>
                {blog.img1 && (
                    <Grid
                        item
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        xs={gridSize}
                    >
                        <ImageGrid src={blog.img1} alt=""/>
                        <Text>
                            {blog.info1 && <RichTextConverter textArray={blog.info1}/>}
                        </Text>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};

export default HighlightsText;
