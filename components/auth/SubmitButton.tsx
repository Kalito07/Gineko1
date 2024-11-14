import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

export default function SubmitButton ({ onPress, title }:any)
{ return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>{title}</Text>
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#c9184a',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    }});