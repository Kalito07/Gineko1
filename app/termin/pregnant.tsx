import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import { RadioButton } from 'react-native-paper';
import Checkbox from 'expo-checkbox';

export default function Pregnant({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [visitType, setVisitType] = useState<string | null>(null);
    const [symptoms, setSymptoms] = useState({
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

    const handleSymptomChange = (symptom: string) => {
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
                    <RadioButton
                        value="true"
                        status={visitType === 'true' ? 'checked' : 'unchecked'}
                        onPress={() => setVisitType('true')}
                    />
                    <Text style={styles.radioLabel}>Женска консултация (Профилактичен преглед)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setVisitType('false')} style={styles.radioButton}>
                    <RadioButton
                        value="false"
                        status={visitType === 'false' ? 'checked' : 'unchecked'}
                        onPress={() => setVisitType('false')}
                    />
                    <Text style={styles.radioLabel}>Гинекологичен преглед</Text>
                </TouchableOpacity>
            </View>

            {visitType === 'false' && (
                <View style={styles.symptomsContainer}>
                    <Text style={styles.legend}>Симптоми:</Text>
                    {Object.keys(symptoms).map((symptom) => (
                        <View key={symptom} style={styles.checkboxContainer}>
                            <Checkbox
                                value={symptoms[symptom]}
                                onValueChange={() => handleSymptomChange(symptom)}
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
