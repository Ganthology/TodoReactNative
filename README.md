# TodoReactNative
This is a Todo list project build using React Native (Yes, I made another one besides using native iOS 😌)

The objective of this project is to test my skills and capabilities of building a functional React Native application.

Features of this app:
-
- Create new item
- Edit existing item
- Delete single or multiple items
- Complete single or multiple items
- Data stored locally in the user's device
- Clean UI

Listed are the skills and things I learned/used for this project:
- 
- Organise React Native project in a cleaner way (Separating files to different folders for corresponding purposes)
- Using ```React Navigation``` library to build screen navigations in RN app
  - Using ```Stack Navigator``` to push new screens to the stack
  - Using ```UseFocusEffect``` to re-render screens when the screen is ```onFocus```
  - Pass parameters to next screen using ```route.params```
  - Set different options for screen header such as ```hiding header bar, set title for header bar```
- Using ```Realm``` to store and manipulate data in RN app
- React Hooks used in this project are
  - ```UseState```
  - ```UseEffect```
  - ```UseCallback```
  - ```UseFocusEffect```
- Using ```react-native-tab-view``` to create ```multiple tab view``` inside RN app, e.g: Pending, Completed, Overdue tabs
- Using ```react-native-date-picker``` to present a ```DatePicker modal``` for user to select item's deadline
- Using ```react-native-toast-message``` library to show ```Success``` and ```Warning``` messages when actions are done
- Using ```react-native-uuid``` to generate ids for items created and stored in Realm
- Using ```react-native-vector-icons``` to access tons of icons available
- Using ```moment.js``` to manipulate date formats
- Using ```react-native-action-button``` to create ```action buttons``` for Add Item, Edit Item, Delete Item and Complete Item
- Create RN patches as the library ```react-native-action-button``` is no longer maintained and there's an open PR for existing issue

Things that can be improved/added in the future:
- 
- Push Notification to remind user about the deadlines
- Automatically shift items with deadline < current ```new Date()``` to overdue
- Separate ```Logic layer``` and ```Presentation layer``` for the screens and components
- Separate ```Stylesheet``` for every single screen to individual ```[screen].styles.js``` file
- Use ```UseMemo``` hook to prevent excess re-rendering when the props for Todo Items are the same

How to check out this project locally:
- 
0. Setup React Native environment following the guide [here](https://reactnative.dev/docs/environment-setup).

   I am using the ```React Native CLI``` not the ```Expo CLI``` but you can Google around to know the difference between these two CLI (Command Line Interface). 
   
   Basically they are tools that helps you to setup a React Native project (like ```create-react-app``` for ```React.js```).
1. Clone this project locally using the command ```git clone https://github.com/Ganthology/TodoReactNative.git``` in your preferred editor (mine is VSCode)
2. run ```yarn install``` to download all the packages/dependencies
3. run ```yarn start``` or ```npx react-native start```to start the Metro server
4. run ```yarn ios```/```yarn android``` or ```npx react-native run-ios```/```npx react-native run-android``` based on your own choices
5. Now you can try out the app on your local machine 😉

References:
- 
- https://reactnative.dev
- https://reactnavigation.org
- https://medium.com/geekculture/how-to-use-realm-local-db-in-react-native-4e9f9dfcbc53
- https://docs.mongodb.com/realm/sdk/react-native/
- https://github.com/mastermoo/react-native-action-button
- https://github.com/calintamas/react-native-toast-message
- https://github.com/satya164/react-native-tab-view
