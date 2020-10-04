// Config and setups
import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";
import {cache} from "./cache";

const CONTENT_DELIVERY_API_URL = 'https://d25x3zamgumotv.cloudfront.net/cms/read/production';
const CONTENT_DELIVERY_API_ACCESS_TOKEN = '6ba4eee064d2106196ca686e3f78e1cae12682b88ca114d7';
const link = new HttpLink({ uri: CONTENT_DELIVERY_API_URL });
const authLink = setContext((_, { headers }) => {
    const token = CONTENT_DELIVERY_API_ACCESS_TOKEN;
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : '',
        },
    };
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: authLink.concat(link),
    credentials: 'same-origin',
    cache
});

export default client;
