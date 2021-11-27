import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props){
    const{name} = props
    console.log(name)
    return (
        <Text>Hola {name}</Text>
    )
}

Saludar.defaultProps = {
    name:'mundo'
}
Saludar.propTypes = {
    name: PropTypes.string.isRequired
    // Este prop tiene que ser string y obligatorio, sin el is Required no es obligatorio
}