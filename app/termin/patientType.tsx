import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import TerminLayout from "@/layouts/_terminLayout";
import translations from "./../../translations.json";
import RadioButtonComponent from "@/components/auth/RadioButton";
import SubmitButton from "@/components/auth/SubmitButton";

export default function PatientTypeScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [pregnant, setPregnant] = useState<string | null>(null);

    const handleOptionChange = (value: string) => {
        setPregnant(value);
    };

    const continueAppointment = () => {
        const route = pregnant === "true" ? "pregnant" : "unpregnant";
        navigation.navigate(route);
    };

    return (
        <TerminLayout>
            <Text style={{fontSize: 18,
                textAlign: 'center',
                marginBottom: 24,
                color:'#590d22'}}>{translations.termin["state?"]}</Text>
<RadioButtonComponent  label={translations.termin.pregnant}
                      selected={pregnant === 'true'} onPress={()=>handleOptionChange('true')}/>
            <RadioButtonComponent  label={translations.termin.unpregnant}
                                   selected={pregnant === 'false'} onPress={()=>handleOptionChange('false')}/>
<SubmitButton onPress={continueAppointment} label={translations.skips.skipButton}/>
        </TerminLayout>
    );
}