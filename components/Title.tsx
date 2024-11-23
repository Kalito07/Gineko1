import {Text} from "react-native";
import React from "react";
import {useThemeColor} from "@/components/Themed";

export default function Title({label}:any) {
    const primary = useThemeColor({},'primary');
    return (
        <Text style={{fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
            color: primary, marginTop:170}}>{label}</Text>
    );
 }