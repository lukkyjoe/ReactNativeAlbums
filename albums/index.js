// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('albums', () => App);

//import a library to create a component
import React from 'react'; 
import { Text, AppRegistry } from 'react-native';

//create a component
const App = () => (
    <Text>Some text</Text>
);
        

//render it to device
AppRegistry.registerComponent('albums', () => App);