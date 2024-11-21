import {Text} from "react-native";
import React from "react";

export default function Title({label}:any) {
    return (
        <Text style={{fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
            color: '#590d22', marginTop:170}}>{label}</Text>
    );
 }