import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import RichTextConverter from '../utils/RichTextConverter';

interface BildTextProps {
    blog: any;
}

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

const BildText = ({blog}: BildTextProps) => {
    const destObj = {
        textRight: blog?.textRight ? (blog?.textRight[0]?.type === 'unordered-list' ? blog?.textRight
            : blog?.textRight[0]?.children[0]?.text.length === 0 ? null : blog?.textRight) : null,
        imageLeft: blog?.imageLeft ? blog?.imageLeft : null,
        textLeft: blog?.textLeft ? (blog?.textLeft[0]?.type === 'unordered-list' ? blog?.textLeft
            : blog?.textLeft[0]?.children[0]?.text.length === 0 ? null : blog?.textLeft) : null,
        imageRight: blog?.imageRight ? blog?.imageRight : null,
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}><Header>{blog?.title}</Header></Grid>
            <Grid item xs={12}><Subtitle>{blog?.subtitle}</Subtitle></Grid>
            <ImageGrid container>
                {(destObj?.textRight === null) && <Grid item xs={3}/>}
                {blog?.imageLeft
                && (
                    <Grid item container xs={6} justify="center">
                        <Image src={blog?.imageLeft} alt=""/>
                    </Grid>
                )}

                {(blog?.textRight === null)
                    ? <Grid item xs={3}/>
                    : (
                        <Grid item xs={blog?.imageLeft ? 6 : 12}>
                            <Text className="text">
                                <RichTextConverter textArray={blog?.textRight}/>
                            </Text>
                        </Grid>
                    )}
            </ImageGrid>
        </Grid>
    );
};

const Text = styled.div`
    padding-left: 3rem;
    padding-right: 3rem;
`;

export default BildText;
