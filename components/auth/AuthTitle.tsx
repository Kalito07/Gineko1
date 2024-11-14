import {Text} from "react-native";
import React from "react";

export default function AuthTitle({text}:any) {
    return(
        <Text style={{ fontSize: 24, fontWeight: '500', color: '#4A5568', marginBottom: 24 }}>
            {text}
        </Text>
    );
}