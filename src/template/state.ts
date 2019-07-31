export default (
  ClassCase: string,
  camelCase: string
) =>`import { ${ClassCase}State } from './types';

export const default${ClassCase}State: ${ClassCase}State = [];

export default default${ClassCase}State;
`
