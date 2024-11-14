import {Image, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

export default function SocialButton ({ source }:any) {
    return(
        <TouchableOpacity style={styles.socialButton}>
        <Image source={source}></Image>
        </TouchableOpacity>
);
}
const styles = StyleSheet.create({
    socialButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    }
});