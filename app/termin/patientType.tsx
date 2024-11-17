import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";

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
        <View style={styles.container}>
            <Text style={styles.header}>Запазете час</Text>
            <Text style={styles.subHeader}>Какво е състоянието Ви?</Text>

            <View style={styles.radioGroup}>
                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => handleOptionChange("true")}
                >
                    <View style={[
                        styles.radioCircle,
                        pregnant === "true" && styles.radioSelected
                    ]} />
                    <Text style={styles.radioLabel}>Бременна</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => handleOptionChange("false")}
                >
                    <View style={[
                        styles.radioCircle,
                        pregnant === "false" && styles.radioSelected
                    ]} />
                    <Text style={styles.radioLabel}>Небременна</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={continueAppointment}>
                <Text style={styles.buttonText}>Продължи</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFEADD',
    },
    header: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16,
        color: '#FF6666',
    },
    subHeader: {
        fontSize: 18,
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
        backgroundColor: '#FCAEAE',
    },
    radioLabel: {
        fontSize: 16,
        color: '#FF6666',
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
