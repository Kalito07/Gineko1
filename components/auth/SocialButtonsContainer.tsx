import {StyleSheet, View} from "react-native";
import SocialButton from "@/components/auth/SocialButton";
import React from "react";

export default function SocialButtonsContainer () { return(
    <View style={styles.socialContainer}>
        <SocialButton source={require('@/assets/images/google.png')} />
        <SocialButton source={require('@/assets/images/facebook.png')} />
        <SocialButton source={require('@/assets/images/github.png')} />
    </View>
);}

const styles = StyleSheet.create({
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    }
});