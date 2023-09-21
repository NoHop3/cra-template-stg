# create-react-app --template stg
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

A quick start Create React App template with React Router, Redux Toolkit, TypeScript, React Testing Library, styled-components, MUI, storybook and custom ESlint configurations. As well as Husky & Commitizen so you can keep deploying your code in the best way possible.

#### How to install? Prerequisities
```
node & npm
```
If you do not currently have node.js & npm you can install them [here](https://nodejs.org/en/download).
After successfully installing node run the following command:
```
npm install yarn -g
```
This will install yarn globally.
Next head over to the folder where you would like to use cra-template-stg. Press `Alt+D` type in `cmd` press `Enter` and after the terminal appears type in the following:
```
yarn create react-app . --template stg
```
Change `.` with your project name if desired.
You might get a message `This will install create-react-app...` just press `Enter` to continue
Wait for the packages to finish downloading.
Type in the following:
```
cd *your project name* && yarn run husky-init
```
This will configure husky & commitizen to automatically prettify and lint your files as well as commit by the conventional commit [standard](https://github.com/commitizen/cz-cli)

#### Great job! 

You just used the template to create your react app. Happy coding!
