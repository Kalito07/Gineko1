import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

export default function SubmitButton ({ onPress, title }:any)
{ return(
    <TouchableOpacity style={{backgroundColor: '#c9184a',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center'}} onPress={onPress}>
        <Text style={{            color: '#fff',
            fontSize: 16,
            fontWeight: '500'}}>{title}</Text>
    </TouchableOpacity>
);
}