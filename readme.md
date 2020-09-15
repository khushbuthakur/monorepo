1. To start website

**cd packages/web**
`yarn start`

or in root folder
`yarn web`
`lerna --scope=web run start`

2. To start app
**cd packages/mobile**

`npx react-native run-ios`
`npx react-native run-android`

or in root folder
`yarn android`
or
`lerna --scope=android run start`

`yarn ios`
or
`lerna --scope=ios run start`

to run on specific ios simulator
`npx react-native run-ios --simulator="iPhone 5s"`
 
 To install a library in specific folder

 lerna add dayjs --scope=@monorepo/shared

 To import code from shared

 import { getCurrentTime } from '@monorepo/shared/time';