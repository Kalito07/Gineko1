import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import translations from "./../../translations.json";
import SubmitButton from "@/components/auth/SubmitButton";
import TerminLayout from "@/layouts/_terminLayout";
import Title from "@/components/Title";

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

export default function PregnantScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [visitType, setVisitType] = useState<string | null>(null);
    const [symptoms, setSymptoms] = useState<Symptoms>({
        fever: false,
        bleeding: false,
        abdominalPain: false,
        reducedMovement: false,
        shortnessOfBreath: false,
        burningUrination: false,
        cramps: false,
        diarrheaConstipation: false,
        dizziness: false,
        vaginalDischarge: false,
        severeItching: false,
        severeNausea: false,
    });

    const handleSymptomChange = (symptom: keyof Symptoms) => {
        setSymptoms((prevSymptoms) => ({
            ...prevSymptoms,
            [symptom]: !prevSymptoms[symptom],
        }));
    };

    const submitForm = () => {
        console.log('Selected Visit Type:', visitType);
        console.log('Symptoms:', symptoms);
    };

    return (
        <TerminLayout>
            <Title label={translations.pregnant.pregnantTermin} />
            <Text style={styles.subHeader}>{translations.termin.typeTermin}:</Text>

            <View style={styles.radioGroup}>
                <TouchableOpacity onPress={() => setVisitType('true')} style={styles.radioButton}>
                    <Text style={styles.radioLabel}>Женска консултация (Профилактичен преглед)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setVisitType('false')} style={styles.radioButton}>
                    <Text style={styles.radioLabel}>Гинекологичен преглед</Text>
                </TouchableOpacity>
            </View>

            {visitType === 'false' && (
                <View style={styles.symptomsContainer}>
                    <Text style={styles.legend}>Симптоми:</Text>
                    {Object.keys(symptoms).map((symptom) => (
                        <View key={symptom} style={styles.checkboxContainer}>
                            <Checkbox
                                status={symptoms[symptom as keyof Symptoms] ? 'checked' : 'unchecked'}
                                onPress={() => handleSymptomChange(symptom as keyof Symptoms)}
                                color="#FF6666"
                            />
                            <Text style={styles.checkboxLabel}>
                                {symptom.replace(/([A-Z])/g, ' $1')}
                            </Text>
                        </View>
                    ))}
                </View>
            )}

            <SubmitButton onPress={()=>{navigation.navigate('termin')}} title={translations.termin.save}/>
        </TerminLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFEADD',
    },
    header: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
        color: '#FF6666',
    },
    subHeader: {
        fontSize: 18,
        marginBottom: 10,
        color: '#FF8989',
    },
    radioGroup: {
        flexDirection: 'column',
        marginBottom: 20,
    },
    radioButton: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FCAEAE',
        marginBottom: 10,
    },
    radioLabel: {
        fontSize: 16,
        color: '#FFF',
    },
    symptomsContainer: {
        marginTop: 20,
    },
    legend: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FF6666',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxLabel: {
        fontSize: 16,
        marginLeft: 8,
        color: '#FF6666',
    },
    buttonContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
});
