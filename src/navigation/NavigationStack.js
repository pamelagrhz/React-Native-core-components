import React from "react";
//Importar stackNavigation
import {createStackNavigator} from '@react-navigation/stack' 
import HomeScren from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

//Constante que simula un componente

const Stack = createStackNavigator();



export default function NavigationStack(){
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScren}/>
            <Stack.Screen name="Settings" component= {SettingsScreen}/>
        </Stack.Navigator>
    )

}