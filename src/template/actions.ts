export default (
  ClassCase: string,
  camelCase: string
) => `import { createAsyncAction, createAction } from 'typesafe-actions';
import { AsyncThunkResult } from '../redux-types';
import { ${ClassCase} } from './types';

export const standardAction = createAction('${camelCase}/STANDARD_ACTION');

export const standardActionParams = createAction(
  '${camelCase}/STANDARD_ACTION_PARAMS', 
  action => (id: number)=> action(id)
);

export const asyncAction${ClassCase} = createAsyncAction(
  '${camelCase}/ASYNC_ACTION_REQUEST',
  '${camelCase}/ASYNC_ACTION_SUCCESS',
  '${camelCase}/ASYNC_ACTION_FAILED'
)<void, void, string>();
export const asyncAction${ClassCase}Thunk = (
  id: number
): AsyncThunkResult<void> => async dispatch => {
  dispatch(asyncAction${ClassCase}.request());
  try {
    dispatch(asyncAction${ClassCase}.success());
  } catch (err) {
    dispatch(asyncAction${ClassCase}.failure(err.toString()));
  }
};


`;
