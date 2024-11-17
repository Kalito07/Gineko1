import { View} from "react-native";
import SocialButton from "@/components/auth/SocialButton";
import React from "react";

export default function SocialButtonsContainer () { return(
    <View style={{flexDirection: 'row',
        justifyContent: 'center',
        gap: 15, marginBottom:20}}>
        <SocialButton source={require('@/assets/images/google.png')} />
        <SocialButton source={require('@/assets/images/facebook.png')} />
        <SocialButton source={require('@/assets/images/github.png')} />
    </View>
);}