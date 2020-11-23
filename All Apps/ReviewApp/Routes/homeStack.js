import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Screens/Home';
import ReviewDetails from '../Screens/Profile';
//import Header from '../../../shared/header'

const Screens = {
    Home : {
        screen : Home,
        navigationOptions : {
            title : 'Home'
        }
    },
    ReviewDetails : {
        screen : ReviewDetails,
        navigationOptions : {
            title : 'My Profile'
        }
    }
}

const HomeStack = createStackNavigator(Screens
);
export default createAppContainer(HomeStack);