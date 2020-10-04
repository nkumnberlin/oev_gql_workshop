import React, {useEffect, useState} from 'react';
import {useLazyQuery, useQuery} from "@apollo/client";

import { GET_LANDINGPAGE, GET_MODEL_TEXT_MIT_BILD} from "./graphql/queries";
import LandingPage from "./components/LandingPage";
import BildText from "./components/BildText";

function App() {
    const {data: dataLanding} = useQuery(GET_LANDINGPAGE);
    const [loadTextMitBild, {data: dataTextMitBild}] = useLazyQuery(GET_MODEL_TEXT_MIT_BILD);
    const [landingPage, setLandingPage] = useState();
    const [textMitBild, setTextMitBild] = useState()

    useEffect(() => {
        if (dataLanding !== undefined) {
            setLandingPage(dataLanding.listLandingPages)
        }
    }, [dataLanding])


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
                loadTextMitBild={loadTextMitBild}
            />}
            {textMitBild && <BildText blogs={textMitBild.data}/>}
        </div>
    );
}

export default App;
