import React from 'react';
import {useLazyQuery, useQuery} from "@apollo/client";

import { GET_LANDINGPAGE, GET_MODEL_TEXT_MIT_BILD} from "./graphql/queries";
import LandingPage from "./components/LandingPage";
import BildText from "./components/BildText";

function App() {
    useQuery(GET_LANDINGPAGE);
    const [loadTextMitBild] = useLazyQuery(GET_MODEL_TEXT_MIT_BILD);


    return (
        <div>
            <LandingPage
                loadTextMitBild={loadTextMitBild}
            />
            {<BildText/>}
        </div>
    );
}

export default App;
