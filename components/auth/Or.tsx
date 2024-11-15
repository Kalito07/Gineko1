import {Text} from "react-native";
import React from "react";

export default function Or({text}:any){
    return (
        <Text style={{flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 16,
            fontSize: 24,
            fontWeight: '600',
            textAlign: 'center',
            marginVertical: 16,
            color: '#999'}}>{text}</Text>
    );
}