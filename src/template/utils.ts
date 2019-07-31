export default (
  ClassCase: string,
  camelCase: string
) => `import { default${ClassCase}State } from './index';
import { ${ClassCase} } from './types';

`;
