/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import login from './Components/Login';
import Login from './Components/Login'
import Newfeed from './Components/Newfeed'
import profile from './Components/Profile'


AppRegistry.registerComponent(appName, () => Login);
