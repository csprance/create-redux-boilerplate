export default (
  ClassCase: string,
  camelCase: string
) => `import * as actions from './actions';
import reducer from './reducer';
import * as selectors from './selectors';
import default${ClassCase}State from './state';
import * as Types from './types';

export default reducer;
export { actions, default${ClassCase}State, selectors, Types };
`;
