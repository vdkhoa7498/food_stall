
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import HomeNavigation from './HomeNavigation'

const RootStack = createStackNavigator();

const RootNavigation = () =>{
    return(
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="Home" component={HomeNavigation}  options ={{ headerShown: false}}/>
            </RootStack.Navigator>
        </NavigationContainer>
        
    )

}

export default RootNavigation