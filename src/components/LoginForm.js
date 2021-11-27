import React from 'react';
import {TextInput, Button, Text, View} from 'react-native';

export default function LoginForm(){
    return(
        <View>
            <TextInput placeholder='email'></TextInput>
            <TextInput placeholder='contraseña'></TextInput>
            <Button title = 'Enviar' onPress={()=> console.log("enviado")}></Button>
        </View>
        )
}