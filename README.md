# create-react-app --template stg
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![github](https://img.shields.io/github/v/release/NoHop3/cra-template-stg)](https://github.com/NoHop3/cra-template-stg/releases)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/NoHop3/cra-template-stg/main.yml)](https://github.com/NoHop3/cra-template-stg/actions/workflows/main.yml)
[![npm](https://img.shields.io/npm/v/cra-template-stg)](https://www.npmjs.com/package/cra-template-stg)
![dwndt](https://img.shields.io/npm/dt/cra-template-stg)




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
IMPORTANT - never run this command more than twice as it would write the same hooks and your git commit commands would be calling the commitizen cli twice!

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

## Continous Integration
The project comes with CI already configured with Semantic Release. It uses GitHub Actions to run yarn install, yarn lint & yarn release on every push to the main branch. That is also updating an automated CHANGELOG.md file when there are changes that trigger a release. A change that trigger a release is analyzed with the help of `@semantic-release/commit-analyzer` and `@semantic-release/release-notes-generator` plugins whereas the Changelog is updated with the help of `@semantic-release/changelog`.
In order to use it you need to set up Github Actions. Go to the Actions tab and you will see the workflow running. However, make sure you add a GH_TOKEN environment variable in your repository settings. You can find more information on how to do that [here.](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository). Another important thing is to have your Github Actions settings configured like [this](https://scontent.xx.fbcdn.net/v/t1.15752-9/381261306_325011419937992_1519860712525371449_n.png?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=qgfMv5oaQVUAX-MTgUI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT_kc5fLikcdtkabKLC4vIw16YdGY7TbHcMjRPKRlC2Yw&oe=65341B49) and [this](https://scontent.xx.fbcdn.net/v/t1.15752-9/381282707_1037374181027013_7572008705668566205_n.png?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=tUZRBwGtcDQAX8zsjHK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRpDRhUI2wR42bRTduRgbLkhmZA3-rwhZK8YSgHTYZ56w&oe=65342748) in order to have the CI working properly.

# Great job! 

That's it! You are ready to start building on top of this template.

If you liked this template consider giving it a star ⭐
