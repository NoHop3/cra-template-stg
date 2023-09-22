# create-react-app --template stg
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![github](https://img.shields.io/github/v/release/NoHop3/cra-template-stg)](https://github.com/NoHop3/cra-template-stg/releases)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/NoHop3/cra-template-stg/main.yml)](https://github.com/NoHop3/cra-template-stg/actions/workflows/main.yml)
[![npm](https://img.shields.io/npm/v/cra-template-stg)](https://www.npmjs.com/package/cra-template-stg)



A quick start Create React App template with React Router, Redux Toolkit, TypeScript, React Testing Library, styled-components, MUI, storybook and custom ESlint configurations. As well as Husky & Commitizen so you can keep deploying your code in the best way possible.

# Changelog
See the [changelog](https://github.com/NoHop3/cra-template-stg/blob/main/CHANGELOG.md) to see latest changes.
Raise an [issue](https://github.com/NoHop3/cra-template-stg/issues) if you see something that needs improvement or witness a bug with the template

## How to install? Prerequisities

You MUST have : `node & npm`

After successfully installing node run the following command:

```
npm install yarn -g
```

This will install yarn globally.

Next head over to the folder where you would like to use cra-template-stg. 

Press `Alt+D` type in `cmd` press `Enter` and after the terminal appears type in the following:
```
yarn create react-app . --template stg
```
Change `.` with your project name if desired.

You might get a message `This will install create-react-app...` just press `Enter` to continue

## Initial setup

You can start the project after the scripts are done
```
yarn run start
```
Or directly start developing in VSCode
```
code .
```

## Husky & Commitizen initialization


Type in the following if you chose a desired name:
```
cd *your project name* && yarn run husky-init
```
If you went with a `.` for a project name then just proceed with:
```
yarn run husky-init
```
This will configure husky & commitizen to automatically prettify and lint your files as well as commit by the conventional commit [standard.](https://github.com/commitizen/cz-cli)

## Best commit practices for me are:
```
$ git add .
$ git commit
```
After `$ git commit` the terminal will call husky pre-commit hook which will lint all files. 
Then husky will call the prepare-commit-msg which on its side will prompt the commitizen conventional commit interface.

Lastly, of course, after selecting the type of commit and commit message we need to push our changes.
```
$ git push
```
# Great job! 

That's it! You are ready to start building on top of this template.

If you liked this template consider giving it a star ⭐
