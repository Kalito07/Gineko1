import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import translations from "./../../translations.json";

export function SkipButton({ navigation, targetScreen }: { navigation: NavigationProp<RootStackParamList>; targetScreen: any }) {
    return (
        <View style={{flex: 1,
            justifyContent: 'flex-end',
            width: '100%',
            paddingHorizontal: 20}}>
            <View style={{flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginBottom: 20}}>
                <TouchableOpacity onPress={() => navigation.navigate(targetScreen)}>
                    <Text style={{color: '#590d22',
                        fontSize: 16}}>{translations.skips.skipButton}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor: '#590d22',
                        borderRadius: 35,
                        paddingTop: 8,
                        paddingBottom: 20,
                        paddingHorizontal: 20}}
                    onPress={() => navigation.navigate(targetScreen)}>
                    <Text style={{color: 'white',
                        fontSize: 20}}>→</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}