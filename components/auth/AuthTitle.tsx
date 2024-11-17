import {Text} from "react-native";
import React from "react";

export default function AuthTitle({text}:any) {
    return(
        <Text style={{ fontSize: 21, fontWeight: '500', color: '#590d22', marginBottom:10, alignItems:'center' }}>
            {text}
        </Text>
    );
}