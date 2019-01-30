export default (
  ClassCase: string
) => `import { getType } from 'typesafe-actions';

import { actions, Types } from './index';

export default (
  state: Types.State = [],
  action: Types.${ClassCase}Actions
): Types.State => {
  switch (action.type) {
    case getType(actions.hydrate${ClassCase}sFromDB.success):
      return [...action.payload];

    case getType(actions.add${ClassCase}.success):
      return [...action.payload];

    case getType(actions.remove${ClassCase}.success):
      return [...action.payload];

    case getType(actions.toggle${ClassCase}.success):
      return [...action.payload];

    default:
      return state;
  }
};
`;
