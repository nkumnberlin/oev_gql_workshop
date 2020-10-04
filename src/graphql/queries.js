import { gql } from '@apollo/client';

export const GET_LANDINGPAGE = gql`{
    listLandingPages {
        data {
            title 
            subtitle
            introduction
            img1
            text
            img2
            closing
        }
    }
}`;

export const GET_HIGHLIGHTS = gql`{
    listHighlights {
        data{
            title
            subtitle
            introduction
            img1
            info1
            img2
            info2
            img3
            info3
            closing
            uid
        }
    }
}`

export const GET_MODEL_TEXT_MIT_BILD = gql`{
 listModelTextMitBilds {
        data{
            title
            subtitle
            textRight
            imageRight
            textLeft
            imageLeft
            uid
        }
    }
}`


