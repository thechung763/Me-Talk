/**
 * @format
 */
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import login from './Components/Login';
import Newfeed from './Components/Newfeed'
import profile from './Components/Profile'
import menu from './Components/menu'
import newfeed from './Components/Newfeed';


AppRegistry.registerComponent(appName, () => App);
