import React from 'react';
import { Text, View } from 'react-native';
import translations from './../../translations.json'
import RadioButtonComponent from "@/components/auth/RadioButton";

export default function PatientType({ userType, setUserType }:any) {
    return (
        <View>
            <Text style={{
                fontSize: 16,
                color: '#978386',
                textAlign: 'left',
                marginTop: -12,
                marginLeft: 4
            }}>
                {translations.auth.typeOfUser}
            </Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <RadioButtonComponent
                    label={translations.auth.patient}
                    selected={userType === 'patient'}
                    onPress={() => setUserType('patient')}
                />
                <RadioButtonComponent
                    label={translations.auth.doctor}
                    selected={userType === 'doctor'}
                    onPress={() => setUserType('doctor')}
                />
            </View>
        </View>
    );
};