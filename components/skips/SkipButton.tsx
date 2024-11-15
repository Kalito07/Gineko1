import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import translations from "./../../translations.json";

export function SkipButton({ navigation, targetScreen }: { navigation: NavigationProp<RootStackParamList>; targetScreen: any }) {
    return (
        <View style={{flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 70,
            marginBottom: 20,
            width: '100%',
            paddingHorizontal: 20}}>
            <TouchableOpacity onPress={() => navigation.navigate(targetScreen)}>
                <Text style={{color: '#590d22',
                    fontSize: 18}}>{translations.skips.skipButton}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#590d22',
                borderRadius: 35,
                paddingBottom: 20, paddingHorizontal:20, paddingTop:12}} onPress={() => navigation.navigate(targetScreen)}>
                <Text style={{color: '#fff',
                    fontSize: 18}}>→</Text>
            </TouchableOpacity>
        </View>
    );
}