import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScren from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();


export default function NavigationDrawer(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScren}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    )

}