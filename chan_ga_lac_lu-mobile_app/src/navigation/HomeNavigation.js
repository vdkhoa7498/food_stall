
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../containers/home/Home';


const HomeStack = createStackNavigator();

const HomeNavigation = () =>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options ={{ headerShown: false}}/>
        </HomeStack.Navigator>
    )

}

export default HomeNavigation