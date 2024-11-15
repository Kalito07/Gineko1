import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";

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
        console.log('Selected Visit Type:', visitType);
        console.log('Symptoms:', symptoms);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Час за небременни</Text>
            <Text style={styles.subHeader}>Вид на посещението:</Text>

            <View style={styles.radioGroup}>
                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => setVisitType('true')}
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

            <TouchableOpacity style={styles.button} onPress={submitForm}>
                <Text style={styles.buttonText}>Продължи</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 16,
        color: '#333',
    },
    subHeader: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
        color: '#555',
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
        borderColor: '#3182CE',
        marginRight: 8,
    },
    radioSelected: {
        backgroundColor: '#3182CE',
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
        color: '#333',
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
        borderColor: '#3182CE',
        marginRight: 8,
    },
    checkboxSelected: {
        backgroundColor: '#3182CE',
    },
    checkboxLabel: {
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#3182CE',
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
