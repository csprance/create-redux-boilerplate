import { pascalCase } from 'change-case';
import commander from 'commander';
import * as fs from 'fs';

import createActionFileString from './template/actions';
import createIndexFileString from './template/index';
import createReducerFileString from './template/reducer';
import createSelectorsFileString from './template/selectors';
import createStateFileString from './template/state';
import createTypesFileString from './template/types';
import createUtilFileString from './template/utils';

const program = commander
  .version('1.0.')
  .option('-n, --name [name]', 'What the name of the state should be', 'todo')
  .parse(process.argv);
const classCase: string = pascalCase((program.name as any) as string);
const lowerCase = (program.name as any) as string;
fs.mkdirSync(lowerCase, { recursive: true });
fs.writeFile(
  lowerCase + '/actions.ts',
  createActionFileString(classCase, lowerCase),
  () => {
    console.log('Created action file');
  }
);

fs.writeFile(
  lowerCase + '/index.ts',
  createIndexFileString(), () => {
  console.log('Created index file');
});

fs.writeFile(
  lowerCase + '/reducer.ts',
  createReducerFileString(classCase),
  () => {
    console.log('Created reducer file');
  }
);

fs.writeFile(
  lowerCase + '/selectors.ts',
  createSelectorsFileString(classCase, lowerCase),
  () => {
    console.log('Created selector file');
  }
);

fs.writeFile(
  lowerCase + '/state.ts',
  createStateFileString(), () => {
  console.log('Created state file');
});

fs.writeFile(
  lowerCase + '/types.ts',
  createTypesFileString(classCase, lowerCase),
  () => {
    console.log('Created types file');
  }
);

fs.writeFile(
  lowerCase + '/utils.ts',
  createUtilFileString(classCase, lowerCase),
  () => {
    console.log('Created utils file');
  }
);
