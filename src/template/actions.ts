export default (
  ClassCase: string,
  camelCase: string
) => `import { createAsyncAction } from 'typesafe-actions';
import { AsyncThunkResult } from '../redux-types';
import { ${ClassCase} } from './types';
import {
  add${ClassCase}ToDb,
  bootStrap${ClassCase}Db,
  get${ClassCase}sFromDb,
  remove${ClassCase}FromDb,
  toggle${ClassCase}InDb
} from './utils';

export const hydrate${ClassCase}sFromDB = createAsyncAction(
  '${camelCase}/HYDRATE_REQUEST',
  '${camelCase}/HYDRATE_SUCCESS',
  '${camelCase}/HYDRATE_FAILED'
)<void, any[], string>();
export const hydrate${ClassCase}sFromDBThunk = (): AsyncThunkResult<
  void
> => async dispatch => {
  // Tell Redux were requesting data from the db
  dispatch(hydrate${ClassCase}sFromDB.request());
  try {
    // Do the actual request
    bootStrap${ClassCase}Db();
    dispatch(hydrate${ClassCase}sFromDB.success(get${ClassCase}sFromDb()));
  } catch (err) {
    // Catch the err
    dispatch(hydrate${ClassCase}sFromDB.failure(err.toString()));
  }
};

export const add${ClassCase} = createAsyncAction(
  '${camelCase}/ADD_REQUEST',
  '${camelCase}/ADD_SUCCESS',
  '${camelCase}/ADD_FAILED'
)<void, any[], string>();
export const add${ClassCase}Thunk = (
  ${camelCase}: ${ClassCase}
): AsyncThunkResult<void> => async dispatch => {
  dispatch(add${ClassCase}.request());
  try {
    add${ClassCase}ToDb(${camelCase});
    dispatch(add${ClassCase}.success(get${ClassCase}sFromDb()));
  } catch (err) {
    dispatch(add${ClassCase}.failure(err.toString()));
  }
};

export const remove${ClassCase} = createAsyncAction(
  '${camelCase}/REMOVE_REQUEST',
  '${camelCase}/REMOVE_SUCCESS',
  '${camelCase}/REMOVE_FAILED'
)<void, ${ClassCase}[], string>();
export const remove${ClassCase}Thunk = (
  id: number
): AsyncThunkResult<void> => async dispatch => {
  dispatch(remove${ClassCase}.request());
  try {
    remove${ClassCase}FromDb(id);
    dispatch(remove${ClassCase}.success(get${ClassCase}sFromDb()));
  } catch (err) {
    dispatch(remove${ClassCase}.failure(err.toString()));
  }
};

export const toggle${ClassCase} = createAsyncAction(
  '${camelCase}/TOGGLE_REQUEST',
  '${camelCase}/TOGGLE_SUCCESS',
  '${camelCase}/TOGGLE_FAILED'
)<void, ${ClassCase}[], string>();
export const toggle${ClassCase}Thunk = (
  id: number
): AsyncThunkResult<void> => async dispatch => {
  dispatch(toggle${ClassCase}.request());
  try {
    toggle${ClassCase}InDb(id);
    dispatch(toggle${ClassCase}.success(get${ClassCase}sFromDb()));
  } catch (err) {
    dispatch(toggle${ClassCase}.failure(err.toString()));
  }
};
`;
