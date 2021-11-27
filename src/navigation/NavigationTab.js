import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScren from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();
export default function NavigationTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScren}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    )
}