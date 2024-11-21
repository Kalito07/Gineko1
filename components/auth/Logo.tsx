import {Image, View} from "react-native";
import React from "react";

export default function Logo(){
    return(
    <View style={{marginHorizontal:"auto", marginVertical:-14}}>
            <Image
                source={require("../../assets/images/logo.png")}
                alt="Logo"
                style={{height:150, width:220}}
            />
        </View>
    );
}