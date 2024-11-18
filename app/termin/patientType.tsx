import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import TerminLayout from "@/layouts/_terminLayout";
import translations from "./../../translations.json";
import RadioButtonComponent from "@/components/auth/RadioButton";
import SubmitButton from "@/components/auth/SubmitButton";
import Title from "@/components/Title";

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
            <Title label={translations.termin["state?"]} />
            <View style={{flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20}}>
                <RadioButtonComponent
                    label={translations.termin.pregnant}
                    selected={pregnant === "true"}
                    onPress={() => handleOptionChange("true")}
                />
                <RadioButtonComponent
                    label={translations.termin.unpregnant}
                    selected={pregnant === "false"}
                    onPress={() => handleOptionChange("false")}
                />
            </View>
            <SubmitButton onPress={continueAppointment} title={translations.termin.save} />
        </TerminLayout>
    );
}