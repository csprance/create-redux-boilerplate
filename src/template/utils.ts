export default (
  ClassCase: string,
  camelCase: string
) => `import store from 'store';

import { defaultState } from './index';
import { ${ClassCase} } from './types';

export const bootStrap${ClassCase}Db = () => {
  if (!store.get('${camelCase}')) {
    store.set('${camelCase}', defaultState);
  }
};

export const get${ClassCase}sFromDb = (): ${ClassCase}[] => store.get('${camelCase}');

export const add${ClassCase}ToDb = (${camelCase}: ${ClassCase}) => {
  const ${camelCase}s = store.get('${camelCase}');
  store.set('${camelCase}', [...${camelCase}s, ${camelCase}]);
};

export const remove${ClassCase}FromDb = (id: number) => {
  const ${camelCase}s = get${ClassCase}sFromDb();
  store.set('${camelCase}', [...${camelCase}s.filter(${camelCase} => ${camelCase}.id !== id)]);
};

export const toggle${ClassCase}InDb = (id: number) => {
  const ${camelCase}s = get${ClassCase}sFromDb();
  store.set(
    '${camelCase}',
    ${camelCase}s.map(${camelCase} => ({
      ...${camelCase},
      completed: ${camelCase}.id === id ? !${camelCase}.completed : ${camelCase}.completed
    }))
  );
};
`;
