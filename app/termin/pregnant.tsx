import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper'; // Import from react-native-paper
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";

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
        <View style={styles.container}>
            <Text style={styles.header}>Час за бременни</Text>
            <Text style={styles.subHeader}>Вид на посещението:</Text>

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
                            />
                            <Text style={styles.checkboxLabel}>
                                {symptom.replace(/([A-Z])/g, ' $1')}
                            </Text>
                        </View>
                    ))}
                </View>
            )}

            <View style={styles.buttonContainer}>
                <Button title="Продължи" onPress={submitForm} color="#3182CE" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 18,
        marginBottom: 10,
    },
    radioGroup: {
        flexDirection: 'column',
        marginBottom: 20,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioLabel: {
        fontSize: 16,
    },
    symptomsContainer: {
        marginTop: 20,
    },
    legend: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxLabel: {
        fontSize: 16,
        marginLeft: 8,
    },
    buttonContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
});
