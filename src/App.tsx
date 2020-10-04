import React, {useEffect, useState} from 'react';
import {useLazyQuery, useQuery} from "@apollo/client";

import {GET_HIGHLIGHTS, GET_LANDINGPAGE, GET_MODEL_TEXT_MIT_BILD} from "./graphql/queries";
import LandingPage from "./components/LandingPage";
import HighlightsText from "./components/HighlightsText";
import BildText from "./components/BildText";

function App() {
    const {data: dataLanding} = useQuery(GET_LANDINGPAGE);
    const [loadHightlights, {data: dataHighlights}] = useLazyQuery(GET_HIGHLIGHTS);
    const [loadTextMitBild, {data: dataTextMitBild}] = useLazyQuery(GET_MODEL_TEXT_MIT_BILD);
    const [landingPage, setLandingPage] = useState();
    const [highlights, setHighlights] = useState();
    const [textMitBild, setTextMitBild] = useState()

    useEffect(() => {
        if (dataLanding !== undefined) {
            setLandingPage(dataLanding.listLandingPages)
        }
    }, [dataLanding, dataHighlights, dataTextMitBild])

    useEffect(() => {
        if (dataHighlights !== undefined) {
            setHighlights(dataHighlights.listHighlights)
        }
    }, [dataHighlights])
    useEffect(() => {
        if (dataTextMitBild !== undefined) {
            setTextMitBild(dataTextMitBild.listModelTextMitBilds)
        }
    }, [dataTextMitBild])


    return (
        <div>
            {landingPage &&
            <LandingPage
                landingPage={landingPage.data[0]}
                loadHighlights={loadHightlights}
                loadTextMitBild={loadTextMitBild}
            />}
            {textMitBild && <BildText blog={textMitBild.data[0]}/>}
            {highlights && <HighlightsText blog={highlights.data[0]}/>}
        </div>
    );
}

export default App;
