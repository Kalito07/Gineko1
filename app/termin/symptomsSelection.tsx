import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/lib/navigationTypes';
import SubmitButton from '@/components/auth/SubmitButton';
import translations from './../../translations.json';

type Symptoms = {
    fever: boolean;
    bleeding: boolean;
    abdominalPain: boolean;
    reducedMovement: boolean;
    shortnessOfBreath: boolean;
    burningUrination: boolean;
    cramps: boolean;
    diarrheaConstipation: boolean;
    dizziness: boolean;
    vaginalDischarge: boolean;
    severeItching: boolean;
    severeNausea: boolean;
};

export default function SymptomsSelectionScreen({
                                                    navigation,
                                                    route,
                                                }: {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'symptoms'>;
}) {
    const [symptoms, setSymptoms] = useState<Symptoms>(route.params.symptoms);

    const handleSymptomChange = (symptom: keyof Symptoms) => {
        setSymptoms((prevSymptoms) => ({
            ...prevSymptoms,
            [symptom]: !prevSymptoms[symptom],
        }));
    };

    const saveSymptoms = () => {
        navigation.navigate('termin', {
            visitType: 'false',
            symptoms,
            message: translations.termin.appointmentSaved,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{translations.termin.symptoms}</Text>
            {Object.keys(symptoms).map((symptom) => (
                <View key={symptom} style={styles.checkboxContainer}>
                    <Checkbox
                        status={symptoms[symptom as keyof Symptoms] ? 'checked' : 'unchecked'}
                        onPress={() => handleSymptomChange(symptom as keyof Symptoms)}
                        color="#FF6666"
                    />
                    <Text style={styles.checkboxLabel}>
                        {translations.pregnant[symptom as keyof typeof translations.pregnant]}
                    </Text>
                </View>
            ))}
            <SubmitButton onPress={saveSymptoms} title={translations.termin.save} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFEADD',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF6666',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxLabel: {
        fontSize: 16,
        marginLeft: 8,
        color: '#590d22',
    },
});
