import {Image, View} from "react-native";
import React from "react";

export default function Logo(){
    return(
    <View style={{marginTop: 6, marginHorizontal:"auto", marginBottom:-16}}>
            <Image
                source={require("../../assets/images/logo.png")}
                alt="Logo"
                style={{height:150, width:220}}
            />
        </View>
    );
}