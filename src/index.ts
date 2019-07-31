#! /usr/bin/env node
import { camelCase, pascalCase } from 'change-case';
import * as fs from 'fs';
import * as inquirer from 'inquirer';
import * as mkdirp from 'mkdirp';

import createReducerTestingFileString from './template/__tests__/reducer.spec';
import createSelectorsTestingFileString from './template/__tests__/selectors.spec';
import createUtilTestingFileString from './template/__tests__/utils.spec';
import createActionFileString from './template/actions';
import createIndexFileString from './template/index';
import createReducerFileString from './template/reducer';
import createSelectorsFileString from './template/selectors';
import createStateFileString from './template/state';
import createTypesFileString from './template/types';
import createUtilFileString from './template/utils';

(async () => {
  const { name }: { name: string } = await inquirer.prompt([
    { name: 'name', message: 'What is the feature name?: ' }
  ]);
  const { path }: { path: string } = await inquirer.prompt([
    {
      default: `src/redux/${name}`,
      message: 'Where should we create the state folder: ',
      name: 'path'
    }
  ]);
  const ClassCaseName: string = pascalCase(name);
  const camelCaseName = camelCase(name);

  mkdirp.sync(path);
  mkdirp.sync(path + "/__tests__");

  const files = [
    [
      path + '/actions.ts',
      createActionFileString(ClassCaseName, camelCaseName)
    ],
    [path + '/index.ts', createIndexFileString(ClassCaseName, camelCaseName)],
    [path + '/reducer.ts', createReducerFileString(ClassCaseName)],
    [
      path + '/selectors.ts',
      createSelectorsFileString(ClassCaseName, camelCaseName)
    ],
    [path + '/state.ts', createStateFileString(ClassCaseName, camelCaseName)],
    [path + '/types.ts', createTypesFileString(ClassCaseName, camelCaseName)],
    [path + '/utils.ts', createUtilFileString(ClassCaseName, camelCaseName)],
    [
      path + '/__tests__/reducer.spec.ts',
      createReducerTestingFileString(ClassCaseName, camelCaseName)
    ],
    [
      path + '/__tests__/selectors.spec.ts',
      createSelectorsTestingFileString(ClassCaseName, camelCaseName)
    ],
    [
      path + '/__tests__/utils.spec.ts',
      createUtilTestingFileString(ClassCaseName, camelCaseName)
    ]
  ];
  files.forEach(async args =>
    fs.writeFile(args[0], args[1], () => {
      console.log('Wrote: ' + args[0]);
    })
  );
})();
