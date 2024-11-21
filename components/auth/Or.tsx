import {Text} from "react-native";
import React from "react";

export default function Or({text}:any){
    return (
        <Text style={{flex: 1,
            justifyContent: 'center',
            fontSize: 15,
            textAlign: 'center',
            marginVertical: 20,
            color: '#590d22'}}>-- {text} --</Text>
    );
}