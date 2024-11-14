import {Image, View} from "react-native";
import React from "react";

export default function Logo(){
    return(
    <View style={{alignItems: 'center',
        marginBottom: 24,
        height: 50,
        width: 100}}>
            <Image
                source={require("../images/logo.png")}
                alt="Logo"
            />
        </View>
    );
}