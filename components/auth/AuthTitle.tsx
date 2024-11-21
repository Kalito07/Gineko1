import {Text} from "react-native";
import React from "react";

export default function AuthTitle({text}:any) {
    return(
        <Text style={{ fontSize: 24, fontWeight: '500', color: '#590d22', marginBottom:12, alignItems:'center' }}>
            {text}
        </Text>
    );
}