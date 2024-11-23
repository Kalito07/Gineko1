import {Text} from "react-native";
import React from "react";
import {useThemeColor} from "@/components/Themed";

export default function AuthTitle({text}:any) {
    const primaryColor = useThemeColor({}, 'primary');
    return(
        <Text style={{ fontSize: 24, fontWeight: '500', color: primaryColor, marginBottom:12, alignItems:'center' }}>
            {text}
        </Text>
    );
}