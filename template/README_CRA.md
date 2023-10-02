This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

## Continous Integration
The project comes with CI already configured with Semantic Release. It uses GitHub Actions to run yarn install, yarn lint & yarn release on every push to the main branch. That is also updating an automated CHANGELOG.md file when there are changes that trigger a release. A change that trigger a release is analyzed with the help of `@semantic-release/commit-analyzer` and `@semantic-release/release-notes-generator` plugins whereas the Changelog is updated with the help of `@semantic-release/changelog`.
In order to use it you need to set up Github Actions. Go to the Actions tab and you will see the workflow running. However, make sure you add a GH_TOKEN environment variable in your repository settings. You can find more information on how to do that [here.](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository). Another important thing is to have your Github Actions settings configured like [this](https://scontent.xx.fbcdn.net/v/t1.15752-9/381261306_325011419937992_1519860712525371449_n.png?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=qgfMv5oaQVUAX-MTgUI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT_kc5fLikcdtkabKLC4vIw16YdGY7TbHcMjRPKRlC2Yw&oe=65341B49) and [this](https://scontent.xx.fbcdn.net/v/t1.15752-9/381282707_1037374181027013_7572008705668566205_n.png?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=tUZRBwGtcDQAX8zsjHK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRpDRhUI2wR42bRTduRgbLkhmZA3-rwhZK8YSgHTYZ56w&oe=65342748) in order to have the CI working properly.

## Great job! 

That's it! You are ready to start building on top of this template.

If you liked this template consider giving it a star ⭐

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
