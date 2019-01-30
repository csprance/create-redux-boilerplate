export default (
  ClassCase: string,
  camelCase: string
) => `import { ActionType } from 'typesafe-actions';

import { actions } from '../index';

export type ${ClassCase} = {
  id: number;
  completed: boolean;
  ${camelCase}Text: string;
};

export type State = ${ClassCase}[];

export type ${ClassCase}Actions = ActionType<typeof actions>;
`;
