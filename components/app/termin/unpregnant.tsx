import React, { useState } from 'react';
import {View, useColorScheme} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/lib/navigationTypes';
import translations from './../../translations.json';
import SubmitButton from '@/components/auth/SubmitButton';
import Title from '@/components/Title';
import AuthLayout from '@/layouts/_authLayout';
import RadioButtonComponent from "@/components/auth/RadioButton";

export default function UnpregnantScreen({navigation,}: { navigation: NavigationProp<RootStackParamList>; }) {
    const theme = useColorScheme();
    const backgroundColor = theme === 'dark' ? '#272727' : '#ffe0e5';
    const [visitType, setVisitType] = useState('true');
    const navigateToScreen = () => {
        if (visitType === 'true') {
            navigation.navigate('termin');
        } else {
            navigation.navigate('symptoms', { isPregnant: false });
        }
    };

    return (
        <AuthLayout style={{ paddingVertical: 90 }}>
            <Title label={translations.termin.unpregnantTermin} />

            <View style={{flexDirection: 'column', paddingVertical:12,
                paddingHorizontal: 16,
                backgroundColor: backgroundColor,
                borderRadius: 24,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
                shadowColor: '#978386'}}>
                <RadioButtonComponent selected={visitType === 'true'} onPress={() => setVisitType('true')} label={translations.termin.profilactica2}/>
                <RadioButtonComponent selected={visitType === 'false'} onPress={() => setVisitType('false')} label={translations.termin.gynecologyTermin}/>
            </View>

            <SubmitButton onPress={navigateToScreen} title={translations.termin.save} />
        </AuthLayout>
    );
}