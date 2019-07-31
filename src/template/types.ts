export default (
  ClassCase: string,
  camelCase: string
) => `import { ActionType } from 'typesafe-actions';

import { actions } from './index';

export interface ${ClassCase} {
  id: number;
  active: boolean;
}

export type  ${ClassCase}State = ${ClassCase}[];

export type ${ClassCase}Actions = ActionType<typeof actions>;
`;
