import { Text as DefaultText, TouchableOpacity, View as DefaultView, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/lib/navigationTypes';
import { useThemeColor } from '@/components/Themed';
import translations from './../../translations.json';

export function SkipButton({ navigation, targetScreen }: { navigation: NavigationProp<RootStackParamList>;
    targetScreen: any }) {
    const primaryColor = useThemeColor({}, 'primary');
    const secondaryColor = useThemeColor({}, 'background');

    return (
        <DefaultView style={{flex: 1, justifyContent: 'flex-end', width: '100%', paddingHorizontal: 20,}}>
            <DefaultView style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                width: '100%', marginBottom: 20,}}>
                <TouchableOpacity onPress={() => navigation.navigate(targetScreen)}>
                    <DefaultText style={{ color: primaryColor, fontSize: 16 }}>
                        {translations.skips.skipButton}
                    </DefaultText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor: primaryColor, borderRadius: 35, paddingTop: 8, paddingBottom: 20, shadowColor: '#978386',
                        shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6, elevation: 5,
                        paddingHorizontal: 20,}}
                    onPress={() => navigation.navigate(targetScreen)}
                    testID="skip-button"
                >
                    <DefaultText style={{ color: secondaryColor, fontSize: 20 }}>→</DefaultText>
                </TouchableOpacity>
            </DefaultView>
        </DefaultView>
    );
}
