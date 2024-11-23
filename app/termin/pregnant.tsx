import React, { useState } from 'react';
import {View, Text, Alert, useColorScheme} from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import translations from "./../../translations.json";
import SubmitButton from "@/components/auth/SubmitButton";
import Title from "@/components/Title";
import RadioButtonComponent from "@/components/auth/RadioButton";
import AuthLayout from "@/layouts/_authLayout";

export default function PregnantScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const theme = useColorScheme();
    const backgroundColor = theme === 'dark' ? '#272727' : '#ffe0e5';
    const [visitType, setVisitType] = useState<string | null>(null);

    const submitForm = () => {
        if (!visitType) {
            Alert.alert('Validation Error', 'Please select a visit type.');
            return;
        }

        if (visitType === 'true') {
            navigation.navigate('termin');
        } else {
            navigation.navigate('symptoms', { isPregnant: true });
        }
    };

    return (
        <AuthLayout style={{ paddingVertical: 90 }}>
            <Title label={translations.termin.pregnantTermin} />

            <View style={{flexDirection: 'column', paddingVertical:12,
                paddingHorizontal: 16,
                backgroundColor: backgroundColor,
                borderRadius: 24,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
                shadowColor: '#978386'}}>
                <RadioButtonComponent
                    onPress={() => setVisitType('true')}
                    label={translations.termin.profilactica}
                    selected={visitType === 'true'}
                />
                <RadioButtonComponent
                    onPress={() => setVisitType('false')}
                    label={translations.termin.gynecologyTermin}
                    selected={visitType === 'false'}
                />
            </View>

            <SubmitButton onPress={submitForm} title={translations.termin.save} />
        </AuthLayout>
    );
}