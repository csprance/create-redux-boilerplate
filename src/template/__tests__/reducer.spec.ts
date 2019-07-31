export default (
  ClassCase: string,
  camelCase: string
) => `import reducer, { actions } from '../index';
import default${ClassCase}State from '../state';

describe('${camelCase} Reducer', () => {
  it('Test Reducer', () => {
    expect(reducer( default${ClassCase}State, actions.standardAction())).toEqual({
      ...default${ClassCase}State,
    });
  });
});
`