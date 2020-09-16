Steps to make this repo
0. `sudo npm i lerna -g`

1. `lerna init --independent`
Install yarn
`brew install yarn`

This flag tells Lerna to use independent versioning mode. For example our use case is as below: 

app
 - moment.js v1

 web
 - moment.js v3

 If we just use `lerna init --independent` all packages will be of same version

We get 2 files lerna.json & package.json

2. We will use yarn so in lerna.json write these

  `"npmClient" : "yarn",`
  `"useWorkspaces" : true`

3. Tell package.json where it can find all child packages. All our folders will be inside *packages* folder

"workspaces": {
    "packages": ["packages/*"],
     "nohoist": [
      "**/react-native",
      "**/react-native/**"
    ]
},

react-native does not work with packages outside so it needs it's own packages

Tutorial : https://www.youtube.com/watch?v=4Tv8T5GKtTs&feature=emb_logo 

4. Now make individual projects. Let's first start with mobile
`cd packages && npx react-native init mobile`
rename `name : 'mobile'` in package.json to `"name": "@monorepo/mobile",`

5. After mobile create react website in packages folder
`npx create-react-app web`

rename `name : 'web'` in package.json to `"name": "@monorepo/web",`

6. Make sure in all child package.json it is same

`"version": "0.0.1",`
`"private": true,`

7. Make package for server

8. We will make local packages for

*core - functions, constants, utils*
theme - styling
type - graphql types

Use below commands inside packages 

`mkdir shared`
`cd shared`
`mkdir core && mkdir theme && mkdir types`

9. Check if mobile and web is running properly

`npm start` - web

`npx react-native run-ios` - mobile
`npx react-native run-android` - mobile

10. Check size
`du -sh`

805M

11. Let's optimize

a. Remove the node_modules directory from all packages. 
`lerna clean`

b. `yarn install` or `lerna bootstrap`

12. Now when you check, size is reduced
`du -sh`

795M

Check if web and mobile is running properly
`lerna run test`
check if everything is ok

if error occurs run 
`lerna bootstrap --force-local && lerna link --force-local`

in case of website it will give error at eslint, for it

add 
`SKIP_PREFLIGHT_CHECK=true` in `.env` file at **packages/web**

then install eslint in web folder as (check version in yarn.lock what is needed)

`yarn add eslint@6.6.0`

13. Add below lines in root package.json to run code from root

"scripts": {
    "android": "lerna --scope=@monorepo/app run android --stream --",
    "ios": "lerna --scope=@monorepo/app run ios --stream --",
    "web": "lerna --scope=@monorepo/web run start"
}

14. In order to run outside packages in react native do following

For example to run dayjs file from shared/core/time.js

add in `metro.config.js`

 watchFolders: [
    // Watch root package node_modules to follow symlinks of yarn hoisted packages
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../shared'),
  ],