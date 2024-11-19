import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import translations from "./../../translations.json";
import TerminLayout from "@/layouts/_terminLayout";
import SubmitButton from "@/components/auth/SubmitButton";
import Title from "@/components/Title";

type Symptoms = {
    heavyBleeding: boolean;
    breastPain: boolean;
    irregularMenstruation: boolean;
    burningUrination: boolean;
    dizziness: boolean;
    vaginalDischarge: boolean;
    severeItching: boolean;
};

export default function UnpregnantScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [visitType, setVisitType] = useState('true');
    const [symptoms, setSymptoms] = useState<Symptoms>({
        heavyBleeding: false,
        breastPain: false,
        irregularMenstruation: false,
        burningUrination: false,
        dizziness: false,
        vaginalDischarge: false,
        severeItching: false,
    });

    const symptomLabels = {
        heavyBleeding: "Heavy Bleeding",
        breastPain: "Breast Pain",
        irregularMenstruation: "Irregular Menstruation",
        burningUrination: "Burning Urination",
        dizziness: "Dizziness",
        vaginalDischarge: "Vaginal Discharge",
        severeItching: "Severe Itching",
    };

    const handleSymptomChange = (symptom: keyof Symptoms) => {
        setSymptoms((prevSymptoms) => ({
            ...prevSymptoms,
            [symptom]: !prevSymptoms[symptom],
        }));
    };

    const submitForm = () => {
        if (visitType === 'false' && !Object.values(symptoms).some(Boolean)) {
            Alert.alert('Validation Error', 'Please select at least one symptom.');
            return;
        }
        console.log('Selected Visit Type:', visitType);
        console.log('Symptoms:', symptoms);
        Alert.alert('Success', 'Your information has been submitted.');
    };

    return (
        <TerminLayout>
            <Title label={translations.unpregnant.unpregnantTermin} />
            <Text style={styles.subHeader}>Вид на посещението:</Text>

            <View style={styles.radioGroup}>
                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => setVisitType('true')}
                    accessibilityRole="button"
                    accessibilityLabel="Select prophylactic check-up"
                >
                    <View style={[
                        styles.radioCircle,
                        visitType === 'true' && styles.radioSelected
                    ]} />
                    <Text style={styles.radioLabel}>Профилактичен преглед</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => setVisitType('false')}
                    accessibilityRole="button"
                    accessibilityLabel="Select gynecological check-up"
                >
                    <View style={[
                        styles.radioCircle,
                        visitType === 'false' && styles.radioSelected
                    ]} />
                    <Text style={styles.radioLabel}>Гинекологичен преглед</Text>
                </TouchableOpacity>
            </View>

            {visitType === 'false' && (
                <View style={styles.symptomsContainer}>
                    <Text style={styles.symptomsHeader}>Симптоми:</Text>
                    {Object.keys(symptoms).map((symptom) => (
                        <TouchableOpacity
                            key={symptom}
                            style={styles.checkboxContainer}
                            onPress={() => handleSymptomChange(symptom as keyof Symptoms)}
                            accessibilityRole="checkbox"
                            accessibilityState={{ checked: symptoms[symptom as keyof Symptoms] }}
                            accessibilityLabel={`Select symptom: ${symptomLabels[symptom as keyof Symptoms]}`}
                        >
                            <View style={[
                                styles.checkbox,
                                symptoms[symptom as keyof Symptoms] && styles.checkboxSelected
                            ]} />
                            <Text style={styles.checkboxLabel}>{symptomLabels[symptom as keyof Symptoms]}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}

            <SubmitButton onPress={() => navigation.navigate('termin')} title={translations.termin.save} />
        </TerminLayout>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 16,
        color: '#FF6666',
    },
    subHeader: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
        color: '#FF8989',
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 24,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FCAEAE',
        marginRight: 8,
    },
    radioSelected: {
        backgroundColor: '#FF6666',
    },
    radioLabel: {
        fontSize: 16,
        color: '#333',
    },
    symptomsContainer: {
        marginBottom: 24,
    },
    symptomsHeader: {
        fontSize: 18,
        fontWeight: '500',
        color: '#FF6666',
        marginBottom: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    checkbox: {
        height: 20,
        width: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#FCAEAE',
        marginRight: 8,
    },
    checkboxSelected: {
        backgroundColor: '#FF6666',
    },
    checkboxLabel: {
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#FF6666',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500',
    },
});
