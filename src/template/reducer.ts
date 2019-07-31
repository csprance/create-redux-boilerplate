export default (
  ClassCase: string
) => `import { getType } from 'typesafe-actions';

import { actions, Types } from './index';
import default${ClassCase}State from './state';

export default (
  state: Types.${ClassCase}State = default${ClassCase}State,
  action: Types.${ClassCase}Actions
): Types.${ClassCase}State => {
  switch (action.type) {
    case getType(actions.standardAction):
      return [...state];
      
    case getType(actions.standardActionParams):
      return state.map(item => ({...item, active: action.payload === item.id}));
      
    case getType(actions.asyncAction${ClassCase}.success):
      return [...action.payload];

    default:
      return state;
  }
};
`;
