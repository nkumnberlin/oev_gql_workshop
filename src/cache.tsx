import { makeVar, ReactiveVar, InMemoryCache } from '@apollo/client';

import { LandingPageType } from './models/LandingPageType';
import { ModelTextMitBildType } from './models/ModelTextMitBildType';

export const cache:InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        listLandingPages: {
          read(value) {
            if (value !== undefined) {
              return landingPagesVar(value.data.map((data: any) => data));
            }
          },
        },
        listModelTextMitBilds: {
          read(value) {
            if (value !== undefined) {
              return modelTextMitBildVar(value.data.map((data: any) => data));
            }
          },
        },
      },
    },
  },
});

const initalLandingValue: LandingPageType = [{
  title: 'Landing Page',
  subtitle: 'here is space for mock data',
  introduction: [{}],
  img1: '',
  text: [{}],
  img2: '',
  closing: [{}],
}];

export const landingPagesVar: ReactiveVar<LandingPageType> = makeVar<LandingPageType>(
    initalLandingValue,
);

export const modelTextMitBildVar: ReactiveVar<ModelTextMitBildType> = makeVar<any>([{}]
);


