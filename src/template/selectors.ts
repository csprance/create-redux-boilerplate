export default (
  ClassCase: string,
  camelCase: string
) => `import { createSelector } from 'reselect';

import { RootState } from '../redux-types';

export const ${camelCase}Selector = (state: RootState, _props?: any) => state.${camelCase};

export const completed${ClassCase}sSelector = createSelector(
  ${camelCase}Selector,
  ${camelCase}s => ${camelCase}s.filter(${camelCase} => ${camelCase}.completed)
);

export const unfinished${ClassCase}sSelector = createSelector(
  ${camelCase}Selector,
  ${camelCase}s => ${camelCase}s.filter(${camelCase} => !${camelCase}.completed)
);
`;
