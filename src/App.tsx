import React from 'react';
import {useLazyQuery, useQuery} from "@apollo/client";

import { GET_LANDINGPAGE, GET_MODEL_TEXT_MIT_BILD} from "./graphql/queries";
import LandingPage from "./components/LandingPage";
import BildText from "./components/BildText";
import {landingPagesVar} from "./cache";

function App() {
    useQuery(GET_LANDINGPAGE);
    const [loadTextMitBild] = useLazyQuery(GET_MODEL_TEXT_MIT_BILD);


    return (
        <div>
            <LandingPage
                landingPage={landingPagesVar()[0]}
                loadTextMitBild={loadTextMitBild}
            />
            {<BildText/>}
        </div>
    );
}

export default App;
