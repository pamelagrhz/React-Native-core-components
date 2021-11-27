import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

export default function HomeScren(props){
    console.log('propiedades de comp',props)
    const {navigation} = props;
    const gotoPage = (goto) => {
        navigation.navigate(goto)
    }
    return (
        <SafeAreaView>
            <Text>Estamos en HomeScren</Text>
            <Text>Estamos en HomeScren</Text>
            <Text>Estamos en HomeScren</Text>
            <Text>Estamos en HomeScren</Text>
            <Text>Estamos en HomeScren</Text>
            <Text>Estamos en HomeScren</Text>
            <Text>Estamos en HomeScren</Text>
            <Button onPress = {()=> gotoPage("Settings")} title= "Ir a ajustes" ></Button>

        </SafeAreaView>
    )

}