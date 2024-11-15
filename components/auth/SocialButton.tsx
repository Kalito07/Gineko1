import {Image, TouchableOpacity} from "react-native";
import React from "react";

export default function SocialButton ({ source }:any) {
    return(
        <TouchableOpacity style={{backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            borderRadius: 8,
            alignItems: 'center'}}>
        <Image source={source} style={{height:30, width:30}}></Image>
        </TouchableOpacity>
);
}