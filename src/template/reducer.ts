export default (
  ClassCase: string
) => `import { createReducer } from 'typesafe-actions';

import { actions } from './index';
import default${ClassCase}State from './state';

export default createReducer(default${ClassCase}State)
  .handleAction(actions.standardAction, 
    (state)=>  [...state]
  )
  .handleAction(actions.standardActionParams, 
    (state, action)=>  state.map(item => ({...item, active: action.payload === item.id}))
  )
  .handleAction(actions.asyncAction${ClassCase}.success, 
    (state, action)=>  [...action.payload]
  )
`;
